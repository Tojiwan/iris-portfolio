import Image from "next/image";
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

// Real tool logos — order matters, keep `data-tool` key for future swaps.
const photoTools = [
  { src: "/images/Photo-Editing-Skills/figma.png", alt: "Figma logo", key: "photo-figma" },
  { src: "/images/Photo-Editing-Skills/canva.png", alt: "Canva logo", key: "photo-canva" },
  { src: "/images/Photo-Editing-Skills/Photoshop.png", alt: "Photoshop logo", key: "photo-photoshop" },
  { src: "/images/Photo-Editing-Skills/lightroom.png", alt: "Lightroom logo", key: "photo-lightroom" },
  { src: "/images/Photo-Editing-Skills/wordpress.png", alt: "WordPress logo", key: "photo-wordpress" },
];

const videoTools = [
  { src: "/images/Video-Editing-Skills/capcut.png", alt: "CapCut logo", key: "video-capcut" },
  { src: "/images/Video-Editing-Skills/adobe-premiere.png", alt: "Premiere Pro logo", key: "video-premiere" },
  { src: "/images/Video-Editing-Skills/davinci-resolve.png", alt: "DaVinci Resolve logo", key: "video-davinci" },
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
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {photoTools.map(({ src, alt, key }) => (
                <Image
                  key={key}
                  data-tool={key}
                  src={src}
                  alt={alt}
                  title={alt}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              ))}
            </div>
            <p className="mt-5 font-montserrat text-[12px] text-navy">
              Video Editing Tools:
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {videoTools.map(({ src, alt, key }) => (
                <Image
                  key={key}
                  data-tool={key}
                  src={src}
                  alt={alt}
                  title={alt}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
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
