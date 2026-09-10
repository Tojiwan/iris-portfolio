import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export default function PhaseDivider({
  title,
  phase,
  variant = "navy",
}: {
  title: string;
  phase: string;
  variant?: "navy" | "purple" | "deep";
}) {
  const bg =
    variant === "purple"
      ? "bg-muted-purple/90"
      : variant === "deep"
        ? "bg-navy"
        : "bg-navy/90";

  const text = variant === "navy" ? "text-lavender" : "text-white";

  return (
    <section className={cn("relative w-full", bg)}>
      <Container className="py-20 text-center md:py-28">
        <Reveal>
          <h2 className={cn("font-phase uppercase", text)}>{title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 font-montserrat text-[10.8px] uppercase tracking-[0.22em]",
              text
            )}
          >
            {phase}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
