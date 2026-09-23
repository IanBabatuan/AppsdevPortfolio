import { AboutSection } from "@/components/features/about-section";
import { SkillsSection } from "@/components/features/skills-section";
import { ProjectsSection } from "@/components/features/projects-section";
import { ContactSection } from "@/components/features/contact-section";

export default function AboutPage() {
  return (
    <>
      <AboutSection detailed />
      <SkillsSection />
      <ProjectsSection featured />
      <ContactSection compact />
    </>
  );
}