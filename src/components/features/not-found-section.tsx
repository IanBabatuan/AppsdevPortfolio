import { useNavigate } from "react-router";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const NotFoundSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="text-center">
        <p className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text font-display text-8xl font-bold text-transparent">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-white">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          The page you're looking for doesn't exist, was moved, or is still
          under construction.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => navigate("/")}>Back to Home</Button>
          <Button variant="secondary" onClick={() => navigate("/about")}>
            About Me
          </Button>
        </div>
      </Container>
    </section>
  );
};