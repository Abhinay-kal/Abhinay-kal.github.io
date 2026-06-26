const fileContents = {
    home: {
        name: 'home.tsx', lang: 'TypeScript',
        breadcrumb: ['abhinay-kalkhanday', 'src', 'home.tsx'],
        content: [
            { num: 1, code: '<span class="comment">// home.tsx — Welcome to my portfolio</span>' },
            { num: 2, code: '<span class="keyword">import</span> { <span class="variable">Engineer</span>, <span class="variable">Builder</span>, <span class="variable">Optimizer</span> } <span class="keyword">from</span> <span class="string">\'./identity\'</span>;' },
            { num: 3, code: '' },
            { num: 4, code: '<span class="keyword">interface</span> <span class="type">Portfolio</span> {' },
            { num: 5, code: '  <span class="property">name</span>: <span class="type">string</span>;' },
            { num: 6, code: '  <span class="property">title</span>: <span class="type">string</span>;' },
            { num: 7, code: '  <span class="property">university</span>: <span class="type">string</span>;' },
            { num: 8, code: '  <span class="property">focus</span>: <span class="type">string</span>[];' },
            { num: 9, code: '  <span class="property">graduation</span>: <span class="type">number</span>;' },
            { num: 10, code: '}' },
            { num: 11, code: '' },
            { num: 12, code: '<span class="keyword">const</span> <span class="variable">abhinay</span>: <span class="type">Portfolio</span> = {' },
            { num: 13, code: '  <span class="property">name</span>: <span class="string">"Abhinay Kalkhanday"</span>,' },
            { num: 14, code: '  <span class="property">title</span>: <span class="string">"Software Engineering Intern"</span>,' },
            { num: 15, code: '  <span class="property">university</span>: <span class="string">"Manipal University Jaipur"</span>,' },
            { num: 16, code: '  <span class="property">focus</span>: [' },
            { num: 17, code: '    <span class="string">"Performance Engineering"</span>,' },
            { num: 18, code: '    <span class="string">"Browser Automation"</span>,' },
            { num: 19, code: '    <span class="string">"Distributed Systems"</span>,' },
            { num: 20, code: '    <span class="string">"ML/AI Pipelines"</span>' },
            { num: 21, code: '  ],' },
            { num: 22, code: '  <span class="property">graduation</span>: <span class="number">2026</span>' },
            { num: 23, code: '};' },
            { num: 24, code: '' },
            { num: 25, code: '<span class="keyword">export default</span> <span class="keyword">function</span> <span class="function">Home</span>() {' },
            { num: 26, code: '  <span class="keyword">return</span> (' },
            { num: 27, code: '    &lt;<span class="tag">section</span> <span class="attr">className</span>=<span class="string">"hero"</span>&gt;' },
            { num: 28, code: '      &lt;<span class="tag">h1</span>&gt;Hi, I\'m <span class="variable">{abhinay.name}</span> 👋&lt;/<span class="tag">h1</span>&gt;' },
            { num: 29, code: '      &lt;<span class="tag">p</span>&gt;{abhinay.title} @ <span class="string">Matrix Education</span>&lt;/<span class="tag">p</span>&gt;' },
            { num: 30, code: '      &lt;<span class="tag">p</span>&gt;B.Tech CSE (IoT &amp; Intelligent Systems)&lt;/<span class="tag">p</span>&gt;' },
            { num: 31, code: '    &lt;/<span class="tag">section</span>&gt;' },
            { num: 32, code: '  );' },
            { num: 33, code: '}' },
        ]
    },
    about: {
        name: 'about.html', lang: 'HTML',
        breadcrumb: ['abhinay-kalkhanday', 'src', 'about.html'],
        content: [
            { num: 1, code: '<span class="comment">&lt;!-- about.html — Who I am --&gt;</span>' },
            { num: 2, code: '&lt;<span class="tag">section</span> <span class="attr">id</span>=<span class="string">"about"</span>&gt;' },
            { num: 3, code: '  &lt;<span class="tag">h2</span>&gt;About Me&lt;/<span class="tag">h2</span>&gt;' },
            { num: 4, code: '' },
            { num: 5, code: '  &lt;<span class="tag">div</span> <span class="attr">class</span>=<span class="string">"bio"</span>&gt;' },
            { num: 6, code: '    &lt;<span class="tag">p</span>&gt;' },
            { num: 7, code: '      I\'m a <span class="string">B.Tech Computer Science</span> student (IoT &amp; Intelligent Systems)' },
            { num: 8, code: '      at <span class="string">Manipal University Jaipur</span>, graduating in <span class="string">2026</span>.' },
            { num: 9, code: '      Currently interning at <span class="string">Matrix Education</span>, where I optimize' },
            { num: 10, code: '      production websites and build browser automation workflows.' },
            { num: 11, code: '    &lt;/<span class="tag">p</span>&gt;' },
            { num: 12, code: '    &lt;<span class="tag">p</span>&gt;' },
            { num: 13, code: '      My work spans <span class="string">performance engineering</span>, <span class="string">distributed systems</span>,' },
            { num: 14, code: '      <span class="string">ML pipelines</span>, and <span class="string">document intelligence</span>. I\'ve built platforms' },
            { num: 15, code: '      that reduced page load times from <span class="string">45s → 5.6s</span> and processed' },
            { num: 16, code: '      <span class="string">780 voter records in under 75 seconds</span>.' },
            { num: 17, code: '    &lt;/<span class="tag">p</span>&gt;' },
            { num: 18, code: '    &lt;<span class="tag">p</span>&gt;' },
            { num: 19, code: '      I\'m passionate about building resilient, production-grade systems' },
            { num: 20, code: '      that solve real-world problems at scale.' },
            { num: 21, code: '    &lt;/<span class="tag">p</span>&gt;' },
            { num: 22, code: '  &lt;/<span class="tag">div</span>&gt;' },
            { num: 23, code: '' },
            { num: 24, code: '  &lt;<span class="tag">div</span> <span class="attr">class</span>=<span class="string">"interests"</span>&gt;' },
            { num: 25, code: '    &lt;<span class="tag">h3</span>&gt;Interests&lt;/<span class="tag">h3</span>&gt;' },
            { num: 26, code: '    &lt;<span class="tag">ul</span>&gt;' },
            { num: 27, code: '      &lt;<span class="tag">li</span>&gt;Performance Engineering &amp; Optimization&lt;/<span class="tag">li</span>&gt;' },
            { num: 28, code: '      &lt;<span class="tag">li</span>&gt;Distributed Systems &amp; Job Orchestration&lt;/<span class="tag">li</span>&gt;' },
            { num: 29, code: '      &lt;<span class="tag">li</span>&gt;Machine Learning &amp; Computer Vision&lt;/<span class="tag">li</span>&gt;' },
            { num: 30, code: '      &lt;<span class="tag">li</span>&gt;Browser Automation &amp; Web Scraping&lt;/<span class="tag">li</span>&gt;' },
            { num: 31, code: '      &lt;<span class="tag">li</span>&gt;DevOps &amp; Infrastructure&lt;/<span class="tag">li</span>&gt;' },
            { num: 32, code: '    &lt;/<span class="tag">ul</span>&gt;' },
            { num: 33, code: '  &lt;/<span class="tag">div</span>&gt;' },
            { num: 34, code: '&lt;/<span class="tag">section</span>&gt;' },
        ]
    },
    projects: {
        name: 'projects.js', lang: 'JavaScript',
        breadcrumb: ['abhinay-kalkhanday', 'src', 'projects.js'],
        content: [
            { num: 1, code: '<span class="comment">// projects.js — Featured Projects</span>' },
            { num: 2, code: '' },
            { num: 3, code: '<span class="keyword">const</span> <span class="variable">projects</span> = [' },
            { num: 4, code: '  {' },
            { num: 5, code: '    <span class="property">name</span>: <span class="string">"Content Operations Automation Platform"</span>,' },
            { num: 6, code: '    <span class="property">description</span>: <span class="string">"Stateful job orchestration for browser workloads"</span>,' },
            { num: 7, code: '    <span class="property">tech</span>: [<span class="string">"Node.js"</span>, <span class="string">"Express.js"</span>, <span class="string">"Playwright"</span>, <span class="string">"SQLite"</span>, <span class="string">"PM2"</span>],' },
            { num: 8, code: '    <span class="property">highlights</span>: [' },
            { num: 9, code: '      <span class="string">"Persistent queues with priority scheduling"</span>,' },
            { num: 10, code: '      <span class="string">"FSM-based crash recovery (8 states, 7 failure categories)"</span>,' },
            { num: 11, code: '      <span class="string">"Auto-recovery within 60 seconds after browser failures"</span>,' },
            { num: 12, code: '      <span class="string">"Automated content maintenance &amp; human review routing"</span>' },
            { num: 13, code: '    ]' },
            { num: 14, code: '  },' },
            { num: 15, code: '  {' },
            { num: 16, code: '    <span class="property">name</span>: <span class="string">"Judicial Transparency Delay Analytics"</span>,' },
            { num: 17, code: '    <span class="property">description</span>: <span class="string">"Analyzes court data from 4 Indian judicial sources"</span>,' },
            { num: 18, code: '    <span class="property">tech</span>: [<span class="string">"FastAPI"</span>, <span class="string">"PostgreSQL"</span>, <span class="string">"Redis"</span>, <span class="string">"Celery"</span>, <span class="string">"Docker"</span>, <span class="string">"Next.js"</span>],' },
            { num: 19, code: '    <span class="property">highlights</span>: [' },
            { num: 20, code: '      <span class="string">"29 Celery tasks with Redis for distributed workflows"</span>,' },
            { num: 21, code: '      <span class="string">"ML models for case duration &amp; delay severity prediction"</span>,' },
            { num: 22, code: '      <span class="string">"Resilient ingestion with schema validation &amp; audit logging"</span>,' },
            { num: 23, code: '      <span class="string">"Scheduled retraining pipelines for ML operations"</span>' },
            { num: 24, code: '    ]' },
            { num: 25, code: '  },' },
            { num: 26, code: '  {' },
            { num: 27, code: '    <span class="property">name</span>: <span class="string">"Electra-Core: Voter Roll Extraction"</span>,' },
            { num: 28, code: '    <span class="property">description</span>: <span class="string">"Intelligent extraction from degraded voter roll PDFs"</span>,' },
            { num: 29, code: '    <span class="property">tech</span>: [<span class="string">"OpenCV"</span>, <span class="string">"Tesseract OCR"</span>, <span class="string">"Streamlit"</span>],' },
            { num: 30, code: '    <span class="property">highlights</span>: [' },
            { num: 31, code: '      <span class="string">"4 extraction strategies with automatic fallback"</span>,' },
            { num: 32, code: '      <span class="string">"5-rule quality-gated validation pipeline"</span>,' },
            { num: 33, code: '      <span class="string">"780 records from 26 pages in 30-75 seconds"</span>,' },
            { num: 34, code: '      <span class="string">"Human-in-the-loop review with Streamlit"</span>' },
            { num: 35, code: '    ]' },
            { num: 36, code: '  }' },
            { num: 37, code: '];' },
            { num: 38, code: '' },
            { num: 39, code: '<span class="keyword">export</span> <span class="keyword">default</span> <span class="variable">projects</span>;' },
        ]
    },
    skills: {
        name: 'skills.json', lang: 'JSON',
        breadcrumb: ['abhinay-kalkhanday', 'src', 'skills.json'],
        content: [
            { num: 1, code: '{' },
            { num: 2, code: '  <span class="property">"languages"</span>: [' },
            { num: 3, code: '    <span class="string">"Java"</span>, <span class="string">"Python"</span>, <span class="string">"JavaScript"</span>, <span class="string">"PHP"</span>, <span class="string">"SQL"</span>' },
            { num: 4, code: '  ],' },
            { num: 5, code: '  <span class="property">"backend"</span>: [' },
            { num: 6, code: '    <span class="string">"FastAPI"</span>, <span class="string">"Express.js"</span>, <span class="string">"Node.js"</span>, <span class="string">"REST APIs"</span>' },
            { num: 7, code: '  ],' },
            { num: 8, code: '  <span class="property">"databases"</span>: [' },
            { num: 9, code: '    <span class="string">"PostgreSQL"</span>, <span class="string">"Redis"</span>, <span class="string">"SQLite"</span>, <span class="string">"MySQL"</span>, <span class="string">"MongoDB"</span>' },
            { num: 10, code: '  ],' },
            { num: 11, code: '  <span class="property">"infrastructure"</span>: [' },
            { num: 12, code: '    <span class="string">"Docker"</span>, <span class="string">"Git"</span>, <span class="string">"GitHub Actions"</span>, <span class="string">"Cloudflare"</span>, <span class="string">"Postman"</span>' },
            { num: 13, code: '  ],' },
            { num: 14, code: '  <span class="property">"automation"</span>: [' },
            { num: 15, code: '    <span class="string">"Playwright"</span>, <span class="string">"Browser Automation"</span>,' },
            { num: 16, code: '    <span class="string">"Job Queues"</span>, <span class="string">"Workflow Orchestration"</span>' },
            { num: 17, code: '  ],' },
            { num: 18, code: '  <span class="property">"ml_ai"</span>: [' },
            { num: 19, code: '    <span class="string">"Scikit-learn"</span>, <span class="string">"spaCy"</span>, <span class="string">"OpenCV"</span>, <span class="string">"Tesseract OCR"</span>' },
            { num: 20, code: '  ],' },
            { num: 21, code: '  <span class="property">"frontend"</span>: [' },
            { num: 22, code: '    <span class="string">"HTML5"</span>, <span class="string">"CSS3"</span>, <span class="string">"Vanilla JavaScript"</span>, <span class="string">"Next.js"</span>' },
            { num: 23, code: '  ]' },
            { num: 24, code: '}' },
        ]
    },
    experience: {
        name: 'experience.ts', lang: 'TypeScript',
        breadcrumb: ['abhinay-kalkhanday', 'src', 'experience.ts'],
        content: [
            { num: 1, code: '<span class="comment">// experience.ts — professional journey</span>' },
            { num: 2, code: '' },
            { num: 3, code: '<span class="keyword">interface</span> <span class="type">Career</span> <span class="keyword">extends</span> <span class="type">Timeline</span> {}' },
            { num: 4, code: '' },
            { num: 5, code: '<span class="keyword">const</span> <span class="variable">experience</span>: <span class="type">Career</span>[] = [' },
            { num: 6, code: '  {' },
            { num: 7, code: '    <span class="property">period</span>: <span class="string">"Jan 2026 – Present"</span>,' },
            { num: 8, code: '    <span class="property">role</span>: <span class="string">"Software Engineering Intern"</span>,' },
            { num: 9, code: '    <span class="property">company</span>: <span class="string">"@ Matrix Education, Jaipur"</span>,' },
            { num: 10, code: '    <span class="property">achievements</span>: [' },
            { num: 11, code: '      <span class="string">"Reduced load time 45s → 5.6s, LCP 9.6s → 0.9s"</span>,' },
            { num: 12, code: '      <span class="string">"Optimized 12 production websites, TTFB 4.0s → 0.3s"</span>,' },
            { num: 13, code: '      <span class="string">"Serving 31k monthly visitors, 388k requests/month"</span>,' },
            { num: 14, code: '      <span class="string">"CDN &amp; caching optimization via Cloudflare"</span>,' },
            { num: 15, code: '      <span class="string">"Reusable CMS architectures with Playwright + Express.js"</span>,' },
            { num: 16, code: '      <span class="string">"Mitigated SEO spam incident, hardened deployments"</span>' },
            { num: 17, code: '    ],' },
            { num: 18, code: '    <span class="property">tech</span>: [<span class="string">"Node.js"</span>, <span class="string">"Express.js"</span>, <span class="string">"Playwright"</span>,' },
            { num: 19, code: '           <span class="string">"Cloudflare"</span>, <span class="string">"CMS"</span>, <span class="string">"Performance"</span>]' },
            { num: 20, code: '  },' },
            { num: 21, code: '  {' },
            { num: 22, code: '    <span class="property">period</span>: <span class="string">"May 2024 – Jun 2024"</span>,' },
            { num: 23, code: '    <span class="property">role</span>: <span class="string">"Intern — ATS &amp; SCADA Systems"</span>,' },
            { num: 24, code: '    <span class="property">company</span>: <span class="string">"@ Jaipur Metro Rail Corporation"</span>,' },
            { num: 25, code: '    <span class="property">achievements</span>: [' },
            { num: 26, code: '      <span class="string">"Analyzed complex ATS &amp; SCADA architectures"</span>,' },
            { num: 27, code: '      <span class="string">"Authored technical training suite for new interns"</span>,' },
            { num: 28, code: '      <span class="string">"Training material adopted as standard onboarding"</span>' },
            { num: 29, code: '    ],' },
            { num: 30, code: '    <span class="property">tech</span>: [<span class="string">"SCADA"</span>, <span class="string">"ATS"</span>, <span class="string">"Technical Documentation"</span>]' },
            { num: 31, code: '  }' },
            { num: 32, code: '];' },
            { num: 33, code: '' },
            { num: 34, code: '<span class="keyword">const</span> <span class="variable">education</span> = {' },
            { num: 35, code: '  <span class="property">degree</span>: <span class="string">"B.Tech Computer Science (IoT &amp; Intelligent Systems)"</span>,' },
            { num: 36, code: '  <span class="property">university</span>: <span class="string">"Manipal University Jaipur"</span>,' },
            { num: 37, code: '  <span class="property">location</span>: <span class="string">"Jaipur, Rajasthan"</span>,' },
            { num: 38, code: '  <span class="property">graduation</span>: <span class="number">2026</span>' },
            { num: 39, code: '};' },
            { num: 40, code: '' },
            { num: 41, code: '<span class="keyword">export</span> { <span class="variable">experience</span>, <span class="variable">education</span> };' },
        ]
    },
    contact: {
        name: 'contact.css', lang: 'CSS',
        breadcrumb: ['abhinay-kalkhanday', 'src', 'contact.css'],
        content: [
            { num: 1, code: '<span class="comment">/* contact.css — Let\'s connect! */</span>' },
            { num: 2, code: '' },
            { num: 3, code: '<span class="tag">.contact-section</span> {' },
            { num: 4, code: '  <span class="property">display</span>: <span class="string">flex</span>;' },
            { num: 5, code: '  <span class="property">flex-direction</span>: <span class="string">column</span>;' },
            { num: 6, code: '  <span class="property">align-items</span>: <span class="string">center</span>;' },
            { num: 7, code: '  <span class="property">padding</span>: <span class="number">60px</span> <span class="number">20px</span>;' },
            { num: 8, code: '  <span class="property">background</span>: <span class="string">linear-gradient(135deg, #0f0c29, #302b63, #24243e)</span>;' },
            { num: 9, code: '}' },
            { num: 10, code: '' },
            { num: 11, code: '<span class="tag">.contact-links</span> {' },
            { num: 12, code: '  <span class="property">display</span>: <span class="string">flex</span>;' },
            { num: 13, code: '  <span class="property">gap</span>: <span class="number">24px</span>;' },
            { num: 14, code: '  <span class="property">margin-top</span>: <span class="number">32px</span>;' },
            { num: 15, code: '}' },
            { num: 16, code: '' },
            { num: 17, code: '<span class="tag">.contact-links</span> <span class="tag">a</span> {' },
            { num: 18, code: '  <span class="property">color</span>: <span class="string">#ffffff</span>;' },
            { num: 19, code: '  <span class="property">text-decoration</span>: <span class="string">none</span>;' },
            { num: 20, code: '  <span class="property">font-size</span>: <span class="number">16px</span>;' },
            { num: 21, code: '  <span class="property">padding</span>: <span class="number">12px</span> <span class="number">24px</span>;' },
            { num: 22, code: '  <span class="property">border</span>: <span class="number">1px</span> <span class="string">solid rgba(255,255,255,0.2)</span>;' },
            { num: 23, code: '  <span class="property">border-radius</span>: <span class="number">8px</span>;' },
            { num: 24, code: '  <span class="property">transition</span>: <span class="string">all 0.3s ease</span>;' },
            { num: 25, code: '}' },
            { num: 26, code: '' },
            { num: 27, code: '<span class="tag">.contact-links</span> <span class="tag">a</span><span class="keyword">:hover</span> {' },
            { num: 28, code: '  <span class="property">background</span>: <span class="string">rgba(0, 122, 204, 0.2)</span>;' },
            { num: 29, code: '  <span class="property">border-color</span>: <span class="string">#007acc</span>;' },
            { num: 30, code: '  <span class="property">transform</span>: <span class="string">translateY(-2px)</span>;' },
            { num: 31, code: '}' },
            { num: 32, code: '' },
            { num: 33, code: '<span class="comment">/* 📧 Email: abhinay2003kalkhanday@gmail.com */</span>' },
            { num: 34, code: '<span class="comment">/* 📱 Phone: +91 9875800189 */</span>' },
            { num: 35, code: '<span class="comment">/* 💼 LinkedIn: linkedin.com/in/abhinay-kalkhanday */</span>' },
            { num: 36, code: '<span class="comment">/* 🐙 GitHub: github.com/abhinaykalkhanday */</span>' },
            { num: 37, code: '<span class="comment">/* 🌐 Portfolio: abhinay-kal.github.io */</span>' },
        ]
    },
    readme: {
        name: 'README.md', lang: 'Markdown',
        breadcrumb: ['abhinay-kalkhanday', 'README.md'],
        content: [
            { num: 1, code: '<span class="tag"># Abhinay Kalkhanday — Portfolio</span>' },
            { num: 2, code: '' },
            { num: 3, code: '<span class="string">> Software Engineering Intern | Performance Engineer | Systems Builder</span>' },
            { num: 4, code: '' },
            { num: 5, code: '<span class="tag">## 🚀 Quick Start</span>' },
            { num: 6, code: '<span class="text">Explore the files in the sidebar to learn more about my skills, experience, and projects.</span>' },
            { num: 7, code: '<span class="text">You can also try using the Terminal or asking the Copilot below!</span>' }
        ]
    },
    resume: {
        name: 'Abhinay_Kalkhanday_Resume.pdf', lang: 'PDF',
        breadcrumb: ['abhinay-kalkhanday', 'Abhinay_Kalkhanday_Resume.pdf'],
        content: [
            { num: 1, code: '<span class="comment">Loading PDF Viewer...</span>' },
            { num: 2, code: '<span class="keyword">Please check the real PDF file in the repository</span>' }
        ]
    }
};

let openTabs = ['home'];
let activeTab = 'home';

function updateTabsUI() {
    const tabsContainer = document.getElementById('tabsContainer');
    tabsContainer.innerHTML = '';
    
    openTabs.forEach(fileKey => {
        const file = fileContents[fileKey];
        if(!file) return;
        const iconClass = getIconClass(fileKey);
        
        const tabEl = document.createElement('div');
        tabEl.className = `tab ${activeTab === fileKey ? 'active' : ''}`;
        tabEl.onclick = () => switchTab(fileKey);
        tabEl.innerHTML = `
            <i class="${iconClass}"></i>
            <span>${file.name}</span>
            <span class="tab-close" onclick="event.stopPropagation(); closeTab('${fileKey}')">×</span>
        `;
        tabsContainer.appendChild(tabEl);
    });
}

function getIconClass(fileKey) {
    switch(fileKey) {
        case 'home': return 'fab fa-react';
        case 'about': return 'fab fa-html5';
        case 'projects': return 'fab fa-js';
        case 'skills': return 'fas fa-code';
        case 'experience': return 'fab fa-js';
        case 'contact': return 'fab fa-css3-alt';
        case 'readme': return 'fas fa-book';
        case 'resume': return 'fas fa-file-pdf';
        default: return 'fas fa-file';
    }
}

function switchTab(fileKey) {
    if(!openTabs.includes(fileKey)) {
        openTabs.push(fileKey);
    }
    activeTab = fileKey;
    updateTabsUI();
    renderContent();
    updateSidebarUI();
}

function closeTab(fileKey) {
    openTabs = openTabs.filter(t => t !== fileKey);
    if(activeTab === fileKey) {
        activeTab = openTabs.length > 0 ? openTabs[openTabs.length - 1] : null;
    }
    updateTabsUI();
    renderContent();
    updateSidebarUI();
}

function openFile(fileKey) {
    switchTab(fileKey);
}

function updateSidebarUI() {
    document.querySelectorAll('.tree-item.file').forEach(el => {
        el.classList.remove('active');
        if(el.getAttribute('data-file') === activeTab) {
            el.classList.add('active');
        }
    });
}

function renderContent() {
    const editor = document.getElementById('editorContent');
    const breadcrumb = document.getElementById('breadcrumb');
    
    if(!activeTab || !fileContents[activeTab]) {
        editor.innerHTML = '<div class="welcome-page"><h1>No file is open</h1></div>';
        breadcrumb.innerHTML = '';
        return;
    }
    
    const file = fileContents[activeTab];
    document.getElementById('statusLang').innerText = file.lang;
    
    breadcrumb.innerHTML = file.breadcrumb.map((crumb, idx) => 
        `<span>${crumb}</span>${idx < file.breadcrumb.length - 1 ? '<i class="fas fa-chevron-right" style="font-size:8px;"></i>' : ''}`
    ).join('');
    
    let html = '';
    file.content.forEach(line => {
        html += `<div class="code-line">
            <div class="line-number">${line.num}</div>
            <div class="code-text">${line.code}</div>
        </div>`;
    });
    
    editor.innerHTML = html;
}

function updateTime() {
    const now = new Date();
    document.getElementById('statusTime').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}
setInterval(updateTime, 1000);
updateTime();

// Terminal functionality
const terminalInput = document.getElementById('terminalInput');
const terminalBody = document.getElementById('terminalBody');

terminalInput.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        const cmdLine = this.value.trim();
        if(cmdLine) {
            const line = document.createElement('div');
            line.innerHTML = `<span class="terminal-prompt">abhinay@portfolio:~$ </span>${cmdLine}`;
            terminalBody.insertBefore(line, terminalInput.parentElement);
            
            const response = document.createElement('div');
            response.style.color = 'var(--text-secondary)';
            response.style.whiteSpace = 'pre-wrap';
            
            const args = cmdLine.split(' ').filter(Boolean);
            const cmd = args[0].toLowerCase();
            
            if(cmd === 'help') {
                response.innerHTML = `Available commands:
ls — list files in current directory
pwd — print working directory
cd &lt;dir&gt; — change directory (cd .. to go up)
cat &lt;file&gt; — view / open a file in the editor
open &lt;file&gt; — same as cat
whoami — who am I?
echo &lt;text&gt; — print text
date — show current date & time
git log — show recent commits
python --version — show Python version
clear — clear the terminal`;
            } else if(cmd === 'clear') {
                terminalBody.innerHTML = '';
                terminalBody.appendChild(terminalInput.parentElement);
                this.value = '';
                return;
            } else if(cmd === 'whoami') {
                response.innerHTML = 'visitor';
            } else if(cmd === 'ls') {
                response.innerHTML = 'src  public  package.json  README.md';
            } else if(cmd === 'pwd') {
                response.innerHTML = '/home/abhinay/portfolio';
            } else if(cmd === 'cd') {
                if(args[1]) {
                    response.innerHTML = `cd: ${args[1]}: Permission denied or directory not found`;
                } else {
                    response.innerHTML = '';
                }
            } else if(cmd === 'cat' || cmd === 'open') {
                const file = args[1];
                if(file === 'README.md') {
                    openFile('readme');
                    response.innerHTML = 'Opening README.md...';
                } else if(file === 'package.json') {
                    openFile('skills');
                    response.innerHTML = 'Opening package.json...';
                } else if(file) {
                    response.innerHTML = `cat: ${file}: No such file or directory`;
                } else {
                    response.innerHTML = 'Usage: cat <file>';
                }
            } else if(cmd === 'echo') {
                response.innerHTML = args.slice(1).join(' ');
            } else if(cmd === 'date') {
                response.innerHTML = new Date().toString();
            } else if(cmdLine === 'git log') {
                response.innerHTML = `commit 7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b
Author: Abhinay Kalkhanday &lt;abhinay@matrix.edu&gt;
Date:   Today

    Initial commit: Awesome portfolio launched!`;
            } else if(cmdLine === 'python --version' || cmdLine === 'python3 --version') {
                response.innerHTML = 'Python 3.10.12';
            } else {
                response.innerHTML = `Command not found: ${cmd}`;
            }
            if (response.innerHTML !== '') {
                terminalBody.insertBefore(response, terminalInput.parentElement);
            }
        }
        this.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});

function toggleTerminal() {
    const terminal = document.getElementById('terminalPanel');
    terminal.classList.toggle('hidden');
}

function clearTerminal() {
    terminalBody.innerHTML = '';
    terminalBody.appendChild(terminalInput.parentElement);
}

// Copilot functionality
function toggleCopilot() {
    const panel = document.getElementById('copilotPanel');
    panel.classList.toggle('hidden');
}

function askCopilot(msg) {
    document.getElementById('copilotInput').value = msg;
    sendCopilotMessage();
}

function sendCopilotMessage() {
    const input = document.getElementById('copilotInput');
    const msg = input.value.trim();
    if(!msg) return;
    
    const messages = document.getElementById('copilotMessages');
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'copilot-msg user fade-in';
    userMsg.innerText = msg;
    messages.appendChild(userMsg);
    
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
    
    // Simulate thinking state
    const thinkingMsg = document.createElement('div');
    thinkingMsg.className = 'copilot-msg bot fade-in';
    thinkingMsg.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    messages.appendChild(thinkingMsg);
    messages.scrollTop = messages.scrollHeight;
    
    // Simulate AI response delay
    setTimeout(() => {
        messages.removeChild(thinkingMsg);
        
        const botMsg = document.createElement('div');
        botMsg.className = 'copilot-msg bot fade-in';
        
        const lowerMsg = msg.toLowerCase();
        let responseText = "";
        
        // Command parsing
        if(lowerMsg.includes('open ')) {
            const fileName = lowerMsg.split('open ')[1].trim();
            const validFiles = Object.keys(fileContents).map(k => fileContents[k].name.toLowerCase());
            const fileKey = Object.keys(fileContents).find(k => fileContents[k].name.toLowerCase().includes(fileName) || k.toLowerCase().includes(fileName));
            
            if(fileKey) {
                openFile(fileKey);
                responseText = `I've opened **${fileContents[fileKey].name}** for you in the editor.`;
            } else {
                responseText = `I couldn't find a file matching "${fileName}". Try opening home.tsx or README.md.`;
            }
        } 
        else if(lowerMsg.includes('light mode') || lowerMsg.includes('light theme')) {
            document.documentElement.style.setProperty('--bg-primary', '#ffffff');
            document.documentElement.style.setProperty('--bg-secondary', '#f3f3f3');
            document.documentElement.style.setProperty('--bg-tertiary', '#e8e8e8');
            document.documentElement.style.setProperty('--bg-sidebar', '#f3f3f3');
            document.documentElement.style.setProperty('--bg-tab-active', '#ffffff');
            document.documentElement.style.setProperty('--bg-tab-inactive', '#ececec');
            document.documentElement.style.setProperty('--text-primary', '#333333');
            document.documentElement.style.setProperty('--text-secondary', '#666666');
            document.documentElement.style.setProperty('--text-bright', '#000000');
            document.documentElement.style.setProperty('--bg-terminal', '#f8f8f8');
            responseText = "Switched to Light Theme! ☀️ (Though between you and me, real developers use Dark Theme...)";
        }
        else if(lowerMsg.includes('dark mode') || lowerMsg.includes('dark theme')) {
            document.documentElement.style.cssText = '';
            responseText = "Back to the one true Dark Theme! 🌙";
        }
        else if(lowerMsg.includes('show preview') || lowerMsg.includes('live preview')) {
            const previewPane = document.getElementById('previewPane');
            if (previewPane && previewPane.classList.contains('hidden')) {
                togglePreview();
                responseText = "I've opened the Live Preview panel for you! 👀";
            } else {
                responseText = "The Live Preview panel is already open! You can close it by clicking the 'X' on the panel.";
            }
        }
        else if(lowerMsg.includes('projects')) {
            responseText = "Abhinay has built some amazing projects! Notable ones include:\n\n• **Content Operations Platform**: Node.js & Playwright job orchestrator.\n• **Judicial Analytics**: FastAPI & Celery system analyzing Indian court data.\n• **Electra-Core**: OpenCV & OCR pipeline for voter roll extraction.\n\nCheck out `projects.js` for more details!";
        } else if(lowerMsg.includes('experience') || lowerMsg.includes('intern')) {
            responseText = "He is currently a **Software Engineering Intern at Matrix Education** in Jaipur. He's been doing some heavy lifting there:\n• Reduced page load times from 45s → 5.6s\n• Optimized 12 production websites\n• Handled 388k requests/month with Cloudflare caching.\n\nSee `experience.ts` for his full timeline.";
        } else if(lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('hire')) {
            responseText = "You can reach him via email at **abhinay2003kalkhanday@gmail.com**, or check out his LinkedIn and GitHub. The `contact.css` file has all the links you need!";
        } else if(lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('stack')) {
            responseText = "Abhinay's tech stack is quite impressive! He works with:\n\n**Backend**: FastAPI, Node.js, Express.js\n**Languages**: Python, Java, JavaScript, TypeScript\n**Databases**: PostgreSQL, Redis, MongoDB\n**DevOps/Auto**: Docker, GitHub Actions, Playwright, Celery\n\nYou can see the full list in `skills.json`.";
        } else if(lowerMsg.includes('education') || lowerMsg.includes('degree')) {
            responseText = "He is pursuing a B.Tech in Computer Science (IoT & Intelligent Systems) at Manipal University Jaipur, and is set to graduate in 2026!";
        } else if(lowerMsg.includes('hello') || lowerMsg.includes('hi ') || lowerMsg === 'hi') {
            responseText = "Hello! 👋 I'm Abhinay's AI Copilot. You can ask me about his projects, skills, or even ask me to 'open projects.js' or 'switch to light theme'!";
        } else {
            responseText = "That's a great question! Abhinay is a versatile developer specializing in performance engineering, distributed systems, and browser automation. Feel free to explore the files on the left to learn more about his background, or ask me something specific!";
        }
        
        // Format responseText (bolding and code blocks)
        responseText = responseText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        responseText = responseText.replace(/`(.*?)`/g, '<code style="background:var(--bg-input);padding:2px 4px;border-radius:3px;font-family:monospace;color:var(--orange);">$1</code>');
        responseText = responseText.replace(/\n/g, '<br>');
        
        botMsg.innerHTML = responseText;
        
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 800 + Math.random() * 800); // Random delay between 0.8s and 1.6s
}

// Initialize UI
renderContent();

// Resizer logic
const sidebarResizer = document.getElementById('sidebarResizer');
const sidebar = document.getElementById('sidebar');

let isResizingSidebar = false;

sidebarResizer.addEventListener('mousedown', (e) => {
    isResizingSidebar = true;
    sidebarResizer.classList.add('resizing');
    document.body.style.cursor = 'col-resize';
});

const terminalResizer = document.getElementById('terminalResizer');
const terminalPanel = document.getElementById('terminalPanel');

let isResizingTerminal = false;

terminalResizer.addEventListener('mousedown', (e) => {
    isResizingTerminal = true;
    terminalResizer.classList.add('resizing');
    document.body.style.cursor = 'row-resize';
});

document.addEventListener('mousemove', (e) => {
    if (isResizingSidebar) {
        const newWidth = e.clientX - sidebar.getBoundingClientRect().left;
        if (newWidth > 150 && newWidth < 500) {
            sidebar.style.width = newWidth + 'px';
        }
    }
    if (isResizingTerminal) {
        const containerHeight = document.querySelector('.editor-area').getBoundingClientRect().height;
        const newHeight = containerHeight - (e.clientY - document.querySelector('.editor-area').getBoundingClientRect().top);
        if (newHeight > 100 && newHeight < containerHeight - 100) {
            terminalPanel.style.height = newHeight + 'px';
        }
    }
});

document.addEventListener('mouseup', () => {
    if (isResizingSidebar) {
        isResizingSidebar = false;
        sidebarResizer.classList.remove('resizing');
        document.body.style.cursor = 'default';
    }
    if (isResizingTerminal) {
        isResizingTerminal = false;
        terminalResizer.classList.remove('resizing');
        document.body.style.cursor = 'default';
    }
});

// Activity Bar functionality
const originalFileTreeHTML = document.querySelector('.file-tree').innerHTML;

function switchActivity(element, activityName) {
    const isActive = element.classList.contains('active');
    
    // Remove active from all
    document.querySelectorAll('.activity-icon').forEach(icon => icon.classList.remove('active'));
    
    if (isActive) {
        // Toggle sidebar visibility off
        sidebar.classList.add('hidden');
        sidebarResizer.classList.add('hidden');
    } else {
        // Toggle sidebar visibility on and set active
        sidebar.classList.remove('hidden');
        sidebarResizer.classList.remove('hidden');
        element.classList.add('active');
        
        // Change sidebar header
        const sidebarHeader = document.querySelector('.sidebar-header span');
        sidebarHeader.innerText = activityName.toUpperCase();
        
        // Change content based on activity
        const fileTree = document.querySelector('.file-tree');
        if (activityName === 'Explorer') {
            fileTree.innerHTML = originalFileTreeHTML;
            updateSidebarUI(); // Re-apply active state to current file
        } else if (activityName === 'Search') {
            fileTree.innerHTML = `
                <div style="padding: 16px;">
                    <input type="text" placeholder="Search" style="width: 100%; padding: 4px 8px; background: var(--bg-input); border: 1px solid var(--border-color); color: var(--text-primary); border-radius: 2px; margin-bottom: 8px;">
                    <input type="text" placeholder="Replace" style="width: 100%; padding: 4px 8px; background: var(--bg-input); border: 1px solid var(--border-color); color: var(--text-primary); border-radius: 2px;">
                    <div style="margin-top: 16px; font-size: 11px; color: var(--text-secondary);">No results found.</div>
                </div>
            `;
        } else if (activityName === 'Source Control') {
            fileTree.innerHTML = `
                <div style="padding: 16px;">
                    <div style="font-size: 11px; margin-bottom: 8px; color: var(--text-secondary);">CHANGES (0)</div>
                    <div style="font-size: 12px; display: flex; align-items: center; gap: 8px; color: var(--text-primary);">
                        <i class="fas fa-check" style="color: var(--lightgreen);"></i> Working tree clean
                    </div>
                    <button style="margin-top: 16px; width: 100%; padding: 6px; background: var(--accent); color: white; border: none; border-radius: 2px; cursor: pointer;">Commit</button>
                </div>
            `;
        } else if (activityName === 'Run & Debug') {
            fileTree.innerHTML = `
                <div style="padding: 16px;">
                    <button style="width: 100%; padding: 6px; background: var(--accent); color: white; border: none; border-radius: 2px; cursor: pointer; margin-bottom: 16px;">Run and Debug</button>
                    <div style="font-size: 11px; color: var(--text-secondary);">To customize Run and Debug, open a folder and create a launch.json file.</div>
                </div>
            `;
        } else if (activityName === 'Extensions') {
            fileTree.innerHTML = `
                <div style="padding: 16px;">
                    <input type="text" placeholder="Search Extensions in Marketplace" style="width: 100%; padding: 4px 8px; background: var(--bg-input); border: 1px solid var(--border-color); color: var(--text-primary); border-radius: 2px; margin-bottom: 16px;">
                    <div style="font-size: 11px; margin-bottom: 8px; color: var(--text-secondary);">INSTALLED (3)</div>
                    <div style="display: flex; gap: 8px; margin-bottom: 12px; align-items: center;">
                        <i class="fab fa-python" style="font-size: 24px; color: var(--blue);"></i>
                        <div><div style="font-size:12px; color: var(--text-primary);">Python</div><div style="font-size:10px; color: var(--text-secondary);">IntelliSense (Pylance)</div></div>
                    </div>
                    <div style="display: flex; gap: 8px; margin-bottom: 12px; align-items: center;">
                        <i class="fab fa-react" style="font-size: 24px; color: #61dafb;"></i>
                        <div><div style="font-size:12px; color: var(--text-primary);">ES7+ React/Redux</div><div style="font-size:10px; color: var(--text-secondary);">React snippets</div></div>
                    </div>
                </div>
            `;
        }
    }
}

// Live Preview functionality
function togglePreview() {
    const previewPane = document.getElementById('previewPane');
    const previewResizer = document.getElementById('previewResizer');
    const editorArea = document.querySelector('.editor-area');
    
    // Ensure editorArea is flex row
    editorArea.style.display = 'flex';
    editorArea.style.flexDirection = 'row';
    
    if (previewPane.classList.contains('hidden')) {
        previewPane.classList.remove('hidden');
        previewResizer.classList.remove('hidden');
        // Also open in a new tab as requested
        window.open('preview.html', '_blank');
    } else {
        previewPane.classList.add('hidden');
        previewResizer.classList.add('hidden');
    }
}

// Preview Resizer Logic
const previewResizerEl = document.getElementById('previewResizer');
const editorLeft = document.getElementById('editorLeft');
let isResizingPreview = false;

previewResizerEl.addEventListener('mousedown', (e) => {
    isResizingPreview = true;
    previewResizerEl.classList.add('resizing');
    document.body.style.cursor = 'col-resize';
});

document.addEventListener('mousemove', (e) => {
    if (isResizingPreview) {
        const containerWidth = document.querySelector('.editor-area').getBoundingClientRect().width;
        const newWidth = e.clientX - document.querySelector('.editor-area').getBoundingClientRect().left;
        
        if (newWidth > 300 && newWidth < containerWidth - 300) {
            editorLeft.style.flex = 'none';
            editorLeft.style.width = newWidth + 'px';
            document.getElementById('previewPane').style.flex = '1';
            document.getElementById('previewPane').style.width = 'auto';
        }
    }
});

document.addEventListener('mouseup', () => {
    if (isResizingPreview) {
        isResizingPreview = false;
        previewResizerEl.classList.remove('resizing');
        document.body.style.cursor = 'default';
    }
});

// Double click to open preview
document.querySelector('.sidebar').addEventListener('dblclick', (e) => {
    if(e.target.closest('.tree-item')) {
        const previewPane = document.getElementById('previewPane');
        if (previewPane && previewPane.classList.contains('hidden')) {
            togglePreview();
        }
    }
});
document.querySelector('.tabs-container').addEventListener('dblclick', (e) => {
    const previewPane = document.getElementById('previewPane');
    if (previewPane && previewPane.classList.contains('hidden')) {
        togglePreview();
    }
});
