import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import PhilosophySection from "@/components/portfolio/PhilosophySection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import CaseStudiesSection from "@/components/portfolio/CaseStudiesSection";
import ProjectSummarySection from "@/components/portfolio/ProjectSummarySection";
import ImpactSection from "@/components/portfolio/ImpactSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <SkillsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <ProjectSummarySection />
        <ImpactSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
