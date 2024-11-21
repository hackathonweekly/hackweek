import HeroSection from './components/hero-section';
import IntroSection from './components/intro-section';
import ActivitiesSection from './components/activities-section';
import StatsSection from './components/stats-section';
import TimelineSection from './components/timeline-section';
import TeamSection from './components/team-section';
import PartnersSection from './components/partners-section';
import GallerySection from './components/gallery-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900">
      <div className="relative">
        {/* Background grid effect */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        
        {/* Content */}
        <div className="relative">
          <section id="hero">
            <HeroSection />
          </section>
          <section id="intro">
            <IntroSection />
          </section>
          <section id="activities">
            <ActivitiesSection />
          </section>
          <section id="gallery">
            <GallerySection />
          </section>
          <section id="stats">
            <StatsSection />
          </section>
          <section id="timeline">
            <TimelineSection />
          </section>
          <section id="team">
            <TeamSection />
          </section>
          <section id="partners">
            <PartnersSection />
          </section>
        </div>
      </div>
    </main>
  );
}