import { useNavigate } from "react-router";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const initials = profile.firstName.charAt(0) + profile.name.split(" ").pop()?.charAt(0);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-3xl" />

      <Container className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Hello, I'm
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl">
            {profile.name}
            <span className="text-violet-400">.</span>
          </h1>
          <h2 className="mt-2 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text font-display text-2xl font-semibold text-transparent sm:text-3xl">
            {profile.role}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge>{profile.location}</Badge>
            <Badge className="border-emerald-500/40 text-emerald-400">
              ● {profile.availability}
            </Badge>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button onClick={() => navigate("/projects")}>View My Work</Button>
            <Button variant="secondary" onClick={() => navigate("/contact")}>
              Get In Touch
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-400 transition-colors hover:text-violet-400"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-edge bg-panel/60 p-4 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-edge px-2 py-2.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-6 p-8">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-display text-3xl font-bold text-white shadow-lg shadow-fuchsia-900/40">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-lg font-semibold text-white">
                  {profile.name}
                </p>
                <p className="text-sm text-slate-400">{profile.role}</p>
              </div>
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-edge bg-night p-4 text-xs leading-relaxed text-slate-300">
              <code>
                <span className="text-violet-400">const</span> developer = {"{"}
                {"\n"}
                {"  "}name: <span className="text-emerald-400">"{profile.firstName}"</span>,{"\n"}
                {"  "}role: <span className="text-emerald-400">"{profile.role}"</span>,{"\n"}
                {"  "}stack: [<span className="text-fuchsia-400">"React"</span>,{" "}
                <span className="text-fuchsia-400">"TS"</span>,{" "}
                <span className="text-fuchsia-400">"Tailwind"</span>],{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
};