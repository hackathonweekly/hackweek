"use client";

import Milestones from "./components/milestones";
// import Team from "./components/team";
import ProjectShowcase from "./components/project-showcase";
import Partners from "./components/partners";
import Contact from "./components/contact";

// New combined components
import IntroCombined from "./components/intro-combined";
import CommunityFeatures from "./components/community-features";
import FeaturedActivities1 from "./components/featured-activities-1";
import FeaturedActivities2 from "./components/featured-activities-2";
import ValueFutureCombined from "./components/value-future-combined";

export default function PPTPage() {
  return (
    <div className="space-y-1 py-1">
      <IntroCombined />
      <CommunityFeatures />
      <Milestones />
      <FeaturedActivities1 />
      <FeaturedActivities2 />
      <ProjectShowcase />
      <Partners />
      <ValueFutureCombined />
      <Contact />
    </div>
  );
}
