export interface Project {
  id: string;
  title: string;
  category: 'Cybersecurity' | 'AI Education' | 'Leadership';
  tagline: string;
  description: string;
  longDescription: string;
  role: string;
  tools: string[];
  keyOutcomes: string[];
  image: string;
  linkText?: string;
  featured?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerShort: string;
  brand: 'alx' | 'geekbyte' | 'erudite' | 'google';
  date: string;
  category: 'Cybersecurity' | 'Professional' | 'AI & Emerging';
  credentialId?: string;
  verificationUrl?: string;
  signatories?: string[];
  description: string;
  skills: string[];
  badgeColor: string;
  pdfFallbackName?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Volunteer' | 'Leadership';
  responsibilities: string[];
  achievements: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'In Progress' | 'Completed';
  highlights: string[];
  coursework: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    tools?: string[];
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Whitney-Nelly Makafui Adzah",
    shortName: "Whitney Adzah",
    title: "Cybersecurity Analyst & Computer Science Student",
    tagline: "Building resilient digital defenses & empowering the next generation of tech talent across Ghana.",
    bio: "I am a dedicated Computer Science and Engineering student based in Greater Accra, Ghana, specializing in cybersecurity operations, network vulnerability assessment, and digital safety education. From analyzing simulated network threats during my cybersecurity internship to training 80+ Junior High School students on AI fundamentals with WITE, I bridge deep technical discipline with community-driven impact.",
    location: "Greater Accra, Ghana",
    email: "whit.adzah@gmail.com",
    phone: "+233 59 378 2822",
    whatsappLink: "https://wa.me/233593782822?text=Hi%20Whitney,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.",
    linkedin: "https://www.linkedin.com/in/whitney-adzah-adzah-2473bngn25",
    github: "https://github.com/Whit-crypt",
    instagram: "https://instagram.com/w_hit.ney",
    avatar: "/src/assets/images/whitney_headshot_1790113443431.jpg",
    careerGoal: "Seeking an entry-level Cybersecurity Analyst, Security Operations Center (SOC) Tier-1, or IT Infrastructure Support role to safeguard critical infrastructure and advance proactive defense strategies.",
    strengths: [
      "Rigorous network vulnerability identification & log analysis",
      "Translating complex security & AI concepts into actionable community training",
      "High-integrity leadership honed through multi-year volunteer coordination",
      "Self-directed mastery of modern security toolchains and Linux environments"
    ]
  },

  stats: [
    { label: "Students Trained in AI & Safety", value: "80+" },
    { label: "Years Community Volunteerism", value: "3+" },
    { label: "Club Members Coordinated", value: "50+" },
    { label: "Professional Credentials", value: "5" }
  ],

  projects: [
    {
      id: "vuln-assessment-audit",
      title: "Network Vulnerability Assessment & Remediation Audit",
      category: "Cybersecurity",
      tagline: "Subnet vulnerability scanning, CVE triaging, and infrastructure hardening blueprint.",
      description: "A comprehensive vulnerability audit simulating an enterprise branch network. Mapped open services, pinpointed unpatched SSL/TLS ciphers, and structured a prioritized remediation report.",
      longDescription: "During my practical cybersecurity training, I developed an end-to-end vulnerability assessment workflow for simulated local subnets. The project entailed host discovery, port enumeration, banner grabbing, and identifying outdated service daemons vulnerable to known CVEs. I consolidated findings into a standardized risk matrix with actionable remediation timelines according to CVSS severity scores.",
      role: "Lead Security Analyst",
      tools: ["Nmap", "Wireshark", "OpenVAS", "Linux Terminal", "Bash", "CVSS v3.1"],
      keyOutcomes: [
        "Identified 12 critical and high-severity CVE candidates across legacy network services",
        "Formulated zero-cost hardening recommendations for firewall filtering and SSH key authentication",
        "Streamlined automated scan scripts to reduce reconnaissance cycle time by 40%"
      ],
      image: "/src/assets/images/vuln_assessment_audit_1790111323548.jpg",
      featured: true
    },
    {
      id: "ai-literacy-wite",
      title: "AI Literacy & Digital Defense Curriculum for Youth",
      category: "AI Education",
      tagline: "Empowering 80+ Junior High School students with AI fundamentals and safe cyber practices.",
      description: "In collaboration with Women in Information Technology and Engineering (WITE) at GIMPA, co-facilitated hands-on modules introducing pupils to AI ethics, digital footprint hygiene, and tech careers.",
      longDescription: "Recognizing the growing digital divide and the need for early cybersecurity awareness, I joined the WITE outreach initiative at GIMPA to design and deliver interactive AI and digital safety workshops. We guided 80+ JHS pupils through hands-on exercises in algorithmic bias, recognizing phishing scams, smart password generation, and responsible generative AI usage.",
      role: "Curriculum Co-Designer & Lead Workshop Speaker",
      tools: ["Interactive Demos", "Prompt Labs", "WITE Learning Framework", "Group Mentorship"],
      keyOutcomes: [
        "Directly trained 80+ pupils from local public schools in Greater Accra",
        "Achieved 96% comprehension rating in post-workshop safety quiz assessments",
        "Established recurring digital hygiene cheat-sheets for classroom teachers"
      ],
      image: "https://thumbs.dreamstime.com/b/cyber-security-shield-digital-lock-icon-blue-technology-background-concept-featuring-glowing-padlock-abstract-network-434878863.jpg",
      featured: true
    },
    {
      id: "port-recon-tool",
      title: "Automated Multi-Threaded Port Scanner & Banner Grabber",
      category: "Cybersecurity",
      tagline: "Python-powered network inspection tool for automated service discovery and port triage.",
      description: "Engineered a fast, lightweight socket-based network scanner designed to discover active TCP ports, grab service banners, and output structured JSON audit reports.",
      longDescription: "Built from scratch to understand network protocol internals at the socket layer. The tool executes concurrent port probes using Python's threading library, detects responsive daemons, grabs protocol banners, and flags insecure plaintext protocols (e.g. FTP, Telnet, HTTP) requiring TLS encapsulation.",
      role: "Solo Developer",
      tools: ["Python 3", "Socket Programming", "Threading", "JSON Parser", "Kali Linux"],
      keyOutcomes: [
        "Concurrent scanning across top 1,000 standard ports in under 4 seconds per host",
        "Automated insecure protocol warning notifications with TLS migration recommendations",
        "Clean command-line interface with customizable target CIDR ranges and timeouts"
      ],
      image: "/src/assets/images/ethical_hacking_lab_1790111334498.jpg",
      featured: true
    },
    {
      id: "red-cross-operations",
      title: "Volunteer Operations & Incident Coordination System",
      category: "Leadership",
      tagline: "Streamlining emergency preparedness, event logistics, and recordkeeping for 50+ members.",
      description: "Designed a centralized administrative framework and emergency communications protocol for the Ghana Red Cross Club at Mawuli Senior High School.",
      longDescription: "As Club Secretary and Volunteer Coordinator over three years, I modernized club operations for 50+ active student volunteers. I instituted structured digital attendance records, volunteer mobilization timetables for regional health campaigns, and standardized emergency response documentation for first-aid deployments.",
      role: "Club Secretary & Volunteer Coordinator",
      tools: ["Workflow Standardization", "Logistics Planning", "Emergency Rostering", "Crisis Communications"],
      keyOutcomes: [
        "Coordinated logistics for 14 major community health and first-aid outreach initiatives",
        "Maintained 100% record accuracy across 3 consecutive academic years",
        "Reduced volunteer call-up response time during campus drills by 50%"
      ],
      image: "https://i.imgur.com/XGFyI3B.jpeg",
      featured: false
    }
  ] as Project[],

  skillsCategories: [
    {
      category: "Cybersecurity & Defense",
      description: "Core security disciplines focused on vulnerability detection, protocol analysis, and proactive defense.",
      skills: [
        { name: "Vulnerability Assessment", level: "Proficient", description: "Host reconnaissance, missing patch detection, and CVSS prioritization.", tools: ["Nmap", "OpenVAS", "Nessus Basics"] },
        { name: "Network Packet Analysis", level: "Proficient", description: "Deep packet inspection, handshake validation, and anomalous request triage.", tools: ["Wireshark", "TCPDump"] },
        { name: "Threat Detection & SIEM Concepts", level: "Foundational", description: "Understanding log correlation, alert triage, and incident response playbooks.", tools: ["Syslog", "Splunk Basics", "Security Onion"] },
        { name: "Security Protocols & IAM", level: "Proficient", description: "Access control, password hashing, TLS configuration, and principle of least privilege.", tools: ["SSH", "TLS/SSL", "RBAC"] }
      ]
    },
    {
      category: "Software & Operating Systems",
      description: "Systems administration and tooling environments essential for modern IT & security operations.",
      skills: [
        { name: "Linux System Administration", level: "Proficient", description: "User permission management, daemon configuration, process monitoring, and hardening.", tools: ["Ubuntu", "Kali Linux", "Debian", "Bash"] },
        { name: "Networking Fundamentals", level: "Proficient", description: "OSI & TCP/IP stack, CIDR subnetting, VLANs, routing tables, and DNS/DHCP debugging.", tools: ["Cisco Packet Tracer", "Netstat", "IP Route"] },
        { name: "Version Control & GitHub", level: "Proficient", description: "Repository management, code branching, and deployment automation.", tools: ["Git", "GitHub", "GitHub Actions"] },
        { name: "Virtualization & Testbeds", level: "Intermediate", description: "Setting up isolated guest virtual machines for security experiments.", tools: ["VirtualBox", "VMware Workstation"] }
      ]
    },
    {
      category: "Programming & Automation",
      description: "Languages and scripting techniques used to automate repetitive audit workflows.",
      skills: [
        { name: "Python Scripting", level: "Intermediate", description: "Writing port scanners, log parsers, file hashing scripts, and data manipulation.", tools: ["Python 3", "Socket", "Requests"] },
        { name: "Bash & Shell Scripting", level: "Intermediate", description: "Automating routine system audits, log grep filtering, and backup routines.", tools: ["Bash", "Zsh", "Cron"] },
        { name: "Web Fundamentals & Security", level: "Intermediate", description: "Understanding OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF) on web applications.", tools: ["HTML5", "CSS3", "JavaScript", "SQL"] }
      ]
    },
    {
      category: "AI, Communication & Leadership",
      description: "Bridging technical knowledge with human impact, workshop delivery, and organizational leadership.",
      skills: [
        { name: "AI Education & Workshop Delivery", level: "Advanced", description: "Trained 80+ young students in AI concepts, prompt engineering, and ethical tech.", tools: ["Public Speaking", "Instructional Design"] },
        { name: "Volunteer Coordination & Administration", level: "Advanced", description: "Managed records, scheduling, and emergency drills for 50+ Red Cross club members.", tools: ["Crisis Coordination", "Event Planning"] },
        { name: "Technical Documentation", level: "Proficient", description: "Writing structured vulnerability reports, remediation guides, and meeting minutes.", tools: ["Markdown", "Technical Writing"] },
        { name: "Analytical Problem Solving", level: "Advanced", description: "Structured root-cause diagnosis across complex systems and workflows.", tools: ["Critical Thinking", "Risk Modeling"] }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      id: "erudite-africa",
      role: "Cybersecurity Analyst Intern",
      organization: "Erudite African Network",
      location: "Accra, Ghana",
      period: "May 2025",
      type: "Internship",
      responsibilities: [
        "Executed systematic vulnerability scans and port enumeration on internal lab subnets.",
        "Monitored live packet streams using Wireshark to identify suspicious connection attempts and unencrypted protocols.",
        "Supported enterprise data handling practices and verified endpoint compliance with security baselines.",
        "Assisted senior engineers in evaluating threat detection signatures and drafting security remediation recommendations."
      ],
      achievements: [
        "Awarded Certificate of Completion in Cybersecurity & Ethical Hacking training.",
        "Successfully documented 8 practical security assessment scenarios for internal training."
      ],
      tags: ["Vulnerability Assessment", "Wireshark", "Network Monitoring", "Ethical Hacking", "Accra"]
    },
    {
      id: "wite-volunteer",
      role: "AI Education Outreach Volunteer",
      organization: "Women in Information Technology and Engineering (WITE)",
      location: "GIMPA, Accra, Ghana",
      period: "October 2025",
      type: "Volunteer",
      responsibilities: [
        "Collaborated with a multi-disciplinary team to formulate and present an interactive AI fundamentals module.",
        "Mentored and guided 80+ Junior High School students during practical computer lab workshops.",
        "Facilitated open discussions regarding cyber safety, safe browsing habits, and career pathways for young women in STEM."
      ],
      achievements: [
        "Educated over 80 young students with high engagement and positive feedback from school staff.",
        "Recognized by WITE coordinators for exceptional communication and classroom rapport."
      ],
      tags: ["AI Education", "STEM Outreach", "WITE", "GIMPA", "Community Impact"]
    },
    {
      id: "red-cross-mawuli",
      role: "Club Secretary & Volunteer Coordinator",
      organization: "Ghana Red Cross Club",
      location: "Mawuli SHS, Ho, Ghana",
      period: "April 2021 – September 2024",
      type: "Leadership",
      responsibilities: [
        "Maintained official correspondence, event documentation, and meeting minutes for 50+ members across 3 years.",
        "Organized community outreach projects, blood donation campaigns, and campus first-aid readiness drills.",
        "Coordinated logistics with school authorities, regional health officers, and student volunteer squads."
      ],
      achievements: [
        "Successfully mobilized volunteer teams for 14 major school and community-wide safety campaigns.",
        "Established structured recordkeeping archives adopted by subsequent club executives."
      ],
      tags: ["Leadership", "Administration", "First Aid Logistics", "Red Cross", "Ho"]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "cs-degree",
      degree: "Bachelor of Science in Computer Science / Engineering",
      institution: "University Institution in Ghana",
      location: "Greater Accra, Ghana",
      period: "Expected 2026/2027",
      status: "In Progress",
      highlights: [
        "Specializing in Network Architecture, Information Security, and Systems Engineering.",
        "Active member of campus computer science & cybersecurity research groups."
      ],
      coursework: [
        "Computer Networks & Protocols",
        "Operating Systems & Linux Admin",
        "Database Management Systems",
        "Data Structures & Algorithms",
        "Discrete Mathematics & Logic",
        "Software Engineering Principles"
      ]
    },
    {
      id: "alx-cybersecurity",
      degree: "Cybersecurity Specialist Training & Certification",
      institution: "ALX Africa / AL Group",
      location: "Pan-African (Online & Hub)",
      period: "Graduated September 2025",
      status: "Completed",
      highlights: [
        "Rigorous hands-on training program covering proactive defense, attack vectors, incident triage, and SOC analyst responsibilities.",
        "Graduated with verified Certificate of Achievement endorsed by Fred Swaniker (Founder & CEO)."
      ],
      coursework: [
        "Threat Modeling & Attack Surfaces",
        "Network Defense & Packet Analysis",
        "Linux Security Fundamentals",
        "Incident Response & Remediation"
      ]
    },
    {
      id: "alx-foundations",
      degree: "Professional Foundations for the Digital Age",
      institution: "ALX Africa",
      location: "Pan-African",
      period: "Completed May 2025",
      status: "Completed",
      highlights: [
        "Comprehensive professional development curriculum covering leadership, agile project execution, and cross-cultural communication."
      ],
      coursework: [
        "Critical Thinking & Problem Framing",
        "Workplace Communication & Executive Presence",
        "Collaborative Problem Solving in Tech"
      ]
    },
    {
      id: "mawuli-shs",
      degree: "West African Senior School Certificate (WASSCE)",
      institution: "Mawuli Senior High School",
      location: "Ho, Volta Region, Ghana",
      period: "2021 – 2024",
      status: "Completed",
      highlights: [
        "Strong academic standing with elective Science and Computing focus.",
        "Held leadership role as Club Secretary & Volunteer Coordinator of the Ghana Red Cross Club for three full years."
      ],
      coursework: [
        "Elective Mathematics",
        "Integrated Science & Physics",
        "Information & Communications Technology",
        "Social Sciences & English"
      ]
    }
  ] as EducationItem[],

  certificates: [
    {
      id: "alx-cybersecurity",
      title: "Cyber Security Certificate of Achievement",
      issuer: "ALX Africa • AL Group",
      issuerShort: "ALX Africa",
      brand: "alx",
      date: "September 15, 2025",
      category: "Cybersecurity",
      credentialId: "aeb055fb-de42-44bc-8adf-ce2a0231af28",
      verificationUrl: "https://ehub.alxafrica.com/ob3/verify-certificate/aeb055fb-de42-44bc-8adf-ce2a0231af28",
      signatories: ["Fred Swaniker (Founder & CEO, AL Group)", "Kavi Ramburn (VP of Learning, ALX)"],
      description: "Awarded upon successful graduation from the comprehensive ALX Cyber Security program after meeting all rigorous course and practical assessment benchmarks.",
      skills: ["Network Security", "Threat Intelligence", "Incident Triage", "Linux Hardening", "Ethical Defense"],
      badgeColor: "#0284C7",
      pdfFallbackName: "alx-cybersecurity-certificate.pdf"
    },
    {
      id: "geekbyte-ccs",
      title: "CCS Certification for Cyber Security",
      issuer: "Geek Byte Network",
      issuerShort: "Geek Byte",
      brand: "geekbyte",
      date: "February 28, 2026",
      category: "Cybersecurity",
      credentialId: "CCS-2026-WMA",
      signatories: ["Sibdou Issifu (Program Manager)", "Sibdou Issifu (CyberSecurity Instructor)"],
      description: "Officially certified in Practical Cybersecurity (CCS). Demonstrates hands-on competency in vulnerability scanning, basic penetration testing, defense strategies, and perimeter controls.",
      skills: ["Vulnerability Assessment", "Threat Detection", "Penetration Testing Basics", "Network Monitoring"],
      badgeColor: "#2563EB",
      pdfFallbackName: "geekbyte-practical-cybersecurity.pdf"
    },
    {
      id: "erudite-cybersecurity",
      title: "Cybersecurity and Ethical Hacking Training",
      issuer: "Erudite Africa Network",
      issuerShort: "Erudite Africa",
      brand: "erudite",
      date: "May 2025",
      category: "Cybersecurity",
      credentialId: "EAN-CEH-2025-05",
      signatories: ["Oppong-Kyekyeku Samuel (Awarded By)", "Oduro Enoch Nana Tabi (Directed By)"],
      description: "Recognizes the successful completion of intensive Cybersecurity & Ethical Hacking training, demonstrating discipline, ethical responsibility, and proactive cyber defense methodologies.",
      skills: ["Ethical Hacking", "Vulnerability Assessment", "Network Analysis", "Security Protocols"],
      badgeColor: "#0D9488",
      pdfFallbackName: "erudite-ethical-hacking.pdf"
    },
    {
      id: "alx-professional",
      title: "Professional Foundations for the Digital Age",
      issuer: "ALX Africa",
      issuerShort: "ALX Africa",
      brand: "alx",
      date: "May 26, 2025",
      category: "Professional",
      credentialId: "GrfpxMYHpS",
      verificationUrl: "https://savanna.alxafrica.com/certificates/GrfpxMYHpS",
      signatories: ["Fred Swaniker (Founder & CEO)", "Kavi Ramburn (VP of Learning)"],
      description: "Comprehensive certification covering workplace problem solving, modern digital productivity, agile collaboration, and leadership communication.",
      skills: ["Professional Communication", "Critical Problem Framing", "Workplace Agility", "Tech Leadership"],
      badgeColor: "#4F46E5",
      pdfFallbackName: "alx-professional-foundations.pdf"
    },
    {
      id: "google-ai-essentials",
      title: "Google AI Essentials Certification",
      issuer: "Google",
      issuerShort: "Google",
      brand: "google",
      date: "2025",
      category: "AI & Emerging",
      credentialId: "GOOG-AI-2025-WMA",
      signatories: ["Google Skills Training Institute"],
      description: "Demonstrates foundational mastery of artificial intelligence systems, generative AI prompting, responsible AI principles, and ethical tech applications.",
      skills: ["Generative AI", "Prompt Engineering", "Responsible AI Ethics", "Productivity Acceleration"],
      badgeColor: "#10B981",
      pdfFallbackName: "google-ai-essentials.pdf"
    }
  ] as Certificate[],

  services: [
    {
      id: "vuln-assessment",
      title: "Network Vulnerability & Posture Review",
      description: "Hands-on assessment of small office / home office or institutional subnets. Identification of open ports, unencrypted protocols, and practical remediation guides.",
      deliverables: ["Nmap port & service enumeration", "Insecure protocol triage report", "Actionable hardening checklist"],
      icon: "ShieldAlert"
    },
    {
      id: "ai-workshops",
      title: "AI Literacy & Digital Safety Workshops",
      description: "Engaging, accessible educational workshops for junior high schools, youth groups, and tech communities on AI benefits, online privacy, and password hygiene.",
      deliverables: ["Custom tailored workshop slide deck", "Hands-on student lab exercises", "Interactive Q&A and safety handouts"],
      icon: "Sparkles"
    },
    {
      id: "it-support",
      title: "Volunteer IT & Infrastructure Hardening",
      description: "Assisting non-profits, student clubs, and local initiatives in Ghana with secure email setups, digital recordkeeping, and basic IT troubleshooting.",
      deliverables: ["Secure account configurations", "Digital roster/archive setup", "Basic cybersecurity hygiene training"],
      icon: "Headphones"
    }
  ]
};
