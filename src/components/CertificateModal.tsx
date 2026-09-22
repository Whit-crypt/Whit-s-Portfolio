import { X, ExternalLink, CheckCircle2, Award } from 'lucide-react';
import { Certificate } from '../data/portfolioData';
import { CertificateBrandLogo } from './BrandLogos';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono font-medium text-slate-300">
              Verified Credential Viewer
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Visual Certificate Representation */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-[#0B1222] to-slate-950 border-2 border-slate-700/80 shadow-inner space-y-6">
            {/* Certificate Top Header */}
            <div className="flex items-start justify-between border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block">
                  {certificate.issuer}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                  {certificate.title}
                </h3>
              </div>
              <CertificateBrandLogo brand={certificate.brand} size="md" />
            </div>

            {/* Recipient */}
            <div className="text-center py-2 space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">
                Proudly Presented To
              </span>
              <p className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight text-blue-200">
                Whitney-Nelly Makafui Adzah
              </p>
              <p className="text-xs text-slate-400 pt-1">
                For demonstrating outstanding discipline, technical competence, and verified mastery.
              </p>
            </div>

            {/* Credential Details */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
              <p className="text-slate-300 leading-relaxed">
                {certificate.description}
              </p>
              {certificate.credentialId && (
                <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/60">
                  <span>Credential ID: <strong className="text-slate-200">{certificate.credentialId}</strong></span>
                  <span>Date: {certificate.date}</span>
                </div>
              )}
            </div>

            {/* Signatories */}
            {certificate.signatories && certificate.signatories.length > 0 && (
              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase text-slate-500 block">Endorsed By</span>
                  <span className="font-semibold text-slate-300">{certificate.signatories[0]}</span>
                </div>
                {certificate.signatories[1] && (
                  <div className="space-y-0.5 text-right">
                    <span className="text-[10px] uppercase text-slate-500 block">Program Leadership</span>
                    <span className="font-semibold text-slate-300">{certificate.signatories[1]}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Competencies validated */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Competencies Validated
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>Authenticated record</span>
          </div>

          <div className="flex items-center gap-2.5">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <span>Verify on Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
