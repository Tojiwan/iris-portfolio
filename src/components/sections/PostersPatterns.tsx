import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectImage from "@/components/ui/ProjectImage";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

const posters = [
  { alt: "Food and beverage poster design placeholder 1" },
  { alt: "Food and beverage poster design placeholder 2" },
  { alt: "Food and beverage poster design placeholder 3" },
  { alt: "Food and beverage poster design placeholder 4" },
];

export default function PostersPatterns() {
  return (
    <Section className="bg-lavender">
      <Container>
        <Reveal>
          <SectionLabel>3rd Phase</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-2 font-le-jour text-[24.4px] uppercase text-navy">
            Posters &amp; Patterns
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {posters.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <ProjectImage
                src="/images/posters/placeholder.svg"
                alt={p.alt}
              />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-montserrat text-[11px] tracking-wide text-accent-purple">
          Iris Quiambao | Portfolio &lsquo;26
        </p>
      </Container>
    </Section>
  );
}
