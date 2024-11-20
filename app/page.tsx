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
    <main className="overflow-hidden">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="intro" className="py-20 bg-gray-50">
        <IntroSection />
      </section>
      <section id="activities" className="py-20">
        <ActivitiesSection />
      </section>
      <section id="gallery" className="py-20 bg-gray-50">
        <GallerySection />
      </section>
      <section id="stats" className="py-20">
        <StatsSection />
      </section>
      <section id="timeline" className="py-20 bg-gray-50">
        <TimelineSection />
      </section>
      <section id="team" className="py-20">
        <TeamSection />
      </section>
      <section id="partners" className="py-20 bg-gray-50">
        <PartnersSection />
      </section>
    </main>
  );
}