import { useState } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/projects", label: "Projects", end: false },
  { to: "/contact", label: "Contact", end: false },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-night/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="font-display text-lg font-bold text-white"
        >
          {profile.firstName}
          <span className="text-violet-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-violet-400"
                    : "text-slate-400 hover:text-white",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={profile.email ? `mailto:${profile.email}` : "#"}
            className="rounded-xl border border-edge bg-panel px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-violet-500/50"
          >
            Hire Me
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-slate-300 md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-edge bg-night px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-violet-400"
                      : "text-slate-400 hover:text-white",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={profile.email ? `mailto:${profile.email}` : "#"}
              onClick={handleLinkClick}
              className="rounded-xl border border-edge bg-panel px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};