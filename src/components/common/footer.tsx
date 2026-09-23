import { Link } from "react-router";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-edge bg-panel/40">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-violet-400"
            >
              {social.label}
            </a>
          ))}
        </div>

        <nav className="flex items-center gap-4 text-sm text-slate-400">
          <Link to="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link to="/projects" className="transition-colors hover:text-white">
            Projects
          </Link>
        </nav>
      </Container>
    </footer>
  );
};