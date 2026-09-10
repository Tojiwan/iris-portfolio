import {
  Aperture,
  Brush,
  Camera,
  Clapperboard,
  Film,
  Layers,
  Palette,
  Scissors,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";

const education = [
  {
    period: "2021 – 2025",
    school: "Pampanga State University",
    degree: "Bachelor of Science in Information Technology",
    location: "Bacolor, Pampanga",
  },
  {
    period: "2019 – 2020",
    school: "Pulung Santol National High School",
    degree: "Humanities and Social Sciences",
    location: "Pulung Santol Porac, Pampanga",
  },
];

const experience = [
  {
    period: "DEC 2025 - JAN 2026",
    company: "Freelancing",
    role: "Non-voice Customer Support",
    location: "Home-based",
  },
  {
    period: "FEB - DEC 2025",
    company: "Tigernethost OPC",
    role: "UI/Web Designer, Content Creation & Video Editing",
    location: "San Roque, Guagua, Pampanga",
  },
];

// Placeholder tool icons — swap with real brand SVGs later.
// Keep the `data-tool` key so replacements slot in 1:1.
const photoTools = [
  { icon: Camera, key: "photo-1" },
  { icon: Aperture, key: "photo-2" },
  { icon: Palette, key: "photo-3" },
  { icon: Layers, key: "photo-4" },
  { icon: Brush, key: "photo-5" },
];

const videoTools = [
  { icon: Clapperboard, key: "video-1" },
  { icon: Film, key: "video-2" },
  { icon: Scissors, key: "video-3" },
];

const skillsBox = [
  "Graphic Designing",
  "UI/UX Design Basics",
  "Web Designing",
  "Multimedia",
  "Photo & Video Editing",
  "Creative Content Creation",
];

const dotStyle = {
  backgroundImage:
    "radial-gradient(color-mix(in srgb, var(--navy) 22%, transparent) 1.2px, transparent 1.2px)",
  backgroundSize: "10px 10px",
} as const;

export default function BackgroundSkills() {
  return (
    <Section id="background" className="overflow-hidden bg-lavender">
      {/* dotted corners like reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-48 w-64 opacity-70"
        style={dotStyle}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-72 opacity-70"
        style={dotStyle}
      />

      <Container className="relative">
        <Reveal>
          <p className="font-montserrat text-[13px] font-bold uppercase tracking-[0.12em] text-navy">
            Core Expertise
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-1 font-le-jour text-[35px] uppercase leading-tight text-navy md:text-[48px]">
            Background &amp; Skills
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="font-montserrat text-[13px] uppercase tracking-[0.16em] text-navy">
              Educational Background
            </h3>
            <div className="mt-6 space-y-8">
              {education.map((e) => (
                <article
                  key={e.period}
                  className="grid gap-1 text-left md:grid-cols-[110px_1fr] md:gap-4"
                >
                  <p className="text-left font-montserrat text-[12px] font-bold text-navy">
                    {e.period}
                  </p>
                  <div className="text-left">
                    <p className="font-montserrat text-[12px] text-navy">
                      {e.school}
                    </p>
                    <p className="font-montserrat text-[12px] text-navy">
                      {e.degree}
                    </p>
                    <p className="md:mt-2 font-montserrat text-[12px] text-navy/80">
                      {e.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="font-montserrat text-[13px] uppercase tracking-[0.16em] text-navy">
              Work Experience
            </h3>
            <div className="mt-6 space-y-8">
              {experience.map((w) => (
                <article
                  key={w.period}
                  className="grid gap-1 text-left md:grid-cols-[130px_1fr] md:gap-4"
                >
                  <p className="text-left font-montserrat text-[12px] font-bold text-navy">
                    {w.period}
                  </p>
                  <div className="text-left">
                    <p className="font-montserrat text-[12px] text-navy">
                      {w.company}
                    </p>
                    <p className="font-montserrat text-[12px] text-navy">
                      {w.role}
                    </p>
                    <p className="md:mt-2 font-montserrat text-[12px] text-navy/80">
                      {w.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="font-montserrat text-[13px] uppercase tracking-[0.16em] text-navy">
              Proficent In
            </h3>
            <p className="mt-4 font-montserrat text-[12px] text-navy">
              Photo Editing Tools:
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {photoTools.map(({ icon: Icon, key }) => (
                <span
                  key={key}
                  data-tool={key}
                  title="Replace with real tool icon"
                  aria-label="Editing tool placeholder"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/40 text-navy"
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>
              ))}
            </div>
            <p className="mt-5 font-montserrat text-[12px] text-navy">
              Video Editing Tools:
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {videoTools.map(({ icon: Icon, key }) => (
                <span
                  key={key}
                  data-tool={key}
                  title="Replace with real tool icon"
                  aria-label="Editing tool placeholder"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/40 text-navy"
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="font-montserrat text-[13px] uppercase tracking-[0.16em] text-navy">
              Skills
            </h3>
            <div className="mt-4 flex overflow-hidden">
              <div aria-hidden="true" className="w-10 shrink-0 bg-navy md:w-14" />
              <ul className="grid flex-1 grid-cols-1 gap-x-6 gap-y-3 bg-deep-navy p-6 sm:grid-cols-2">
                {skillsBox.map((skill) => (
                  <li
                    key={skill}
                    className="font-montserrat text-[12px] font-semibold text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
