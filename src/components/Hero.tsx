import { MapPin, ArrowRight, Download, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const { profile, stats } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle structural ambient mesh (disciplined, non-AI-slop) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-teal-950/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Typographic Pitch */}
          <div className="lg:col-span-7 space-y-6">
            {/* Verification Status Banner (unboxed clean text) */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-200">Open to Entry-Level Cybersecurity & SOC Analyst Roles</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Accra, Ghana</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] [text-wrap:balance]">
                Whitney-Nelly <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300">
                  Makafui Adzah
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                Cybersecurity Analyst <span className="text-slate-600">·</span> Computer Science & Engineering Student <span className="text-slate-600">·</span> AI Education Advocate
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
              I build secure digital systems, perform network vulnerability assessments, and champion hands-on AI safety education for Ghana's next generation of builders. Grounded in technical rigor, proactive defense, and community leadership.
            </p>

            {/* Location marker */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Greater Accra, Ghana <span className="text-slate-600">·</span> Computer Science Student</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-950/40 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/40 border border-slate-800 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Proof Badges - Clean metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 border-t border-slate-800/60">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>ALX Cyber Security Graduate</span>
              </span>
              <span className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Geek Byte CCS Certified</span>
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300">Google AI Essentials</span>
            </div>
          </div>

          {/* Right Column: Authentic Visual Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer structural frame */}
              <div className="relative bg-slate-900/80 p-3 sm:p-4 rounded-3xl border border-slate-800 shadow-2xl shadow-black/60">
                {/* Photo container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 border border-slate-700/60">
                  <img
                    src={profile.avatar}
                    alt="Whitney-Nelly Makafui Adzah - Cybersecurity Analyst & Computer Science Student"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if third-party image is blocked
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', 'p-8', 'text-center');
                        const fallback = document.createElement('div');
                        fallback.className = 'space-y-3';
                        fallback.innerHTML = `
                          <div class="w-16 h-16 mx-auto rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-2xl">WA</div>
                          <h3 class="text-lg font-bold text-white">${profile.name}</h3>
                          <p class="text-xs text-slate-400">${profile.title}</p>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />

                  {/* Gradient bottom overlay for credentials legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Overlayed card inside portrait footer */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/80">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white tracking-wide">WHITNEY ADZAH</p>
                        <p className="text-[11px] text-slate-300">Vulnerability Assessment & Defense</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-800/60">
                          Active · 2026
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating highlight note */}
                <div className="mt-3.5 px-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Cybersecurity Intern @ Erudite Africa</span>
                  <span>Accra, Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Quantified Credibility */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
