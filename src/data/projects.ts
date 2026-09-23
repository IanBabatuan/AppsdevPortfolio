export interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
  repo: string;
  demo: string;
  featured?: boolean;
}

// Edit this file to showcase your real projects.
export const projects: Project[] = [
  {
    title: "PatchMeUp",
    description:
      "A tire repair shop management system with customer and admin portals, service logs, and an Express + Laravel API backend.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Express", "Laravel"],
    year: "2025",
    repo: "https://github.com/yourusername",
    demo: "https://your-vercel-link.vercel.app",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio itself! A multi-page personal site built with React Router, reusable components, and a mobile-first layout.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    year: "2026",
    repo: "https://github.com/yourusername",
    demo: "https://your-vercel-link.vercel.app",
    featured: true,
  },
  {
    title: "Task Manager App",
    description:
      "A simple CRUD task tracker with local storage persistence, search, filters, and a clean kanban-style layout.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    year: "2025",
    repo: "https://github.com/yourusername",
    demo: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather app that fetches live data from a public API and shows a 5-day forecast with theme switching.",
    tech: ["React", "JavaScript", "REST API", "CSS"],
    year: "2025",
    repo: "https://github.com/yourusername",
    demo: "#",
  },
  {
    title: "E-Commerce Store UI",
    description:
      "A responsive storefront prototype with product grids, cart state, and a checkout flow built in React.",
    tech: ["React", "Tailwind CSS", "Context API"],
    year: "2024",
    repo: "https://github.com/yourusername",
    demo: "#",
  },
  {
    title: "Blog API",
    description:
      "A REST API for a simple blog with authentication, posts, comments, and validation using Express and MySQL.",
    tech: ["Node.js", "Express", "MySQL", "JWT"],
    year: "2024",
    repo: "https://github.com/yourusername",
    demo: "#",
  },
];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((project) => project.featured);

export const getProjectCount = (): number => projects.length;