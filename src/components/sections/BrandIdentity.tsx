import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function BrandIdentity() {
  return (
    <Section className="bg-white pb-0!">
      <Container>
        <Reveal>
          <SectionLabel>2nd Phase</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-2 font-le-jour text-[24.4px] text-navy">
            Brand Identity
          </h2>
        </Reveal>
      </Container>
    </Section>
  );
}
