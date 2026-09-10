import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectImage from "@/components/ui/ProjectImage";
import Reveal from "@/components/ui/Reveal";

export default function Patterns() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <ProjectImage
                src="/images/patterns/placeholder.svg"
                alt="Kapampangan heritage pattern grid placeholder"
              />
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <h3 className="font-montserrat text-[14px] font-semibold uppercase tracking-[0.16em] text-accent-purple">
                Patterns
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-4 max-w-2xl space-y-4 font-montserrat text-[11.4px] leading-relaxed text-black">
                <p>
                  This pattern project was created as a visual representation to
                  educate and raise awareness about Kapampangan heritage,
                  highlighting Pampanga&apos;s rich culture, history, and
                  identity through design.
                </p>
                <p>
                  Using a structured, grid-based layout with repeating elements,
                  the patterns feature symbolic illustrations inspired by local
                  landmarks, traditions, folklore, and everyday life, allowing
                  each tile to convey cultural meaning while contributing to a
                  cohesive whole.
                </p>
                <p>
                  Through bold colors, thoughtful repetition, and intentional
                  composition, the project transforms cultural symbols into a
                  modern visual language that helps audiences better understand
                  and appreciate Kapampangan heritage in a contemporary and
                  engaging way.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <p className="mt-10 font-montserrat text-[11px] tracking-wide text-accent-purple">
          Iris Quiambao | Portfolio &lsquo;26
        </p>
      </Container>
    </Section>
  );
}
