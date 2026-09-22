import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, ExternalLink, Linkedin, Github, Instagram, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Cybersecurity Analyst Opportunity',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      setFormStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      setFormStatus('error');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please share a message with at least 10 characters.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');

    // Simulate sending with direct fallback mailto ready
    setTimeout(() => {
      setFormStatus('success');
      // Also construct mailto as backup
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject + ' from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
      console.log('Form submitted. Mailto fallback ready:', mailtoUrl);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Cybersecurity Analyst Opportunity',
      message: ''
    });
    setFormStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            08. Initiate Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Let's build secure infrastructure or organize impactful tech workshops.
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Open for full-time opportunities, security analyst roles, consulting inquiries, and educational initiatives across Ghana and internationally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
              <h3 className="text-base font-bold text-white tracking-tight">
                Direct Contact Channels
              </h3>

              {/* Email Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Primary Email</span>
                    <a href={`mailto:${profile.email}`} className="font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp / Phone Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-600/15 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Phone & WhatsApp</span>
                    <a href={profile.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-200 hover:text-teal-400 transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={profile.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-teal-400 hover:text-teal-300 hover:bg-slate-800 transition-colors"
                    title="Open WhatsApp chat"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Current Location</span>
                  <span className="font-semibold text-slate-200">{profile.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Verified Social & Code Profiles
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs text-slate-300 space-y-1">
              <span className="font-semibold text-blue-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Prompt Availability</span>
              </span>
              <p className="text-slate-400 leading-relaxed">
                Typically responds within 24 hours via email or WhatsApp during business days (GMT).
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Feel free to reach out with project proposals, job inquiries, or training requests.
                  </p>
                </div>
              </div>

              {formStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-slate-950 border border-teal-800/80 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Your inquiry has been registered. You can also send a direct copy to <strong className="text-blue-400">{profile.email}</strong>.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Launch in Email Client</span>
                    </a>
                    <button
                      onClick={resetForm}
                      className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus === 'error' && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-xs text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Kwame Mensah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Subject / Inquiry Nature
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-white focus:outline-none transition-colors"
                    >
                      <option value="Cybersecurity Analyst Opportunity">Cybersecurity Analyst / SOC Role</option>
                      <option value="Vulnerability Assessment Consultation">Network Vulnerability Consultation</option>
                      <option value="AI Education & Youth Workshop">AI Education / School STEM Workshop</option>
                      <option value="Volunteer Collaboration">Volunteer / Community Collaboration</option>
                      <option value="General Technical Inquiry">General Inquiry / Coffee Chat</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please share details about your organization, project scope, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-950/40 hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    <span>{formStatus === 'submitting' ? 'Transmitting Message...' : 'Transmit Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
