import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import PostersGrid from "@/components/sections/PostersGrid";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

const posters = [
  { src: "/images/posters/1.png", alt: "Food and beverage poster design 1" },
  { src: "/images/posters/2.png", alt: "Food and beverage poster design 2" },
  { src: "/images/posters/3.png", alt: "Food and beverage poster design 3" },
  { src: "/images/posters/4.JPG", alt: "Food and beverage poster design 4" },
];

export default function PostersPatterns() {
  return (
    <Section className="bg-lavender">
      <Container>
        <div className="md:text-right">
          <Reveal>
            <SectionLabel>3rd Phase</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-2 font-le-jour text-[24.4px] uppercase text-navy">
              Posters &amp; Patterns
            </h2>
          </Reveal>
        </div>

        <PostersGrid posters={posters} />

        <div className="mt-10 flex items-center gap-4">
          <p className="shrink-0 font-montserrat text-[11px] tracking-wide text-accent-purple">
            Iris Quiambao | Portfolio &lsquo;26
          </p>
          <div aria-hidden="true" className="h-px flex-1 bg-accent-purple/60" />
        </div>
      </Container>
    </Section>
  );
}
