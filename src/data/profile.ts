export interface Skill {
  name: string;
  level: number;
}

export interface SocialLink {
  label: string;
  href: string;
}

// Edit this file to put your real information in the portfolio.
export const profile = {
  name: "Ian Babatuan",
  firstName: "CpcGangsta",
  role: "Web Developer",
  location: "Cebu City, Philippines",
  email: "you@example.com",
  availability: "Available for internship / freelance work",
  tagline:
    "I craft clean, responsive, and user-friendly web experiences using React, TypeScript, and Tailwind CSS.",
  bio: [
    "Aspiring web developer currently studying Information Technology. I enjoy turning ideas into working applications and learning modern front-end tooling along the way.",
    "Most of my projects start in a notebook: a quick sketch, a messy diagram, then a component tree. I care about readable code, consistent design, and shipping small features that actually work.",
    "When I am not coding, I am probably exploring UI trends, playing with CSS, or working on my next school project.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yourusername" },
    { label: "Email", href: "mailto:you@example.com" },
  ] satisfies SocialLink[],
  skills: [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js / Express", level: 70 },
  ] satisfies Skill[],
  tools: ["Git", "GitHub", "Vite", "Figma", "Postman", "MySQL", "Vercel"],
};