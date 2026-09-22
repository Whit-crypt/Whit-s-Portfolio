import { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CertificateBrandLogo } from './BrandLogos';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const { profile, experience, education, certificates, skillsCategories } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
WHITNEY-NELLY MAKAFUI ADZAH
${profile.title}
Location: ${profile.location} | Email: ${profile.email} | Phone: ${profile.phone}
LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}

PROFESSIONAL SUMMARY
${profile.bio}

CAREER OBJECTIVE
${profile.careerGoal}

CORE SKILLS & COMPETENCIES
- Vulnerability Assessment (Nmap, OpenVAS, Nessus Basics, CVSS v3.1)
- Network Analysis & Packet Inspection (Wireshark, TCPDump, Subnetting)
- Threat Detection & Incident Response Fundamentals
- Linux Administration (Ubuntu, Kali Linux, Bash scripting, system hardening)
- Programming & Automation (Python 3, Bash, HTML/CSS/JS, SQL)
- AI Education & Community Workshop Delivery (80+ students trained)
- Volunteer Coordination & Crisis Logistics (Ghana Red Cross Club)

PROFESSIONAL EXPERIENCE
1. Cybersecurity Analyst Intern — Erudite African Network (Accra, Ghana | May 2025)
   - Conducted vulnerability assessments and network service enumeration.
   - Monitored traffic streams using Wireshark for anomalous request patterns.
   - Hardened internal testbed configurations and drafted risk remediation guides.

2. AI Education Outreach Volunteer — Women in IT & Engineering (GIMPA, Accra | Oct 2025)
   - Co-facilitated interactive AI and cyber hygiene workshops for 80+ JHS pupils.
   - Delivered engaging modules on algorithmic bias, safe browsing, and tech careers.

3. Club Secretary & Volunteer Coordinator — Ghana Red Cross Club (Mawuli SHS | 2021 - 2024)
   - Managed records, communications, and emergency drills for 50+ active members.
   - Coordinated logistics for 14 major community health and first-aid operations.

EDUCATION
- B.Sc. in Computer Science / Engineering (In Progress | Greater Accra, Ghana)
- Cybersecurity Specialist Cohort — ALX Africa (Graduated Sept 2025)
- Professional Foundations for the Digital Age — ALX Africa (May 2025)
- West African Senior School Certificate (WASSCE) — Mawuli Senior High School (2021 - 2024)

CERTIFICATIONS
- ALX Cyber Security Certificate of Achievement (Sept 2025)
- Geek Byte Network CCS Certification for Practical Cyber Security (Feb 2026)
- Erudite Africa Network Cybersecurity & Ethical Hacking (May 2025)
- ALX Africa Professional Foundations (May 2025)
- Google AI Essentials (2025)
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const textCV = `
WHITNEY-NELLY MAKAFUI ADZAH
${profile.title}
Location: ${profile.location} | Email: ${profile.email} | Phone: ${profile.phone}
LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}

PROFESSIONAL SUMMARY
${profile.bio}

CAREER OBJECTIVE
${profile.careerGoal}

CORE SKILLS & COMPETENCIES
- Vulnerability Assessment (Nmap, OpenVAS, Nessus Basics, CVSS v3.1)
- Network Analysis & Packet Inspection (Wireshark, TCPDump, Subnetting)
- Threat Detection & Incident Response Fundamentals
- Linux Administration (Ubuntu, Kali Linux, Bash scripting, system hardening)
- Programming & Automation (Python 3, Bash, HTML/CSS/JS, SQL)
- AI Education & Community Workshop Delivery (80+ students trained)
- Volunteer Coordination & Crisis Logistics (Ghana Red Cross Club)

PROFESSIONAL EXPERIENCE
1. Cybersecurity Analyst Intern — Erudite African Network (Accra, Ghana | May 2025)
   - Conducted vulnerability assessments and network service enumeration.
   - Monitored traffic streams using Wireshark for anomalous request patterns.
   - Hardened internal testbed configurations and drafted risk remediation guides.

2. AI Education Outreach Volunteer — Women in IT & Engineering (GIMPA, Accra | Oct 2025)
   - Co-facilitated interactive AI and cyber hygiene workshops for 80+ JHS pupils.
   - Delivered engaging modules on algorithmic bias, safe browsing, and tech careers.

3. Club Secretary & Volunteer Coordinator — Ghana Red Cross Club (Mawuli SHS | 2021 - 2024)
   - Managed records, communications, and emergency drills for 50+ active members.
   - Coordinated logistics for 14 major community health and first-aid operations.

EDUCATION
- B.Sc. in Computer Science / Engineering (In Progress | Greater Accra, Ghana)
- Cybersecurity Specialist Cohort — ALX Africa (Graduated Sept 2025)
- Professional Foundations for the Digital Age — ALX Africa (May 2025)
- West African Senior School Certificate (WASSCE) — Mawuli Senior High School (2021 - 2024)

CERTIFICATIONS
- ALX Cyber Security Certificate of Achievement (Sept 2025)
- Geek Byte Network CCS Certification for Practical Cyber Security (Feb 2026)
- Erudite Africa Network Cybersecurity & Ethical Hacking (May 2025)
- ALX Africa Professional Foundations (May 2025)
- Google AI Essentials (2025)
    `.trim();

    const blob = new Blob([textCV], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Whitney_Adzah_Cybersecurity_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono font-medium text-slate-200">
              Curriculum Vitae · Whitney-Nelly Makafui Adzah
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Copy plain text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Save .txt</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-950 text-slate-100 font-sans">
          {/* Document Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm font-semibold text-blue-400">
              {profile.title}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {profile.location}
              </span>
              <span>·</span>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1 text-slate-300 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {profile.email}
              </a>
              <span>·</span>
              <a href={profile.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-300 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                {profile.phone}
              </a>
              <span>·</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              01. Executive Summary & Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {profile.bio}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
              <strong className="text-slate-200">Career Objective:</strong> {profile.careerGoal}
            </p>
          </div>

          {/* Technical & Defense Competencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              02. Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1">Cybersecurity & Defense</span>
                <span className="text-slate-400">Vulnerability Assessment, Packet Inspection (Wireshark), Nmap Port Scanning, Threat Triage, Security Baselines.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1">Systems & Toolchains</span>
                <span className="text-slate-400">Linux (Ubuntu/Kali), Bash Scripting, Python 3, VirtualBox, Cisco Packet Tracer, Git & GitHub.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1">AI & Emerging Tech</span>
                <span className="text-slate-400">Google AI Essentials, Prompt Engineering, Algorithmic Ethics & Safety, Youth Tech Workshop Delivery.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1">Leadership & Coordination</span>
                <span className="text-slate-400">Red Cross Volunteer Coordination (50+ members), Emergency Drill Logistics, Incident Documentation.</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              03. Professional & Volunteer Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                      <p className="text-slate-300 font-medium">{exp.organization} · {exp.location}</p>
                    </div>
                    <span className="text-slate-400 font-mono mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300 pt-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400">·</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              04. Education & Academic Background
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-sm">{edu.degree}</span>
                    <span className="font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-slate-300">{edu.institution} · {edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              05. Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {certificates.map((cert) => (
                <div key={cert.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <CertificateBrandLogo brand={cert.brand} size="sm" />
                    <div className="min-w-0">
                      <span className="font-semibold text-slate-200 block truncate">{cert.title}</span>
                      <span className="text-[11px] text-slate-400">{cert.issuerShort} · {cert.date}</span>
                    </div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-500">Official CV · Verified by Whitney Adzah</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
