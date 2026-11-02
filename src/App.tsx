import { useEffect, useState, type ReactNode, type CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink, MapPin } from 'lucide-react';
import { certifications, education, experience, profile, projects, skills } from './data/portfolio';

function SectionHead({ kicker, title, copy }: { kicker: string; title: ReactNode; copy?: string }) {
  return <div className="section-head reveal"><p className="eyebrow">{kicker}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<number | null>(null);
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { nodes.forEach(n => n.classList.add('visible')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (activeCert === null) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setActiveCert(null); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeCert]);
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Archive', '#certifications'], ['Education', '#education']];
  return <div className="site-shell">
    <div className="grain" aria-hidden="true" />
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Ranjith M home"><span className="brand-mark">RM</span><span>RANJITH M<span className="brand-sub">DEVELOPER · PORTFOLIO</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero dark-section">
        <div className="hero-grid" />
        <div className="hero-content">
          <p className="eyebrow hero-kicker"><span className="status-dot"/> AVAILABLE FOR THE RIGHT OPPORTUNITY <span className="kicker-index">— 01 / 06</span></p>
          <p className="hero-overline">HELLO, I'M</p>
          <h1>Ranjith <em>M.</em></h1>
          <div className="hero-rule"><span/> <p>Building for the web. Learning by making.</p></div>
          <p className="hero-intro">{profile.bio}</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDown size={16}/></a><a className="button button-outline" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div>
          <div className="hero-meta"><span><MapPin size={14}/> {profile.location}</span><span>PYTHON / REACT / WEB</span></div>
        </div>
        <div className="hero-aside"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="portrait-frame"><img src="/profile.png" alt="Portrait of Ranjith M" fetchPriority="high"/><span className="portrait-caption">FIG. 01 — THE DEVELOPER</span></div><span className="vertical-note">INDEPENDENTLY CURIOUS · CONSTANTLY BUILDING</span></div>
        <span className="hero-bottom-note">SCROLL TO EXPLORE <span>↓</span></span>
      </section>

      <section id="about" className="paper-section about-section"><div className="section-number">01 / ABOUT</div><div className="about-layout"><SectionHead kicker="A LITTLE CONTEXT" title={<>Curiosity, turned<br/><i>into code.</i></>}/><div className="about-body reveal"><p className="lead">I’m a Computer Science student with a growing focus on full-stack development, Python and open-source technology.</p><p>I enjoy understanding how products work beneath the interface — from thoughtful frontend experiences to backend logic and data. I’m especially interested in language technology and tools that make digital information more accessible.</p><div className="about-signature">Ranjith M <span>— Developer in progress</span></div></div></div></section>

      <section id="skills" className="dark-section skills-section"><div className="section-number light">02 / TOOLKIT</div><SectionHead kicker="TOOLS I WORK WITH" title={<>A practical <i>toolkit.</i></>} copy="Technologies I have worked with across learning, projects and collaboration."/><div className="skill-grid">{skills.map((group, i) => <article className="skill-card reveal" key={group.group} style={{'--delay': i * 70 + 'ms'} as CSSProperties}><span className="skill-index">0{i+1}</span><h3>{group.group}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>

      <section id="experience" className="paper-section experience-section"><div className="section-number">03 / EXPERIENCE</div><SectionHead kicker="THE JOURNEY SO FAR" title={<>Learning through <i>experience.</i></>} copy="A timeline of internships and community contributions. Dates and statuses reflect the information currently confirmed."/><div className="timeline">{experience.map((item) => <article className="timeline-item reveal" key={item.org}><div className="timeline-marker"><span/></div><div className="timeline-date">{item.date}</div><div className="timeline-content"><div className="timeline-title"><div><h3>{item.role}</h3><p>{item.org}</p></div><span className={'status status-' + item.status.toLowerCase()}>{item.status}</span></div><p className="timeline-detail">{item.detail}</p></div></article>)}</div></section>

      <section id="projects" className="dark-section projects-section"><div className="section-number light">04 / SELECTED WORK</div><SectionHead kicker="MADE WITH INTENTION" title={<>A few things <i>I've built.</i></>} copy="A selection of project work and contribution areas. Repository links are shown only where the destination is confirmed."/><div className="project-list">{projects.map((project, i) => <article className="project-row reveal" key={project.name}><div className="project-count">0{i+1}</div><div className="project-main"><p className="eyebrow">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-action"><span className="link-pending" title="Repository URL not confirmed"><span>LINK PENDING</span><ExternalLink size={16}/></span></div></article>)}</div></section>

      <section id="certifications" className="archive-section"><div className="section-number">05 / THE ARCHIVE</div><div className="archive-heading"><SectionHead kicker="DOCUMENTS OF THE JOURNEY" title={<>A wall of <i>milestones.</i></>} copy="An archival board of certificates and achievements. Select a document to inspect it."/></div><div className="archive-board"><div className="archive-stamp">PERSONAL<br/>ARCHIVE <span>EST. 2026</span></div><div className="pinboard">{certifications.map((cert, i) => <button className={'certificate-card cert-' + (i%4) + ' reveal'} key={cert.title} onClick={() => setActiveCert(i)} aria-label={'View certificate: ' + cert.title}><span className="pin"/><span className="cert-image"><img src={cert.image} alt={cert.title} loading="lazy"/></span><span className="cert-number">DOCUMENT NO. {String(i+1).padStart(2,'0')}</span><span className="cert-title">{cert.title}</span><span className="cert-issuer">{cert.issuer}</span>{cert.note && <span className="cert-note">{cert.note}</span>}</button>)}</div><p className="archive-foot">11 DOCUMENTS · ORIGINAL CREDENTIAL IMAGES · NO THIRD-PARTY VERIFICATION CLAIMS</p></div></section>

      <section id="education" className="paper-section education-section"><div className="section-number">06 / EDUCATION</div><SectionHead kicker="ACADEMIC FOUNDATION" title={<>Where it <i>started.</i></>}/><div className="education-list">{education.map((item,i) => <article className="education-row reveal" key={item.degree}><span className="education-index">0{i+1}</span><div><h3>{item.degree}</h3><p>{item.school} · {item.place}</p></div>{item.result && <span className="education-result">{item.result}</span>}</article>)}</div></section>
    </main>

    <footer id="contact" className="footer dark-section"><div className="section-number light">07 / CONTACT</div><div className="footer-main"><div><p className="eyebrow">HAVE A PROJECT OR AN IDEA?</p><h2>Let's make<br/><i>something matter.</i></h2></div><a className="footer-email" href={'mailto:' + profile.email}>{profile.email}<ArrowUpRight/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ranjith M · Built with curiosity.</span><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a href={profile.x} target="_blank" rel="noreferrer">𝕏 <span>Twitter</span></a><a href={'mailto:' + profile.email}><Mail size={16}/> Email</a></div><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer>

    {activeCert !== null && <div className="modal-backdrop" role="presentation" onClick={() => setActiveCert(null)}><div className="cert-modal" role="dialog" aria-modal="true" aria-label={certifications[activeCert].title} onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveCert(null)} aria-label="Close certificate"><X/></button><img src={certifications[activeCert].image} alt={certifications[activeCert].title}/><div><p className="eyebrow">{certifications[activeCert].issuer}</p><h3>{certifications[activeCert].title}</h3>{certifications[activeCert].note && <p>{certifications[activeCert].note}</p>}</div></div></div>}
  </div>;
}
export default App;
