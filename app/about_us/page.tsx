import IntroSection from "./components/intro-section";
import CommunityFeatures from "./components/community-features";
import Milestones from "./components/milestones";
import FeaturedActivities from "./components/featured-activities";
import ProjectShowcase from "./components/project-showcase";
import Partners from "./components/partners";
import ValueFuture from "./components/value-future";
import Contact from "./components/contact";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <IntroSection />
      <CommunityFeatures />
      <Milestones />
      <FeaturedActivities />
      <ProjectShowcase />
      <Partners />
      <ValueFuture />
      <Contact />
    </div>
  );
} 