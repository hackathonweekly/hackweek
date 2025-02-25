"use client";

import CoverPage from "./components/cover-page";
import CommunityOverview from "./components/community-overview";
import VisionMission from "./components/vision-mission";
import CoreHighlights from "./components/core-highlights";
import Milestones from "./components/milestones";
import Team from "./components/team";
import FeaturedActivities from "./components/featured-activities";
import ProjectShowcase from "./components/project-showcase";
import Partners from "./components/partners";
import ValueProposition from "./components/value-proposition";
import FuturePlans from "./components/future-plans";
import Contact from "./components/contact";

export default function PPTPage() {
  return (
    <div className="space-y-1 py-1">
      <CoverPage />
      <CommunityOverview />
      <VisionMission />
      <CoreHighlights />
      <Milestones />
      <Team />
      <FeaturedActivities />
      <ProjectShowcase />
      <Partners />
      <ValueProposition />
      <FuturePlans />
      <Contact />
    </div>
  );
}
