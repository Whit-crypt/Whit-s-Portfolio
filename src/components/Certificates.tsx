import { useState } from 'react';
import { PORTFOLIO_DATA, Certificate } from '../data/portfolioData';
import { Eye, Calendar, CheckCircle2, Shield } from 'lucide-react';
import CertificateModal from './CertificateModal';
import { CertificateBrandLogo } from './BrandLogos';

export default function Certificates() {
  const { certificates } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const brandAccentMap: Record<string, { ring: string; text: string; bg: string }> = {
    alx: { ring: 'group-hover:border-sky-500/60', text: 'text-sky-400', bg: 'bg-sky-950/20' },
    geekbyte: { ring: 'group-hover:border-blue-500/60', text: 'text-blue-400', bg: 'bg-blue-950/20' },
    erudite: { ring: 'group-hover:border-teal-500/60', text: 'text-teal-400', bg: 'bg-teal-950/20' },
    google: { ring: 'group-hover:border-amber-500/60', text: 'text-amber-400', bg: 'bg-amber-950/20' },
  };

  return (
    <section id="certificates" className="py-20 border-t border-slate-800/80 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            06. Verified Credentials & Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Accredited cybersecurity, ethical defense & professional leadership certificates.
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Click on any credential to inspect the verified curriculum, competencies validated, and official credentials from Erudite Africa, ALX, Geek Byte, and Google.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert) => {
            const accents = brandAccentMap[cert.brand] || brandAccentMap.alx;

            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className={`group bg-slate-900/70 rounded-2xl border border-slate-800 ${accents.ring} transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden`}
              >
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-colors" />

                <div className="space-y-4 relative z-10">
                  {/* Top bar with Official Brand Logo & Date */}
                  <div className="flex items-start justify-between gap-3">
                    <CertificateBrandLogo brand={cert.brand} size="md" />

                    <div className="text-right">
                      <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                        <Calendar className="w-3 h-3 text-blue-400" />
                        <span>{cert.date}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <span className={`text-xs font-mono font-semibold uppercase tracking-wider block mb-1.5 ${accents.text}`}>
                      {cert.issuer}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Brief description */}
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-slate-950 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] font-mono text-slate-500 self-center">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Credential</span>
                  </span>
                  {cert.verificationUrl ? (
                    <span className="text-teal-400 text-[11px] flex items-center gap-1 font-mono">
                      <CheckCircle2 className="w-3 h-3 text-teal-400" />
                      <span>Verified Online</span>
                    </span>
                  ) : (
                    <span className="text-slate-500 text-[11px] flex items-center gap-1 font-mono">
                      <Shield className="w-3 h-3 text-slate-400" />
                      <span>Institutional</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Inspection Modal */}
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </section>
  );
}
