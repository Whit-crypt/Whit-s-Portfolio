import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import ResumeSection from './components/ResumeSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import DeployGuideModal from './components/DeployGuideModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Navbar adhering to Top Bar Contract */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Experience Section */}
        <Experience />

        {/* 6. Education Section */}
        <Education />

        {/* 7. Certifications & Achievements Section */}
        <Certificates />

        {/* 8. Dedicated Resume Section */}
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 9. Services & Offerings Section */}
        <Services />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 11. Footer Section */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <DeployGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
