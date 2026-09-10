import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";

const expertise = [
  "Web Designing",
  "Photo & Video Editing",
  "Graphic Designing",
  "UI/UX Design Basics",
  "Multimedia",
  "Creative Content Creation",
  "UI Design",
];

const education = [
  {
    period: "2021–2025",
    school: "Pampanga State University",
    location: "Bacolor, Pampanga",
    degree: "Bachelor of Science in Information Technology",
  },
  {
    period: "2019–2020",
    school: "Pulung Santol National High School",
    location: "Pulung Santol, Porac, Pampanga",
    degree: "Humanities and Social Sciences",
  },
];

const experience = [
  {
    period: "DEC 2025 – JAN 2026",
    company: "Freelancing",
    location: "Home-based",
    role: "Non-voice Customer Support",
  },
  {
    period: "FEB – DEC 2025",
    company: "Tigernethost OPC",
    location: "San Roque, Guagua, Pampanga",
    role: "UI/Web Designer, Content Creation & Video Editing",
  },
];

export default function BackgroundSkills() {
  return (
    <Section id="background" className="bg-lavender">
      <Container>
        <Reveal>
          <h2 className="font-le-jour text-[35px] leading-tight text-navy">
            Background &amp; Skills
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h3 className="font-montserrat text-[13px] font-semibold uppercase tracking-[0.16em] text-black">
              Core Expertise
            </h3>
            <ul className="mt-4 space-y-2">
              {expertise.map((skill) => (
                <li
                  key={skill}
                  className="font-montserrat text-[12px] text-black"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-montserrat text-[13px] font-semibold uppercase tracking-[0.16em] text-black">
              Proficient In
            </h3>
            <p className="mt-3 font-montserrat text-[11px] text-black/70">
              Figma · Photoshop · Illustrator · Premiere · Canva · Webflow
            </p>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-4">
            <h3 className="font-montserrat text-[13px] font-semibold uppercase tracking-[0.16em] text-black">
              Educational Background
            </h3>
            <div className="mt-4 space-y-6">
              {education.map((e) => (
                <article key={e.period}>
                  <p className="font-montserrat text-[11px] font-semibold tracking-wide text-navy">
                    {e.period}
                  </p>
                  <p className="mt-1 font-montserrat text-[12px] font-semibold text-black">
                    {e.school}
                  </p>
                  <p className="font-montserrat text-[11px] text-black/70">
                    {e.location}
                  </p>
                  <p className="mt-1 font-montserrat text-[11px] text-black">
                    {e.degree}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="md:col-span-4">
            <h3 className="font-montserrat text-[13px] font-semibold uppercase tracking-[0.16em] text-black">
              Work Experience
            </h3>
            <div className="mt-4 space-y-6">
              {experience.map((w) => (
                <article key={w.period}>
                  <p className="font-montserrat text-[11px] font-semibold tracking-wide text-navy">
                    {w.period}
                  </p>
                  <p className="mt-1 font-montserrat text-[12px] font-semibold text-black">
                    {w.company}
                  </p>
                  <p className="font-montserrat text-[11px] text-black/70">
                    {w.location}
                  </p>
                  <p className="mt-1 font-montserrat text-[11px] text-black">
                    {w.role}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
