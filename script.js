// ==========================================================================
// Whitney Nhelly Adzah • Executive Portfolio JavaScript
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initModals();
  initContactForm();
});

// 1. Theme Toggle (Dark Obsidian & Warm Luxury Light)
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('whitney_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('whitney_theme', nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i, #theme-toggle svg');
  if (!icon) return;
  if (theme === 'light') {
    icon.innerHTML = `<path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>`;
  } else {
    icon.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
  }
}

// 2. Navigation & Smooth Scroll Spy
function initNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinksContainer.style.display === 'flex';
      navLinksContainer.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = '66px';
        navLinksContainer.style.left = '0';
        navLinksContainer.style.width = '100%';
        navLinksContainer.style.background = 'var(--bg-card)';
        navLinksContainer.style.padding = '20px';
        navLinksContainer.style.borderBottom = '1px solid var(--border-subtle)';
        navLinksContainer.style.boxShadow = '0 12px 28px rgba(0,0,0,0.3)';
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinksContainer.style.display = 'none';
        }
      });
    });
  }

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// 3. Modals Management
function initModals() {
  const overlay = document.getElementById('global-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');

  function openModal(title, htmlContent) {
    if (!overlay || !modalTitle || !modalContent) return;
    modalTitle.innerHTML = title;
    modalContent.innerHTML = htmlContent;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach triggers
  window.openWhitneyModal = openModal;
  window.closeWhitneyModal = closeModal;

  // Project Modals
  document.querySelectorAll('[data-project-id]').forEach((el) => {
    el.addEventListener('click', () => {
      const projectId = el.getAttribute('data-project-id');
      const projectData = getProjectData(projectId);
      if (projectData) {
        openModal(projectData.title, projectData.html);
      }
    });
  });

  // Certificate Modals
  document.querySelectorAll('[data-cert-id]').forEach((el) => {
    el.addEventListener('click', () => {
      const certId = el.getAttribute('data-cert-id');
      const certData = getCertData(certId);
      if (certData) {
        openModal(certData.title, certData.html);
      }
    });
  });

  // Download CV Modals
  document.querySelectorAll('.open-cv-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('Curriculum Vitae • Whitney Adzah', getCVHtml());
    });
  });

  // Contact Modal
  document.querySelectorAll('.open-contact-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('Let\'s Connect • Inquiries & Opportunities', getContactHtml());
      setTimeout(attachModalFormListeners, 100);
    });
  });
}

// 4. Modal Data Suppliers
function getProjectData(id) {
  const projects = {
    'vuln-assessment': {
      title: 'Network Vulnerability Assessment & Remediation Audit',
      html: `
        <div style="space-y: 16px;">
          <img src="/vuln_assessment_audit_1790111323548.jpg" alt="Vulnerability Audit" style="width:100%; border-radius:12px; margin-bottom:16px; border:1px solid var(--border-subtle);" />
          <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.9rem;">
            Conducted full-scale security posture assessments on segmented laboratory subnets. Audited network services using <strong>Nmap NSE scripts</strong>, performed authenticated scans with <strong>OpenVAS</strong>, and mapped vulnerabilities against <strong>CVSS v3.1</strong> benchmarks.
          </p>
          <div style="margin-top: 16px; padding: 14px; background: var(--bg-card-inner); border-radius: 10px; border: 1px solid var(--border-subtle);">
            <h4 style="font-size: 0.85rem; color: var(--text-gold); margin-bottom: 6px;">Key Outcomes & Methodologies</h4>
            <ul style="font-size: 0.8rem; color: var(--text-muted); padding-left: 18px; line-height: 1.6;">
              <li>Identified critical SSL/TLS cipher suite misconfigurations and open telnet daemons.</li>
              <li>Authored actionable executive remediation playbooks reducing theoretical attack surface by 60%.</li>
              <li>Validated security baseline compliance on Debian/Ubuntu server nodes.</li>
            </ul>
          </div>
          <div style="margin-top: 20px; display: flex; gap: 12px;">
            <a href="https://github.com/Whit-crypt" target="_blank" class="btn-primary-gold" style="font-size: 0.8rem; padding: 8px 18px;">
              View on GitHub <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      `
    },
    'soc-analysis': {
      title: 'SOC Traffic Analysis & Incident Triage',
      html: `
        <div style="space-y: 16px;">
          <img src="/cyber_defense_center_1790111313349.jpg" alt="SOC Incident Triage" style="width:100%; border-radius:12px; margin-bottom:16px; border:1px solid var(--border-subtle);" />
          <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.9rem;">
            Simulated targeted reconnaissance and brute-force authentication attacks on test environments. Captured PCAP streams via <strong>Wireshark</strong> and <strong>TCPDump</strong> to extract handshake anomalies, analyze port sweeps, and build firewall drop filters.
          </p>
          <div style="margin-top: 16px; padding: 14px; background: var(--bg-card-inner); border-radius: 10px; border: 1px solid var(--border-subtle);">
            <h4 style="font-size: 0.85rem; color: var(--text-gold); margin-bottom: 6px;">Technologies & Tools</h4>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">
              <span class="tag-pill">Wireshark</span>
              <span class="tag-pill">TCPDump</span>
              <span class="tag-pill">Kali Linux</span>
              <span class="tag-pill">Suricata Rules</span>
            </div>
          </div>
        </div>
      `
    },
    'ai-education': {
      title: 'AI Literacy & Digital Safety Education Platform',
      html: `
        <div style="space-y: 16px;">
          <img src="/ethical_hacking_lab_1790111334498.jpg" alt="AI Education Outreach" style="width:100%; border-radius:12px; margin-bottom:16px; border:1px solid var(--border-subtle);" />
          <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.9rem;">
            Designed interactive educational modules for <strong>80+ Junior High School students</strong> in Accra through the Women in IT and Engineering (WITE) initiative at GIMPA. Covered fundamentals of machine learning, responsible online safety, password entropy, and algorithmic ethics.
          </p>
        </div>
      `
    }
  };
  return projects[id] || null;
}

function getCertData(id) {
  const certs = {
    'alx-cyber': {
      title: 'Cyber Security Certificate of Achievement',
      html: `
        <div style="text-align: center; padding: 16px 0;">
          <div style="margin-bottom: 12px; display: inline-block;">
            <svg viewBox="0 0 100 45" fill="none" style="width: 70px; height: 32px;"><path d="M24.5 35.5H19.5V31.8C18 34.4 15.2 36 11.8 36C5.5 36 1 31.2 1 24.5C1 17.8 5.6 13 11.9 13C15.2 13 18 14.7 19.5 17.2V8H24.5V35.5ZM12.7 17.5C8.4 17.5 5.9 20.6 5.9 24.5C5.9 28.5 8.4 31.5 12.7 31.5C17 31.5 19.5 28.5 19.5 24.5C19.5 20.5 17 17.5 12.7 17.5Z" fill="#c5a880"/><path d="M34.5 8H39.5V35.5H34.5V8Z" fill="#c5a880"/><path d="M50 13.5L57.5 24.5L50 35.5H56L61 27.8L66 35.5H72L64.5 24.5L72 13.5H66L61 21.2L56 13.5H50Z" fill="#c5a880"/><circle cx="80" cy="33" r="3.2" fill="#c5a880"/></svg>
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 4px;">ALX Africa • AL Group</h3>
          <p style="font-size: 0.78rem; color: var(--text-gold); font-family: var(--font-mono); margin-bottom: 16px;">Credential ID: aeb055fb-de42-44bc-8adf-ce2a0231af28</p>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; max-width: 500px; margin: 0 auto 20px;">
            Awarded to <strong>Whitney-Nelly Makafui Adzah</strong> upon successful graduation from the intensive ALX Cyber Security program, meeting all rigorous hands-on assessments in threat detection, network hardening, and ethical response.
          </p>
          <div style="margin-bottom: 20px; display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
            <span class="tag-pill">Network Security</span>
            <span class="tag-pill">Incident Triage</span>
            <span class="tag-pill">Linux Defense</span>
            <span class="tag-pill">Threat Intel</span>
          </div>
          <a href="https://ehub.alxafrica.com/ob3/verify-certificate/aeb055fb-de42-44bc-8adf-ce2a0231af28" target="_blank" class="btn-primary-gold" style="font-size: 0.82rem; padding: 10px 22px;">
            Verify on ALX Portal →
          </a>
        </div>
      `
    },
    'geekbyte-ccs': {
      title: 'CCS Certification for Cyber Security',
      html: `
        <div style="text-align: center; padding: 16px 0;">
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 4px;">Geek Byte Network</h3>
          <p style="font-size: 0.78rem; color: var(--text-gold); font-family: var(--font-mono); margin-bottom: 16px;">Certified: February 28, 2026</p>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; max-width: 500px; margin: 0 auto 20px;">
            Officially certified in <strong>Practical Cybersecurity (CCS)</strong>. Demonstrates proven competencies in vulnerability scanning, perimeter defense, basic penetration testing, and log analysis.
          </p>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 20px;">
            Endorsed by: Sibdou Issifu (Program Manager & Instructor)
          </div>
        </div>
      `
    },
    'erudite-cyber': {
      title: 'Cybersecurity and Ethical Hacking Training',
      html: `
        <div style="text-align: center; padding: 16px 0;">
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 4px;">Erudite Africa Network</h3>
          <p style="font-size: 0.78rem; color: var(--text-gold); font-family: var(--font-mono); margin-bottom: 16px;">Certified: May 2025 • Accra, Ghana</p>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; max-width: 500px; margin: 0 auto 20px;">
            Recognizes successful completion of intensive ethical hacking training, threat mitigation strategies, and practical defense methodologies.
          </p>
        </div>
      `
    },
    'google-ai': {
      title: 'Google AI Essentials Certification',
      html: `
        <div style="text-align: center; padding: 16px 0;">
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 4px;">Google</h3>
          <p style="font-size: 0.78rem; color: var(--text-gold); font-family: var(--font-mono); margin-bottom: 16px;">Issued: 2025</p>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; max-width: 500px; margin: 0 auto 20px;">
            Demonstrates foundational mastery of artificial intelligence systems, effective generative AI prompting, responsible AI principles, and ethical technology applications.
          </p>
        </div>
      `
    },
    'alx-prof': {
      title: 'Professional Foundations for the Digital Age',
      html: `
        <div style="text-align: center; padding: 16px 0;">
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 4px;">ALX Africa</h3>
          <p style="font-size: 0.78rem; color: var(--text-gold); font-family: var(--font-mono); margin-bottom: 16px;">Credential ID: GrfpxMYHpS</p>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; max-width: 500px; margin: 0 auto 20px;">
            Advanced professional cohort focusing on structured workplace communication, agile problem solving, critical thinking, and collaborative team leadership.
          </p>
          <a href="https://savanna.alxafrica.com/certificates/GrfpxMYHpS" target="_blank" class="btn-primary-gold" style="font-size: 0.82rem; padding: 10px 22px;">
            Verify Credential →
          </a>
        </div>
      `
    }
  };
  return certs[id] || null;
}

function getCVHtml() {
  return `
    <div style="line-height: 1.6; font-size: 0.85rem; color: var(--text-secondary);">
      <div style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px; margin-bottom: 16px;">
        <h2 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--text-primary);">Whitney-Nelly Makafui Adzah</h2>
        <p style="color: var(--text-gold); font-weight: 600;">Cybersecurity Analyst & Computer Science / Engineering Student</p>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
          Greater Accra, Ghana • whit.adzah@gmail.com • +233 59 951 1936 • github.com/Whit-crypt
        </p>
      </div>

      <div style="margin-bottom: 16px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-gold); margin-bottom: 6px;">Career Goal</h4>
        <p style="color: var(--text-secondary);">Seeking an entry-level Cybersecurity Analyst, SOC Tier-1, or IT Infrastructure Support role to safeguard critical infrastructure and advance proactive defense strategies.</p>
      </div>

      <div style="margin-bottom: 16px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-gold); margin-bottom: 6px;">Technical Competencies</h4>
        <p>Vulnerability Assessment (Nmap, OpenVAS, CVSS v3.1), Packet Inspection (Wireshark, TCPDump), Linux Administration (Kali, Ubuntu), Python 3, Threat Triage, AI Education & Outreach.</p>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button onclick="window.print()" class="btn-primary-gold" style="font-size: 0.8rem; padding: 8px 18px;">
          Print CV
        </button>
        <button onclick="navigator.clipboard.writeText('WHITNEY-NELLY MAKAFUI ADZAH\\nCybersecurity Analyst\\nGitHub: https://github.com/Whit-crypt\\nEmail: whit.adzah@gmail.com'); alert('CV text copied to clipboard!');" class="btn-secondary-outline" style="font-size: 0.8rem; padding: 8px 18px;">
          Copy Text
        </button>
      </div>
    </div>
  `;
}

function getContactHtml() {
  return `
    <div style="margin-bottom: 20px; padding: 14px; background: var(--bg-card-inner); border: 1px solid var(--border-subtle); border-radius: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
      <a href="tel:+233599511936" style="display: flex; align-items: center; gap: 10px; color: var(--text-primary); text-decoration: none; font-size: 0.85rem;">
        <span style="width: 32px; height: 32px; border-radius: 50%; background: var(--bg-card); border: 1px solid var(--border-gold); display: flex; align-items: center; justify-content: center; color: var(--text-gold);">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </span>
        <div>
          <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Phone / WhatsApp</div>
          <div style="font-weight: 600; color: var(--text-gold);">+233 59 951 1936</div>
        </div>
      </a>
      <a href="mailto:whit.adzah@gmail.com" style="display: flex; align-items: center; gap: 10px; color: var(--text-primary); text-decoration: none; font-size: 0.85rem;">
        <span style="width: 32px; height: 32px; border-radius: 50%; background: var(--bg-card); border: 1px solid var(--border-gold); display: flex; align-items: center; justify-content: center; color: var(--text-gold);">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </span>
        <div>
          <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Direct Email</div>
          <div style="font-weight: 600; color: var(--text-gold);">whit.adzah@gmail.com</div>
        </div>
      </a>
    </div>

    <form id="modal-contact-form" style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <label style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Your Name</label>
        <input type="text" id="contact-name" required placeholder="e.g. Alex Hanson" style="width: 100%; padding: 10px 14px; border-radius: 8px; background: var(--bg-card-inner); border: 1px solid var(--border-subtle); color: var(--text-primary); font-family: inherit;" />
      </div>
      <div>
        <label style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Your Email</label>
        <input type="email" id="contact-email" required placeholder="alex@example.com" style="width: 100%; padding: 10px 14px; border-radius: 8px; background: var(--bg-card-inner); border: 1px solid var(--border-subtle); color: var(--text-primary); font-family: inherit;" />
      </div>
      <div>
        <label style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Message</label>
        <textarea id="contact-message" required rows="4" placeholder="Hi Whitney, I would like to discuss an opportunity..." style="width: 100%; padding: 10px 14px; border-radius: 8px; background: var(--bg-card-inner); border: 1px solid var(--border-subtle); color: var(--text-primary); font-family: inherit; resize: vertical;"></textarea>
      </div>
      <button type="submit" class="btn-primary-gold" style="justify-content: center; padding: 12px;">
        Send Message →
      </button>
      <div id="contact-feedback" style="display: none; font-size: 0.85rem; padding: 10px; border-radius: 8px; text-align: center;"></div>
    </form>
  `;
}

function attachModalFormListeners() {
  const form = document.getElementById('modal-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const msg = document.getElementById('contact-message').value;
    const feedback = document.getElementById('contact-feedback');

    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.background = 'rgba(197, 168, 128, 0.15)';
      feedback.style.color = 'var(--text-gold)';
      feedback.innerHTML = `Thank you, ${name}! Your email client will now open to deliver your message to whit.adzah@gmail.com.`;
    }

    const mailto = `mailto:whit.adzah@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nSender: ' + email)}`;
    setTimeout(() => {
      window.location.href = mailto;
    }, 1200);
  });
}

function initContactForm() {
  // Global form bindings if present in page
}
