import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 border-t border-slate-800/80 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            05. Academic & Specialist Training
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Academic foundations, Pan-African leadership programs & computing rigor.
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                {/* Header Strip */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-800/80 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-medium text-blue-400 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-blue-400" />
                      <span>{item.status}</span>
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">
                      {item.institution}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.location}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Program Focus & Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {item.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">▸</span>
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Coursework list */}
              {item.coursework && item.coursework.length > 0 && (
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    <span>Key Coursework & Competencies</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-950 border border-slate-800/80"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
