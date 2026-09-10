import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectImage from "@/components/ui/ProjectImage";
import Reveal from "@/components/ui/Reveal";

export default function Techvance() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7 md:order-1">
            <Reveal>
              <ProjectImage
                src="/images/techvance/techvance-1.png"
                alt="Techvance brand board with business cards, signage, logo and website interfaces"
                className="bg-white"
              />
            </Reveal>
          </div>
          <div className="md:order-2 md:col-span-5">
            <Reveal>
              <h3 className="font-project text-deep-teal md:text-right">
                Techvance
              </h3>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-3 font-montserrat text-[14.6px] font-medium text-muted-teal md:text-right">
                Overview
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-4 space-y-4 font-montserrat text-[11.4px] leading-relaxed text-black text-justify">
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
        <div className="mt-10 flex items-center gap-4">
          <div aria-hidden="true" className="h-px flex-1 bg-deep-teal/30" />
          <p className="shrink-0 font-montserrat text-[11px] tracking-wide text-deep-teal md:text-right">
            Iris Quiambao | Portfolio &lsquo;26
          </p>
        </div>
      </Container>
    </Section>
  );
}
