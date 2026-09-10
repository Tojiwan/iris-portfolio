import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";

export default function Quote() {
  return (
    <Section className="bg-navy">
      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-le-jour text-[26px] leading-relaxed text-white">
            With passion and dedication towards your work...
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto max-w-2xl font-montserrat text-[10.8px] uppercase leading-relaxed tracking-[0.14em] text-white/90">
            the impossible turns into possible, the hard into achievable, and
            the unbearable into manageable.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
