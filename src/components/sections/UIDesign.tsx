import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectLink from "@/components/ui/ProjectLink";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

const accents = ["#1e5923", "#1b1a55", "#8d8400"];

export default function UIDesign() {
  return (
    <Section id="work" className="bg-lavender">
      <Container>
        <Reveal>
          <SectionLabel>1st Phase</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-2 font-le-jour text-[24.4px] text-navy">
            UI Design
          </h2>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {projects.uiDesign.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <ProjectLink
                title={p.title}
                href={p.link ?? "#"}
                accent={accents[i % accents.length]}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl space-y-4 font-montserrat text-[11.8px] leading-relaxed text-black">
            <p>
              The UI designs showcased here represent just a portion of the
              projects I&apos;ve worked on throughout my journey as an intern
              and trainee. I&apos;ve had hands-on experience contributing to
              real-world products and was one of the people behind the UI
              designs for Chef Vince Garcia, Metro Angeles Chamber of Commerce
              and Industry, Inc. (MACCII), and Superaire Airconditioning, among
              others.
            </p>
            <p>
              Each project reflects my growth as a designer, my ability to adapt
              to different brand needs, and my focus on creating clean,
              user-friendly, and visually engaging interfaces.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
