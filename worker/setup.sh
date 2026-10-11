#!/usr/bin/env bash
# One-time setup + deploy for the Copilot Worker. Run from the worker/ folder.
set -euo pipefail
cd "$(dirname "$0")"

echo "1/4  Cloudflare login"
npx --yes wrangler@latest whoami 2>&1 | grep -q "not authenticated" && npx wrangler login || echo "     already logged in"

echo "2/4  Create the rate-limit KV namespace (wrangler adds the binding to wrangler.toml)"
if grep -q 'RATE_LIMIT' wrangler.toml; then
  echo "     binding already present, skipping"
else
  npx wrangler kv namespace create RATE_LIMIT --binding RATE_LIMIT --update-config
fi
grep -q 'RATE_LIMIT' wrangler.toml || { echo "KV binding missing from wrangler.toml"; exit 1; }

echo "3/4  Paste your Groq API key when prompted (input is hidden, never stored in files)"
npx wrangler secret put GROQ_API_KEY

echo "4/4  Deploy"
npx wrangler deploy
