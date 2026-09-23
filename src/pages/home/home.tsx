import { HeroSection } from "@/components/features/hero-section";
import { AboutSection } from "@/components/features/about-section";
import { SkillsSection } from "@/components/features/skills-section";
import { ProjectsSection } from "@/components/features/projects-section";
import { ContactSection } from "@/components/features/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection featured />
      <ContactSection compact />
    </>
  );
}