import { Shield, Brain, Users, Compass, Award, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const { profile } = PORTFOLIO_DATA;

  const highlights = [
    {
      icon: Shield,
      title: "Cybersecurity & Defense Focus",
      description: "Trained in vulnerability enumeration, packet flow analysis with Wireshark, Nmap port scanning, and security baseline compliance."
    },
    {
      icon: Brain,
      title: "AI Literacy & Community Outreach",
      description: "Delivered interactive AI fundamentals workshops to 80+ Junior High School students with WITE at GIMPA, demystifying algorithmic safety."
    },
    {
      icon: Users,
      title: "Proven Volunteer Leadership",
      description: "Managed logistics, records, and emergency preparedness for 50+ members over 3 years as Secretary of the Ghana Red Cross Club."
    },
    {
      icon: Compass,
      title: "Pan-African & Global Credentialing",
      description: "Completed rigorous cohorts with ALX Africa in Cyber Security & Professional Foundations, and Geek Byte Network CCS certification."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            01. Background & Perspective
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Dedicated to protecting digital ecosystems and broadening technology access.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert text-slate-300 space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                My path into technology stems from a simple conviction: as our world digitizes at breakneck speed, <strong className="text-white font-semibold">security and understanding cannot remain luxuries for a few</strong>. Based in Greater Accra, Ghana, I combine academic Computer Science studies with hands-on technical defense training.
              </p>
              <p>
                During my cybersecurity internship at <strong className="text-slate-100 font-medium">Erudite African Network</strong>, I worked directly with vulnerability scanning pipelines, audited network protocol traffic, and explored proactive threat detection methodologies. Rather than remaining in theory, I prioritize turning technical findings into concrete hardening checklists.
              </p>
              <p>
                Beyond security consoles, my heart lies in tech democratization. Through the <strong className="text-slate-100 font-medium">Women in Information Technology and Engineering (WITE)</strong> outreach at GIMPA, I co-led interactive AI sessions for over 80 Junior High School pupils, guiding them through the promise of AI while teaching critical habits for cyber hygiene and online safety.
              </p>
            </div>

            {/* Career Goals & Aspirations */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                <Terminal className="w-4 h-4" />
                <span>Current Career Focus & Objective</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {profile.careerGoal}
              </p>
            </div>

            {/* Personal Strengths List */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider text-slate-400">
                Core Competencies & Personal Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pillars of Practice */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center justify-between">
                <span>Pillars of Practice</span>
                <span className="text-xs font-mono text-slate-400">4 FOCUS AREAS</span>
              </h3>

              <div className="space-y-5">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-blue-400 shrink-0 group-hover:border-blue-500/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Education snippet */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  <span>ALX Cyber Security Graduate</span>
                </span>
                <span className="text-slate-500">·</span>
                <span>Accra & Ho, Ghana</span>
              </div>
            </div>

            {/* Quote or Credo */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-900/30">
              <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "True cybersecurity is not just barricading servers—it's educating communities so everyday users can navigate digital life with confidence, safety, and awareness."
              </blockquote>
              <p className="mt-2 text-xs font-semibold text-blue-400">— Whitney Adzah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
