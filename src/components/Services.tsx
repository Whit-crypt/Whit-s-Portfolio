import { Shield, Sparkles, Headphones, ArrowRight, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Services() {
  const { services, profile } = PORTFOLIO_DATA;

  const iconMap: Record<string, any> = {
    ShieldAlert: Shield,
    Sparkles: Sparkles,
    Headphones: Headphones
  };

  return (
    <section id="services" className="py-20 border-t border-slate-800/80 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            07. Collaborative Offerings & Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Security advisory, AI educational training & community IT support.
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Available for technical consultations, speaking engagements, and school STEM workshops across Ghana.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Shield;
            const waText = encodeURIComponent(`Hi Whitney, I would like to inquire about your service: "${service.title}".`);

            return (
              <div
                key={service.id}
                className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-teal-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={`https://wa.me/233593782822?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                  <a
                    href="#contact"
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Details →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
