import { Link } from "react-router";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/features/project-card";
import { projects, getFeaturedProjects } from "@/data/projects";

interface ProjectsSectionProps {
  featured?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  featured = false,
}) => {
  const items = featured ? getFeaturedProjects() : projects;

  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title={featured ? "Featured Projects" : "All Projects"}
            subtitle={
              featured
                ? "A selection of the projects I'm most proud of."
                : "Everything I've built so far — from school requirements to personal experiments."
            }
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {featured && (
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
            >
              View all projects
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};