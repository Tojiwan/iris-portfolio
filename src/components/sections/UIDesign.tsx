import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectImage from "@/components/ui/ProjectImage";
import ProjectLink from "@/components/ui/ProjectLink";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

const accents = ["#8d8400", "#1b1a55", "#1e5923"];

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

        {/* Editorial showcase — asymmetric, not uniform cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <ProjectImage
              src="/images/ui-design/chef-vince/placeholder.svg"
              alt="Chef Vince Garcia restaurant website UI mockup placeholder"
            />
            <p className="mt-2 font-montserrat text-[11px] text-black/60">
              Chef Vince Garcia — website UI
            </p>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5 md:mt-10">
            <ProjectImage
              src="/images/ui-design/superaire/placeholder.svg"
              alt="Superaire Airconditioning website UI placeholder"
            />
            <p className="mt-2 font-montserrat text-[11px] text-black/60">
              Super-Aire — service website UI
            </p>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-3">
            <ProjectImage
              src="/images/ui-design/maccii/placeholder.svg"
              alt="MACCII chamber website mobile UI placeholder"
            />
            <p className="mt-2 font-montserrat text-[11px] text-black/60">
              MACCII — chamber website UI
            </p>
          </Reveal>
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

        <p className="mt-10 font-montserrat text-[11px] tracking-wide text-black">
          Iris Quiambao | Portfolio &lsquo;26
        </p>
      </Container>
    </Section>
  );
}
