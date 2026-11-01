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
    <div className="relative min-h-screen bg-[#0A0A0A] text-slate-100 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Custom High-Performance Cursor */}
      <CustomCursor />

      {/* Deep Solid Black Background with Ambient Lighting */}
      <BackgroundAurora />

      {/* Modern Glass Dock Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Container with Massive Whitespace & Breathable Separation */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 space-y-24 sm:space-y-28 md:space-y-32">
        {/* Section 1: Hero & High Impact Metrics */}
        <section id="hero" className="space-y-8">
          <HeroWidget onOpenContact={() => setIsContactOpen(true)} />
          <LiveStatsWidget />
        </section>

        {/* Section 2: Technical Repertoire & Cyber-Timeline */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <TechStackWidget />
          </div>
          <div className="lg:col-span-7 flex flex-col">
            <ExperienceWidget />
          </div>
        </section>

        {/* Section 3: Featured Projects */}
        <section>
          <ProjectsWidget />
        </section>

        {/* Section 4: Live Scrolling Certificates (Seamless Infinite Marquee) */}
        <section>
          <CertificationsMarquee />
        </section>

        {/* Section 5: Academic Track */}
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
