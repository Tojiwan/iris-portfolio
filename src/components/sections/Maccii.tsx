import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import WorkGallery from "@/components/ui/WorkGallery";
import ProjectLink from "@/components/ui/ProjectLink";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

const accents = ["#1e5923", "#1b1a55", "#8d8400"];

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
    src: "/images/MACCII/MACCII-left-1.PNG",
    alt: "MACCII mobile news page showing ABACAN Project Cleanup article",
    type: "mobile" as const,
  },
  {
    src: "/images/MACCII/MACCII-left-2.PNG",
    alt: "MACCII mobile explore and contact menu on deep green",
    type: "mobile" as const,
  },
  {
    src: "/images/MACCII/MACCII-right-top.png",
    alt: "MACCII desktop hero with chamber group photo and Join MACCII button",
    type: "desktop" as const,
  },
  {
    src: "/images/MACCII/MACCII-right-b.png.png",
    alt: "MACCII desktop trusted partners and footer sections",
    type: "desktop" as const,
  },
];

export default function Maccii() {
  const link = projects.uiDesign.find((p) => p.title === "MACCII")?.link ?? "#";
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
        <div className="flex flex-col items-start md:items-end md:mb-10">
          <Reveal>
            <SectionLabel>1st Phase</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-2 font-le-jour text-[24.4px] text-navy">
              UI Design
            </h2>
          </Reveal>
        </div>
        <h3 className="sr-only">MACCII UI design showcase</h3>
        <WorkGallery images={images} variant="maccii" />
        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center md:justify-end">
            <ProjectLink
              title="Check 'MACCII' link here."
              href={link}
              accent="#1e5923"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
