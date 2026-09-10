import Container from "@/components/layout/Container";
import ProjectImage from "@/components/ui/ProjectImage";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative w-full bg-lavender/60">
      <Container className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5 md:pt-10">
          <Reveal>
            <p className="font-montserrat text-[19.2px] leading-snug text-black">
              Explore my
              <br />
              of crafted works.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <ProjectImage
              src="/images/hero/placeholder.svg"
              alt="Editorial hero portrait placeholder for Iris Quiambao"
              priority
            />
          </Reveal>
        </div>
        <div className="md:col-span-12 md:-mt-16">
          <Reveal delay={0.15}>
            <h1 className="font-hero text-navy">Portfolio</h1>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
