import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import WorkGallery from "@/components/ui/WorkGallery";
import ProjectLink from "@/components/ui/ProjectLink";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

const dotStyle = {
  backgroundImage:
    "radial-gradient(color-mix(in srgb, var(--navy) 14%, transparent) 1.2px, transparent 1.2px)",
  backgroundSize: "12px 12px",
} as const;

const diamondStyle = {
  backgroundImage:
    "linear-gradient(45deg, color-mix(in srgb, var(--navy) 5%, transparent) 1px, transparent 1px), linear-gradient(-45deg, color-mix(in srgb, var(--navy) 5%, transparent) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
} as const;

const images = [
  {
    src: "/images/Super-Aire/super-aire-top.png",
    alt: "Super-Aire desktop services section with estimate and management cards",
    type: "desktop" as const,
  },
  {
    src: "/images/Super-Aire/super-aire-bottom.png",
    alt: "Super-Aire desktop brand partners and navy footer",
    type: "desktop" as const,
  },
  {
    src: "/images/Super-Aire/super-aire-right-1.PNG",
    alt: "Super-Aire mobile experience and expertise guarantee screen",
    type: "mobile" as const,
  },
  {
    src: "/images/Super-Aire/super-aire-right-2.PNG",
    alt: "Super-Aire mobile air conditioning product distribution screen",
    type: "mobile" as const,
  },
];

export default function SuperAire() {
  const link =
    projects.uiDesign.find((p) => p.title === "SUPER-AIRE")?.link ?? "#";
  return (
    <Section className="overflow-hidden bg-lavender">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={diamondStyle}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-40 w-56 opacity-60"
        style={dotStyle}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-40 w-56 opacity-60"
        style={dotStyle}
      />
      <Container className="relative">
        <h3 className="sr-only">Super-Aire UI design showcase</h3>
        <WorkGallery images={images} variant="super" />
        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-start">
            <ProjectLink
              title="Check 'SUPER-AIRE' link here."
              href={link}
              accent="#1b1a55"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
