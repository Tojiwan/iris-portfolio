import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectImage from "@/components/ui/ProjectImage";
import Reveal from "@/components/ui/Reveal";

export default function Patterns() {
  return (
    <Section className="bg-white">
      <Container>
          <Reveal>
            <div className="flex items-center gap-4 md:gap-55 pb-4 md:pb-10">
              <h3 className="shrink-0 font-montserrat text-[18px] font-semibold normal-case tracking-normal text-accent-purple">
                Patterns
              </h3>
              <div aria-hidden="true" className="h-px flex-1 bg-accent-purple/50" />
            </div>
          </Reveal>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <ProjectImage
                src="/images/patterns/Patterns-Img-Left.png"
                alt="Kapampangan heritage pattern grid with Ferris wheel, church, pottery, fish and festival symbols"
                className="bg-white shadow-[-25px_30px_40px_-30px_rgba(0,0,0,0.6)] md:shadow-[-50px_45px_70px_-24px_rgba(0,0,0,0.5)]"
              />
            </Reveal>
          </div>
          <div className="md:col-span-8 flex items-center">
            <Reveal delay={0.08}>
              <div className="max-w-2xl space-y-4 font-montserrat text-[14px] leading-relaxed text-black text-justify">
                <p>
                  This pattern project was created as a visual representation to
                  educate and raise awareness about Kapampangan heritage,
                  highlighting Pampanga&apos;s rich culture, history, and
                  identity through design. Using a structured, grid-based layout with repeating elements,nthe patterns feature symbolic illustrations inspired by local landmarks, traditions, folklore, and everyday life, allowing each tile to convey cultural meaning while contributing to a cohesive whole.
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
        <div className="mt-4 md:mt-10 flex items-center gap-4">
          <div aria-hidden="true" className="h-px flex-1 bg-accent-purple/60" />
          <p className="shrink-0 font-montserrat text-[11px] tracking-wide text-accent-purple md:text-right">
            Iris Quiambao | Portfolio &lsquo;26
          </p>
        </div>
      </Container>
    </Section>
  );
}
