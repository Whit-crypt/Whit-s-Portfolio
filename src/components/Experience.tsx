import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            04. Professional Trajectory
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Hands-on cybersecurity operations, youth STEM training & volunteer coordination.
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:scale-125 transition-transform" />

              <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-5 hover:border-slate-700 transition-colors">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wide">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
                      <span className="font-semibold flex items-center gap-1.5 text-slate-200">
                        <Building2 className="w-3.5 h-3.5 text-blue-400" />
                        {item.organization}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Core Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Responsibilities & Daily Contributions
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                {item.achievements.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <h4 className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                      Notable Accomplishments
                    </h4>
                    <div className="space-y-1.5">
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags Strip */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-950 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
