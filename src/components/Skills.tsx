import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Shield, Server, Code, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export default function Skills() {
  const { skillsCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const icons = [Shield, Server, Code, Sparkles];

  const filteredCategories =
    selectedCategory === 'all'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              02. Technical & Practical Toolkit
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Grounded in security fundamentals, systems engineering & community advocacy.
            </h2>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill button group) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              All Domains
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = icons[catIdx % icons.length];
            return (
              <div
                key={cat.category}
                className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 hover:border-slate-700 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cat.category}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Individual Skills list */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 hover:border-slate-700/80 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-slate-100 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-xs font-mono font-medium text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                          {skill.level}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Associated Tools (Unboxed clean text with bullet separators) */}
                      {skill.tools && skill.tools.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-slate-400">
                          <span className="text-slate-500">Key Tools:</span>
                          {skill.tools.map((t, tidx) => (
                            <span key={tidx} className="flex items-center gap-1.5 text-blue-300 font-mono">
                              <span>{t}</span>
                              {tidx < skill.tools!.length - 1 && <span className="text-slate-600">·</span>}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical Security Lab Methodology Footer Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Ethical & Responsible Security Practice</h4>
              <p className="text-xs text-slate-400">
                All scans and simulations strictly adhere to authorized sandboxes, safe lab environments, and legal defense guidelines.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap shrink-0"
          >
            Review Project Evidence →
          </a>
        </div>
      </div>
    </section>
  );
}
