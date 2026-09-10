import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export default function PhaseDivider({
  title,
  phase,
  variant = "navy",
  bgImage,
  bgImageMobile,
}: {
  title: string;
  phase: string;
  variant?: "navy" | "purple" | "deep";
  bgImage?: string;
  bgImageMobile?: string;
}) {
  const bg =
    variant === "purple"
      ? "bg-muted-purple/90"
      : variant === "deep"
        ? "bg-navy"
        : "bg-navy/90";

  const text = variant === "navy" ? "text-lavender" : "text-white";

  const overlay =
    variant === "purple" ? "bg-muted-purple/90" : "bg-navy/90";

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        bg,
        bgImage && "flex min-h-screen items-center justify-center"
      )}
    >
      {bgImage ? (
        <>
          {bgImageMobile ? (
            <div aria-hidden="true" className="absolute inset-0 md:hidden">
              <Image
                src={bgImageMobile}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div
            aria-hidden="true"
            className={cn("absolute inset-0", bgImageMobile && "hidden md:block")}
          >
            <Image
              src={bgImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div aria-hidden="true" className={cn("absolute inset-0", overlay)} />
        </>
      ) : null}
      <Container className="relative z-10 py-20 text-center md:py-28">
        <Reveal>
          <h1 className={cn("font-phase uppercase", text)}>{title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-[4.25] font-montserrat text-[10.8px] uppercase tracking-[0.22em]",
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
