import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectImage from "@/components/ui/ProjectImage";
import Reveal from "@/components/ui/Reveal";

export default function Techvance() {
  return (
    <Section className="bg-white pt-4">
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Reveal>
                <ProjectImage
                  src="/images/techvance/placeholder.svg"
                  alt="Techvance logo and business card placeholder"
                />
              </Reveal>
              <Reveal delay={0.06}>
                <ProjectImage
                  src="/images/techvance/placeholder.svg"
                  alt="Techvance website interface placeholder"
                />
              </Reveal>
              <Reveal delay={0.08} className="col-span-2">
                <ProjectImage
                  src="/images/techvance/placeholder.svg"
                  alt="Techvance signage and brand applications placeholder"
                />
              </Reveal>
            </div>
          </div>
          <div className="md:order-2 md:col-span-5">
            <Reveal>
              <h3 className="font-project text-deep-teal">Techvance</h3>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-3 font-montserrat text-[14.6px] font-semibold text-muted-teal">
                Overview
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-4 space-y-4 font-montserrat text-[11.4px] leading-relaxed text-black">
                <p>
                  Techvance is a modern, reliable, and forward-thinking digital
                  solutions company, with a strong focus on innovation,
                  security, and strategic growth. The cohesive use of deep teal,
                  blue, white, and dark accents establishes a professional and
                  trustworthy visual identity, well-suited for services such as
                  AI-powered solutions, web design, SEO, cybersecurity, and
                  digital strategy.
                </p>
                <p>
                  Clean typography, structured layouts, and consistent
                  iconography reinforce clarity and credibility across both
                  digital and physical touchpoints, from business cards to web
                  interfaces and signage. Overall, the branding communicates
                  confidence, technical expertise, and scalability, positioning
                  Techvance as a dependable partner for businesses seeking
                  smarter, secure, and future-ready digital growth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
