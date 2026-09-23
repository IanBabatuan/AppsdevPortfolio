import { useNavigate } from "react-router";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

interface AboutSectionProps {
  detailed?: boolean;
}

const quickFacts = [
  { label: "Role", value: profile.role },
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email },
  { label: "Status", value: profile.availability },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ detailed = false }) => {
  const navigate = useNavigate();
  const paragraphs = detailed ? profile.bio : profile.bio.slice(0, 1);

  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex aspect-square items-center justify-center rounded-3xl border border-edge bg-gradient-to-br from-panel to-edge/40">
              <span className="font-display text-7xl font-bold text-white">
                {profile.firstName.charAt(0)}
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-edge bg-panel p-4"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {fact.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-white">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="About Me"
              title="A little bit about me and what I do"
            />

            <div className="mt-6 flex flex-col gap-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="leading-relaxed text-slate-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <Button
                variant={detailed ? "secondary" : "primary"}
                onClick={() => navigate(detailed ? "/projects" : "/about")}
              >
                {detailed ? "See My Projects" : "Learn More About Me"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};