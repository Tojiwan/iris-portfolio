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
    src: "/images/Chef-Vince/chefvince-left.PNG",
    alt: "Chef Vince Rainforest Kitchen mobile menu screen",
    type: "mobile" as const,
  },
  {
    src: "/images/Chef-Vince/chefvince-middle-top.png",
    alt: "Chef Vince desktop strip with restaurant interiors and brand logos",
    type: "desktop" as const,
  },
  {
    src: "/images/Chef-Vince/chefvince-middle-bottom.png",
    alt: "Chef Vince desktop hero dish with book now button",
    type: "desktop" as const,
  },
  {
    src: "/images/Chef-Vince/chefvince-right.PNG",
    alt: "Chef Vince mobile contact screen on deep green with leaf logo",
    type: "mobile" as const,
  },
];

export default function ChefVince() {
  const link =
    projects.uiDesign.find((p) => p.title === "CHEF VINCE GARCIA")?.link ?? "#";
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
        <h3 className="sr-only">Chef Vince Garcia UI design showcase</h3>
        <WorkGallery images={images} variant="chef" />
        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <ProjectLink
              title="Check 'CHEF VINCE GARCIA' link here."
              href={link}
              accent="#8d8400"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mx-auto my-10 md:my-[120px] max-w-3xl text-center">
            <p className="font-montserrat text-[12px] leading-relaxed text-black md:text-[14px]">
              The UI designs showcased here represent just a portion of the
              projects I&rsquo;ve worked on throughout my journey as an intern
              and trainee. I&rsquo;ve had hands-on experience contributing to
              real-world products and was one of the people behind the UI
              designs for{" "}
              <strong className="font-bold">
                Chef Vince Garcia, Metro Angeles Chamber of Commerce and
                Industry, Inc. (MACCII), and Superaire Airconditioning
              </strong>
              , among others.
            </p>
            <p className="mt-4 font-montserrat text-[12px] leading-relaxed text-black md:text-[14px]">
              Each project reflects my growth as a designer, my ability to
              adapt to different brand needs, and my focus on creating clean,
              user-friendly, and visually engaging interfaces.
            </p>
          </div>
        </Reveal>
          <div className="mt-10 flex items-center gap-4">
          <p className="shrink-0 font-montserrat text-[11px] tracking-wide text-black">
            Iris Quiambao | Portfolio &lsquo;26
          </p>
          <div aria-hidden="true" className="h-px flex-1 bg-black" />
        </div>
      </Container>
    </Section>
  );
}
