'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';

// 静态导入首屏组件
import HeroSection from '../components/hero-section';
import IntroSection from '../components/intro-section';

// 加载和错误处理组件
const LoadingSection = () => (
  <div className="w-full h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const ErrorSection = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="w-full h-[50vh] flex items-center justify-center">
    <div className="text-center">
      <p className="text-red-500 mb-2">加载失败</p>
      <button onClick={resetErrorBoundary} className="text-sm text-primary hover:underline">
        点击重试
      </button>
    </div>
  </div>
);

// 动态导入其他组件
const ActivitiesSection = dynamic(() => import('../components/activities-section'), {
  loading: () => <LoadingSection />,
});

const StatsSection = dynamic(() => import('../components/stats-section'), {
  loading: () => <LoadingSection />,
});

const TimelineSection = dynamic(() => import('../components/timeline-section'), {
  loading: () => <LoadingSection />,
});

const TeamSection = dynamic(() => import('../components/team-section'), {
  loading: () => <LoadingSection />,
});

const PartnersSection = dynamic(() => import('../components/partners-section'), {
  loading: () => <LoadingSection />,
});

const GallerySection = dynamic(() => import('../components/gallery-section'), {
  loading: () => <LoadingSection />,
});

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

      <ErrorBoundary FallbackComponent={ErrorSection}>
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
      </ErrorBoundary>
    </motion.main>
  );
}
