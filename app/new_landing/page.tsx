import React from "react";
import { Metadata } from "next";

// 导入组件
import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import AboutSection from "./components/about-section";
import TeamSection from "./components/team-section";
import ProjectsSection from "./components/projects-section";
import ActivitiesSection from "./components/activities-section";
import PartnersSection from "./components/partners-section";
import TestimonialsSection from "./components/testimonials-section";
// import ContactSection from "./components/contact-section";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "周周黑客松 - AI产品创造者社区",
  description: "打造最具活力的AI产品创造者社区，花1周时间，创造1个最小可行产品"
};

export default function NewLandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* 核心内容区域 */}
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ProjectsSection />
        <TeamSection />
        <ActivitiesSection />
        <PartnersSection />
        <TestimonialsSection />
        {/* <ContactSection /> */}
      </main>
      
      <Footer />
    </div>
  );
} 