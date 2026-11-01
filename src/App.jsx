import React, { useState } from 'react';
import { BackgroundAurora } from './components/BackgroundAurora';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroWidget } from './components/HeroWidget';
import { LiveStatsWidget } from './components/LiveStatsWidget';
import { TechStackWidget } from './components/TechStackWidget';
import { ExperienceWidget } from './components/ExperienceWidget';
import { ProjectsWidget } from './components/ProjectsWidget';
import { CertificationsMarquee } from './components/CertificationsMarquee';
import { EducationWidget } from './components/EducationWidget';
import { ConnectionFooter } from './components/ConnectionFooter';
import { InteractiveContactModal } from './components/InteractiveContactModal';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050B14] text-slate-100 overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* Custom Futuristic Expanding Cursor */}
      <CustomCursor />

      {/* Deep Space Fluid Aurora Background */}
      <BackgroundAurora />

      {/* Floating Glass Dock Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Bento Grid Hub */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-10 sm:space-y-12">
        {/* Section 1: Hero & High Impact Bento Widget */}
        <section id="hero" className="space-y-6">
          <HeroWidget onOpenContact={() => setIsContactOpen(true)} />
          <LiveStatsWidget />
        </section>

        {/* Section 2: Tech Stack & Experience Bento Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <TechStackWidget />
          </div>
          <div className="lg:col-span-7 flex flex-col">
            <ExperienceWidget />
          </div>
        </section>

        {/* Section 3: Projects (Hover-Reveal Bento Cards) */}
        <section>
          <ProjectsWidget />
        </section>

        {/* Section 4: Dynamic Certifications (Endless 3D Perspective Marquee) */}
        <section>
          <CertificationsMarquee />
        </section>

        {/* Section 5: Education Widget */}
        <section>
          <EducationWidget />
        </section>
      </main>

      {/* Section 6: Connection Node & Footer */}
      <ConnectionFooter onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Communication Modal */}
      <InteractiveContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;

