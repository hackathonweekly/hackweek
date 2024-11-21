'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

// 静态导入首屏组件
import HeroSection from './components/hero-section';
import IntroSection from './components/intro-section';

// 动态导入其他组件
const ActivitiesSection = dynamic(() => import('./components/activities-section'), {
  loading: () => <LoadingSection />,
});
const StatsSection = dynamic(() => import('./components/stats-section'), {
  loading: () => <LoadingSection />,
});
const TimelineSection = dynamic(() => import('./components/timeline-section'), {
  loading: () => <LoadingSection />,
});
const TeamSection = dynamic(() => import('./components/team-section'), {
  loading: () => <LoadingSection />,
});
const PartnersSection = dynamic(() => import('./components/partners-section'), {
  loading: () => <LoadingSection />,
});
const GallerySection = dynamic(() => import('./components/gallery-section'), {
  loading: () => <LoadingSection />,
});

// 加载占位组件
const LoadingSection = () => (
  <div className="w-full h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="intro" className="py-16 md:py-24 bg-gray-50">
        <IntroSection />
      </section>

      <Suspense fallback={<LoadingSection />}>
        <section id="activities" className="py-16 md:py-24">
          <ActivitiesSection />
        </section>

        <section id="gallery" className="py-16 md:py-24 bg-gray-50">
          <GallerySection />
        </section>

        <section id="stats" className="py-16 md:py-24">
          <StatsSection />
        </section>

        <section id="timeline" className="py-16 md:py-24 bg-gray-50">
          <TimelineSection />
        </section>

        <section id="team" className="py-16 md:py-24">
          <TeamSection />
        </section>

        <section id="partners" className="py-16 md:py-24 bg-gray-50">
          <PartnersSection />
        </section>
      </Suspense>
    </motion.main>
  );
}