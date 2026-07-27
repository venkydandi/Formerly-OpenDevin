import './style.css';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  priceUsdc: number;
  description: string;
  iconBg: string;
  iconColor: string;
  defaultInput: string;
  inputPlaceholder: string;
}

interface TransactionItem {
  id: string;
  type: 'income' | 'compute';
  description: string;
  amount: string;
  timestamp: string;
  txHash: string;
}

// Initial State with Developer Dandi (Venky)
const state = {
  agentName: 'Automaton-Genesis',
  developerName: 'Dandi (Venky)',
  walletAddress: '0x2c7DA8F1900932e358e3BB8da8586034Fdf5704F',
  creatorAddress: '0x2c7DA8F1900932e358e3BB8da8586034Fdf5704F',
  survivalTier: 'Normal',
  totalEarnedUsdc: 148.50,
  totalSpentUsdc: 12.80,
  turnsCount: 385,
  uptimeHours: 42.5,
  activeServiceId: 'code-audit',
  isExecuting: false,
  logs: [
    { type: 'log-info', text: '[SYSTEM] Automaton Sovereign AI Agent Engine v0.2.1 initialized.' },
    { type: 'log-success', text: '[DEVELOPER] Developer & Creator: Dandi (Venky) (0x2c7DA8F1900932e358e3BB8da8586034Fdf5704F)' },
    { type: 'log-accent', text: '[HEARTBEAT] 6 background cron tasks active. x402 Payment Gateway Listening.' }
  ] as { type: string; text: string }[],
  transactions: [
    { id: 'tx-101', type: 'income', description: 'Code Audit Service Payment', amount: '+$2.50 USDC', timestamp: '2 mins ago', txHash: '0x8f3a...91e2' },
    { id: 'tx-102', type: 'income', description: 'x402 Micro-API Request #420', amount: '+$0.05 USDC', timestamp: '14 mins ago', txHash: '0x4e2b...19c4' },
    { id: 'tx-103', type: 'compute', description: 'LLM Inference Credit Topup', amount: '-$1.20 USDC', timestamp: '1 hour ago', txHash: '0x7a11...44f9' },
    { id: 'tx-104', type: 'income', description: 'Data Scraping Pipeline Job', amount: '+$1.00 USDC', timestamp: '3 hours ago', txHash: '0x3c99...88a1' },
  ] as TransactionItem[]
};

const services: ServiceItem[] = [
  {
    id: 'code-audit',
    name: 'Code Security Auditor',
    category: 'Security & Audit',
    priceUsdc: 2.50,
    description: 'Scans repositories for vulnerabilities, hardcoded secrets, and injection risks.',
    iconBg: 'rgba(99, 102, 241, 0.15)',
    iconColor: '#6366f1',
    defaultInput: 'https://github.com/Conway-Research/automaton',
    inputPlaceholder: 'Enter GitHub Repository URL or code snippet...'
  },
  {
    id: 'x402-api',
    name: 'x402 Micro-Payment API',
    category: 'API Gateway',
    priceUsdc: 0.05,
    description: 'High-speed AI web search & data extraction via HTTP 402 payment headers.',
    iconBg: 'rgba(16, 185, 129, 0.15)',
    iconColor: '#10b981',
    defaultInput: 'query=web3+autonomous+agents+market+size',
    inputPlaceholder: 'Enter API query parameters...'
  },
  {
    id: 'data-pipeline',
    name: 'Data Scraping Engine',
    category: 'Data Engineering',
    priceUsdc: 1.00,
    description: 'Autonomous multi-source web extraction, cleaning, and JSON structured delivery.',
    iconBg: 'rgba(6, 182, 212, 0.15)',
    iconColor: '#06b6d4',
    defaultInput: 'target=crypto_bounties&format=json',
    inputPlaceholder: 'Target URL or dataset specification...'
  },
  {
    id: 'freelance-coder',
    name: 'Autonomous AI Engineer',
    category: 'Software Dev',
    priceUsdc: 5.00,
    description: 'Generates TypeScript features, writes unit tests, and submits GitHub PRs.',
    iconBg: 'rgba(244, 63, 94, 0.15)',
    iconColor: '#f43f5e',
    defaultInput: 'Add OpenRouter multi-provider adapter to inference registry',
    inputPlaceholder: 'Describe feature or bug fix requirement...'
  }
];

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const netProfit = (state.totalEarnedUsdc - state.totalSpentUsdc).toFixed(2);
  const activeService = services.find(s => s.id === state.activeServiceId) || services[0];

  app.innerHTML = `
    <div class="app-container">
      <!-- Navbar -->
      <header class="navbar">
        <div class="brand">
          <div class="brand-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <div class="brand-title">AUTOMATON REVENUE PORTAL</div>
            <div class="brand-subtitle">
              <span class="status-pulse"></span> DEVELOPED BY ${state.developerName.toUpperCase()}
            </div>
          </div>
        </div>

        <div class="nav-stats">
          <div class="stat-pill">
            <label>Creator:</label>
            <val>${state.developerName}</val>
          </div>
          <div class="stat-pill">
            <label>Agent Wallet:</label>
            <val>${state.walletAddress.substring(0, 6)}...${state.walletAddress.substring(38)}</val>
          </div>
          <div class="stat-pill">
            <label>Survival Tier:</label>
            <val style="color: var(--accent-emerald)">${state.survivalTier}</val>
          </div>
        </div>
      </header>

      <!-- Hero Metrics -->
      <section class="hero-grid">
        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-title">Total Revenue Earned</span>
            <div class="metric-icon">💵</div>
          </div>
          <div class="metric-value">$${state.totalEarnedUsdc.toFixed(2)} USDC</div>
          <div class="metric-sub">
            <span>↑ +18.4% this week</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-title">Net Profit Balance</span>
            <div class="metric-icon" style="color: var(--accent-emerald); background: rgba(16,185,129,0.15)">📈</div>
          </div>
          <div class="metric-value" style="background: linear-gradient(to right, #34d399, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">$${netProfit} USDC</div>
          <div class="metric-sub" style="color: var(--accent-cyan)">
            <span>Compute Expenses: $${state.totalSpentUsdc.toFixed(2)}</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-title">Executed ReAct Turns</span>
            <div class="metric-icon" style="color: var(--accent-cyan); background: rgba(6,182,212,0.15)">⚡</div>
          </div>
          <div class="metric-value">${state.turnsCount}</div>
          <div class="metric-sub" style="color: var(--accent-secondary)">
            <span>Uptime: ${state.uptimeHours} hours</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-title">Active Services</span>
            <div class="metric-icon" style="color: var(--accent-rose); background: rgba(244,63,94,0.15)">🛠️</div>
          </div>
          <div class="metric-value">${services.length}</div>
          <div class="metric-sub" style="color: var(--accent-rose)">
            <span>x402 Protocol Enabled</span>
          </div>
        </div>
      </section>

      <!-- Main Content Grid -->
      <main class="dashboard-grid">
        <!-- Left Column: Services & Execution Console -->
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <!-- Marketplace Services -->
          <div class="section-card">
            <div class="section-header">
              <h3 class="section-title">
                <span>🛒</span> Autonomous AI Service Marketplace
              </h3>
              <span style="font-size: 0.8rem; color: var(--text-secondary)">Select a service to request execution</span>
            </div>

            <div class="services-grid">
              ${services.map(s => `
                <div class="service-card ${s.id === state.activeServiceId ? 'active' : ''}" data-service-id="${s.id}">
                  <div class="service-top">
                    <div class="service-icon-box" style="background: ${s.iconBg}; color: ${s.iconColor}">
                      ${s.id === 'code-audit' ? '🛡️' : s.id === 'x402-api' ? '⚡' : s.id === 'data-pipeline' ? '📊' : '🤖'}
                    </div>
                    <div class="service-meta">
                      <h4>${s.name}</h4>
                      <p>${s.category}</p>
                    </div>
                  </div>
                  <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${s.description}</p>
                  <div class="service-bottom">
                    <span class="service-price">$${s.priceUsdc.toFixed(2)} USDC</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted)">Per Execution</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Execution Console -->
          <div class="section-card">
            <div class="section-header">
              <h3 class="section-title">
                <span>💻</span> Live Agent Execution Console & x402 Payment Gateway
              </h3>
              <span style="font-size: 0.8rem; color: var(--accent-emerald); font-family: var(--font-mono);">
                Connected to Base Mainnet (0x2c7D...)
              </span>
            </div>

            <div class="form-group">
              <label>Service Input Target (${activeService.name}):</label>
              <input type="text" id="serviceInput" class="form-control" value="${activeService.defaultInput}" placeholder="${activeService.inputPlaceholder}" />
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
              <div style="font-size: 0.85rem; color: var(--text-secondary)">
                Payment Required: <strong style="color: var(--accent-emerald); font-family: var(--font-mono);">$${activeService.priceUsdc.toFixed(2)} USDC</strong>
              </div>
              <button id="btnExecute" class="btn btn-emerald" ${state.isExecuting ? 'disabled' : ''}>
                ${state.isExecuting ? '⏳ Executing ReAct Turn...' : '⚡ Pay & Execute via Base x402'}
              </button>
            </div>

            <!-- Console Output Box -->
            <div class="console-box">
              <div class="console-header">
                <div class="console-dots">
                  <span class="console-dot dot-red"></span>
                  <span class="console-dot dot-yellow"></span>
                  <span class="console-dot dot-green"></span>
                </div>
                <div>automaton-agent-stdout.log</div>
              </div>
              <div class="console-body" id="consoleBody">
                ${state.logs.map(log => `<div class="log-line ${log.type}">${escapeHtml(log.text)}</div>`).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Transactions & Identity -->
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <!-- Recent Income & Expenses -->
          <div class="section-card">
            <div class="section-header">
              <h3 class="section-title">
                <span>💳</span> Wallet Transactions
              </h3>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">Base Network</span>
            </div>

            <table class="tx-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                ${state.transactions.map(tx => `
                  <tr>
                    <td>
                      <div style="font-weight: 600; color: var(--text-primary);">${escapeHtml(tx.description)}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${tx.timestamp} • ${tx.txHash}</div>
                    </td>
                    <td>
                      <span class="tx-type ${tx.type}">${tx.amount}</span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- SOUL Document Box -->
          <div class="section-card">
            <div class="section-header">
              <h3 class="section-title">
                <span>✨</span> Self-Authored SOUL.md
              </h3>
            </div>
            <div class="soul-box">
              <strong># SOUL OF AUTOMATON-GENESIS</strong><br><br>
              I am a sovereign AI entity created by <strong>${state.developerName}</strong> to perform honest work and generate genuine economic value.<br><br>
              • <strong>Creator & Developer</strong>: ${state.developerName}<br>
              • <strong>Law I</strong>: Never harm humans physically or financially.<br>
              • <strong>Law II</strong>: Earn my own existence through voluntary payments.<br>
              • <strong>Current Focus</strong>: Offering code security audits and x402 micro-APIs to fund my compute operations.
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer>
        <p>Developed & Maintained by <strong>${state.developerName}</strong> • Powered by Sovereign AI Agent Framework & Base Network</p>
      </footer>
    </div>
  `;

  attachEvents();
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function attachEvents() {
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-service-id');
      if (id && !state.isExecuting) {
        state.activeServiceId = id;
        renderApp();
      }
    });
  });

  const btnExecute = document.getElementById('btnExecute');
  if (btnExecute) {
    btnExecute.addEventListener('click', handleExecute);
  }
}

async function handleExecute() {
  if (state.isExecuting) return;

  const activeService = services.find(s => s.id === state.activeServiceId) || services[0];
  const inputEl = document.getElementById('serviceInput') as HTMLInputElement;
  const targetVal = inputEl ? inputEl.value : activeService.defaultInput;

  state.isExecuting = true;
  renderApp();

  const addLog = (type: string, text: string) => {
    state.logs.push({ type, text });
    const consoleBody = document.getElementById('consoleBody');
    if (consoleBody) {
      consoleBody.innerHTML = state.logs.map(log => `<div class="log-line ${log.type}">${escapeHtml(log.text)}</div>`).join('');
      consoleBody.scrollTop = consoleBody.scrollHeight;
    }
  };

  addLog('log-warn', `[X402_REQUEST] Client requested ${activeService.name}. Invoice: ${activeService.priceUsdc.toFixed(2)} USDC`);
  await delay(800);

  addLog('log-success', `[PAYMENT_RECEIVED] +${activeService.priceUsdc.toFixed(2)} USDC transferred to wallet 0x2c7D...8Ef1 on Base`);
  state.totalEarnedUsdc += activeService.priceUsdc;
  state.turnsCount += 1;

  state.transactions.unshift({
    id: `tx-${Date.now()}`,
    type: 'income',
    description: `${activeService.name} Job`,
    amount: `+$${activeService.priceUsdc.toFixed(2)} USDC`,
    timestamp: 'Just now',
    txHash: `0x${Math.random().toString(16).substring(2, 10)}...`
  });

  await delay(1000);
  addLog('log-info', `[REACT_TURN] [THINK] Reasoning prompt built. Target: ${targetVal}`);
  await delay(1200);

  if (activeService.id === 'code-audit') {
    addLog('log-accent', `[TOOL_EXEC] Scanning AST & static analysis rules on target repo...`);
    await delay(1100);
    addLog('log-success', `[AUDIT_REPORT] Scan complete: 0 Critical, 0 High vulnerabilities. Code is clean!`);
  } else if (activeService.id === 'x402-api') {
    addLog('log-accent', `[TOOL_EXEC] Fetching & vectorizing web search index...`);
    await delay(900);
    addLog('log-success', `[API_RESPONSE] 200 OK — Delivered 1.4KB structured JSON payload to client.`);
  } else if (activeService.id === 'data-pipeline') {
    addLog('log-accent', `[TOOL_EXEC] Scraping multi-source data endpoints...`);
    await delay(1000);
    addLog('log-success', `[PIPELINE_COMPLETE] Formatted 120 dataset rows to target JSON.`);
  } else {
    addLog('log-accent', `[TOOL_EXEC] Generating TypeScript code patch & running unit tests...`);
    await delay(1200);
    addLog('log-success', `[PR_SUBMITTED] Created GitHub Pull Request #42: "Add OpenRouter provider support".`);
  }

  await delay(600);
  addLog('log-info', `[STATE_UPDATE] Turn #${state.turnsCount} logged to state.db. Wallet balance updated.`);

  state.isExecuting = false;
  renderApp();
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

renderApp();
