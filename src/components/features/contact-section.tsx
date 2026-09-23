import { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Field, Input, TextArea } from "@/components/ui/field";
import { profile } from "@/data/profile";

interface ContactSectionProps {
  compact?: boolean;
}

const contactInfo = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Location", value: profile.location, href: undefined },
  { label: "Status", value: profile.availability, href: undefined },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  compact = false,
}) => {
  const navigate = useNavigate();

  if (compact) {
    return (
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl border border-edge bg-gradient-to-br from-violet-600/15 via-panel to-fuchsia-600/10 p-10 text-center sm:p-14">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
              I'm always open to collaborations, internships, and new
              opportunities. Let's talk about what we can build together.
            </p>
            <div className="mt-8">
              <Button onClick={() => navigate("/contact")}>Contact Me</Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something together"
              subtitle="Fill out the form or reach me directly through email or social media. I usually reply within a day."
            />

            <div className="mt-8 flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-edge bg-panel p-5"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block break-all text-sm font-semibold text-white transition-colors hover:text-violet-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
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

          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `mailto:${profile.email}?subject=Portfolio message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl text-emerald-400">
          ✓
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-white">
          Message ready!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate-400">
          Your email app should have opened with a draft addressed to me. Thanks
          for reaching out!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-edge bg-panel p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name" htmlFor="contact-name">
          <Input
            id="contact-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Juan Dela Cruz"
            required
          />
        </Field>
        <Field label="Your Email" htmlFor="contact-email">
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="juan@example.com"
            required
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" htmlFor="contact-message">
          <TextArea
            id="contact-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell me about your project or opportunity..."
            required
          />
        </Field>
      </div>
      <Button type="submit" className="mt-7 w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
};