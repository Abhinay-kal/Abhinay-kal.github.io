import { SYSTEM_PROMPT } from './prompt.js';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim());
  return {
    'Access-Control-Allow-Origin': allowed.includes(origin) ? origin : allowed[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

// Counts a request against a per-IP and a global daily budget. Returns remaining for this IP, or -1 if blocked.
async function takeQuota(env, ip) {
  const day = new Date().toISOString().slice(0, 10);
  const ipKey = `ip:${ip}:${day}`;
  const globalKey = `global:${day}`;
  const ipLimit = parseInt(env.DAILY_LIMIT_PER_IP, 10);
  const globalLimit = parseInt(env.DAILY_LIMIT_GLOBAL, 10);

  const [ipCount, globalCount] = await Promise.all([
    env.RATE_LIMIT.get(ipKey).then(v => parseInt(v || '0', 10)),
    env.RATE_LIMIT.get(globalKey).then(v => parseInt(v || '0', 10)),
  ]);
  if (ipCount >= ipLimit || globalCount >= globalLimit) {
    return { ok: false, reason: ipCount >= ipLimit ? 'ip' : 'global' };
  }
  await Promise.all([
    env.RATE_LIMIT.put(ipKey, String(ipCount + 1), { expirationTtl: 86400 }),
    env.RATE_LIMIT.put(globalKey, String(globalCount + 1), { expirationTtl: 86400 }),
  ]);
  return { ok: true, remaining: ipLimit - ipCount - 1 };
}

async function askGroq(env, messages) {
  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${env.GROQ_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: env.GROQ_MODEL, messages, temperature: 0.4, max_tokens: 400 }),
  });
  if (!res.ok) throw new Error(`groq ${res.status}`);
  const data = await res.json();
  return data.choices[0].message.content;
}

async function askWorkersAI(env, messages) {
  const out = await env.AI.run(env.FALLBACK_MODEL, { messages, max_tokens: 400, temperature: 0.4 });
  return out.response;
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, cors);

    const origin = request.headers.get('Origin') || '';
    if (!(env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).includes(origin)) {
      return json({ error: 'Forbidden' }, 403, cors);
    }

    let body;
    try { body = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400, cors); }

    const history = Array.isArray(body.messages) ? body.messages.slice(-6) : [];
    const clean = history
      .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .map(m => ({ role: m.role, content: m.content.slice(0, 500) }));
    if (!clean.length || clean[clean.length - 1].role !== 'user') {
      return json({ error: 'Send at least one user message' }, 400, cors);
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const quota = await takeQuota(env, ip);
    if (!quota.ok) {
      const msg = quota.reason === 'ip'
        ? "You've reached today's message limit. Please email Abhinay directly at abhinay2003kalkhanday@gmail.com."
        : "The Copilot is resting for today. Please email Abhinay directly at abhinay2003kalkhanday@gmail.com.";
      return json({ reply: msg, remaining: 0, limited: true }, 429, cors);
    }

    const messages = [{ role: 'system', content: SYSTEM_PROMPT }, ...clean];
    let reply;
    try {
      reply = await askGroq(env, messages);
    } catch (e) {
      try { reply = await askWorkersAI(env, messages); }
      catch { return json({ error: 'The Copilot is unavailable right now.' }, 502, cors); }
    }
    return json({ reply, remaining: quota.remaining }, 200, cors);
  },
};
