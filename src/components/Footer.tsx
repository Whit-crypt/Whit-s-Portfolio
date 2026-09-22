import { Shield, Github, Linkedin, Instagram, Mail, Phone, Rocket, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export default function Footer({ onOpenResume, onOpenDeployGuide }: FooterProps) {
  const { profile } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#070A11] text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Wordmark & Bio summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {profile.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Cybersecurity Analyst & Computer Science / Engineering Student dedicated to building proactive digital defense solutions and expanding AI literacy across Ghana.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Background</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Technical Toolkit</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Case Studies & Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Professional Experience</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors">Academic History</a></li>
              <li><a href="#certificates" className="hover:text-blue-400 transition-colors">Verified Credentials</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Actions & Tools */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Resources & Deployment
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={onOpenResume}
                className="block text-slate-300 hover:text-blue-400 transition-colors text-left"
              >
                ▸ View & Print Curriculum Vitae (CV)
              </button>

              <button
                onClick={onOpenDeployGuide}
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors font-medium text-left"
              >
                <Rocket className="w-3.5 h-3.5" />
                <span>GitHub Pages Hosting Guide</span>
              </button>

              <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                Greater Accra, Ghana · GMT +00:00 · Open to remote & onsite analyst positions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Whitney-Nelly Makafui Adzah. Built with React & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDeployGuide}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              GitHub Deployment Docs
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
