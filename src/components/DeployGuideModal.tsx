import { useState } from 'react';
import { X, Copy, Check, Github, ExternalLink, Terminal, Sparkles, BookOpen, Rocket } from 'lucide-react';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeployGuideModal({ isOpen, onClose }: DeployGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'actions' | 'ghpages'>('actions');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const workflowYaml = `name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

  const ghPagesCommands = `# 1. Install gh-pages helper
npm install --save-dev gh-pages

# 2. Add scripts to package.json:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# 3. Deploy to gh-pages branch
npm run deploy`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">GitHub Pages Deployment Blueprint</h3>
              <p className="text-[11px] text-slate-400">Step-by-step guide to hosting your portfolio on GitHub Pages</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close deploy guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Method Selector */}
          <div className="flex items-center gap-2 p-1 bg-slate-950 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('actions')}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'actions'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Recommended: GitHub Actions (Automated)</span>
            </button>
            <button
              onClick={() => setActiveTab('ghpages')}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'ghpages'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Alternative: gh-pages CLI</span>
            </button>
          </div>

          {activeTab === 'actions' ? (
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-xs">1</span>
                  <span>Set Vite Base in `vite.config.ts`</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  If hosting at <code className="text-blue-300 bg-slate-950 px-1.5 py-0.5 rounded">https://&lt;username&gt;.github.io/&lt;repo-name&gt;/</code>, set <code className="text-blue-300 bg-slate-950 px-1.5 py-0.5 rounded">base: './'</code> or <code className="text-blue-300 bg-slate-950 px-1.5 py-0.5 rounded">base: '/&lt;repo-name&gt;/'</code>.
                </p>
                <div className="relative p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                  <code>export default defineConfig&#40;&#123; base: './', plugins: [react()] &#125;&#41;;</code>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-xs">2</span>
                    <span>Create `.github/workflows/deploy.yml`</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(workflowYaml, 'yaml')}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md"
                  >
                    {copiedKey === 'yaml' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'yaml' ? 'Copied' : 'Copy Workflow'}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-300">
                  Commit this workflow to your repository. GitHub will automatically build and publish whenever you push to <code className="text-blue-300 bg-slate-950 px-1.5 py-0.5 rounded">main</code>.
                </p>
                <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto max-h-48 leading-relaxed">
                  {workflowYaml}
                </pre>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-xs">3</span>
                  <span>Enable GitHub Pages in Repo Settings</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                  <p>1. Open your repository on GitHub.</p>
                  <p>2. Go to <strong>Settings</strong> → <strong>Pages</strong> (in the left sidebar).</p>
                  <p>3. Under <strong>Build and deployment → Source</strong>, select <strong>GitHub Actions</strong>.</p>
                  <p>4. Your site will automatically go live within 60 seconds of pushing your commit!</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                    <span>Quick CLI Deployment via gh-pages package</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(ghPagesCommands, 'cli')}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md"
                  >
                    {copiedKey === 'cli' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'cli' ? 'Copied' : 'Copy Commands'}</span>
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  {ghPagesCommands}
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/30 text-xs text-slate-300 space-y-1">
                <strong className="text-white">GitHub Repo Settings for gh-pages:</strong>
                <p className="text-slate-400">
                  Under <strong>Settings → Pages → Source</strong>, choose <strong>Deploy from a branch</strong> and select the <code className="text-blue-300 font-mono">gh-pages</code> branch / root folder.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-500">Whitney Adzah Portfolio Deployment Reference</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
