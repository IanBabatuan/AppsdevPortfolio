import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group flex flex-col gap-4 rounded-3xl border border-edge bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-950/30">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-lg text-violet-400">
          {project.title.charAt(0)}
        </div>
        <span className="rounded-full border border-edge bg-night px-3 py-1 text-xs font-medium text-slate-500">
          {project.year}
        </span>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-violet-300">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-5 border-t border-edge pt-4 text-sm font-medium">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 transition-colors hover:text-violet-400"
        >
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 transition-colors hover:text-violet-400"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};