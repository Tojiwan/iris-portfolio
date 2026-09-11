import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectImage from "@/components/ui/ProjectImage";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <Section id="about" className="bg-white">
      <Container className="grid gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-lora text-[18px] md:text-[30px] text-black">Hey, there!</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-[4.25] font-tan-nimbus text-[25px] md:text-[40px] leading-tight">
              <span className="text-deep-navy">A little </span>
              <span className="text-muted-purple">walkthrough </span>
              <span className="text-deep-navy">about me</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-[4.25] max-w-xl space-y-4 font-montserrat text-[12px] md:text-[14px] leading-relaxed text-black text-justify">
              <p>
                I&apos;m Iris, a 22-year-old designer who brings ideas to life
                through thoughtful, refined visuals. I focus on creating designs
                that are clean, modern, and intentional which allows me to build
                designs that feel both elegant and visually striking.
              </p>
              <p>
                Over the years, I&apos;ve designed multiple websites across
                different industries, including restaurants, service-based
                businesses, and product brands. I also create social media
                banners, posts, and various digital assets, giving brands a
                cohesive and professional visual presence.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <ProjectImage
              src="/images/about/vspsGRAD3-0494.jpg"
              alt="Iris Quiambao holding a vintage film camera"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
