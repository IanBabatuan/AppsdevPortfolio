import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="border-y border-edge bg-panel/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I use every day"
          subtitle="A mix of tools I've picked up in school, side projects, and personal study."
          align="center"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-edge bg-panel p-8">
            <h3 className="font-display text-lg font-semibold text-white">
              Core Skills
            </h3>
            <div className="mt-6 flex flex-col gap-5">
              {profile.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-300">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-night">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-edge bg-panel p-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Tools & Workflow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                I like keeping a simple, repeatable workflow: design the layout,
                split it into components, style with Tailwind, and ship it with
                Vite.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {profile.tools.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};