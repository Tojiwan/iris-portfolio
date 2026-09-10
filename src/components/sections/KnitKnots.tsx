import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectImage from "@/components/ui/ProjectImage";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function KnitKnots() {
  return (
    <Section className="bg-white pb-0!">
      <Container>
        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel>2nd Phase</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-2 font-le-jour text-[24.4px] text-navy">
                Brand Identity
              </h2>
            </Reveal>
            <Reveal>
              <h3 className="font-project normal-case text-muted-purple">
                Knit Knots
              </h3>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-3 font-montserrat text-[14.6px] font-medium text-muted-purple">
                Overview
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-4 space-y-4 font-montserrat text-[11.4px] leading-relaxed text-black text-justify">
                <p>
                  Knit Knots is a small handmade crochet business established in
                  2023, built on the belief that handcrafted pieces can be both
                  charming and refined. Blending a flexibly cute yet stylish and
                  subtly sophisticated aesthetic, the brand focuses on thoughtful
                  craftsmanship, soft details, and modern presentation.
                </p>
                <p>
                  Using a calming palette of lilac, white, and purple, Knit
                  Knots expresses creativity, warmth, and quiet
                  confidence—creating crochet pieces that feel personal,
                  polished, and intentionally made for those who appreciate
                  handmade items with a contemporary touch.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <ProjectImage
                src="/images/knit-knots/knit-knots-left-img.png"
                alt="Knit Knots crochet brand board with business cards, packaging, hang tag, logo and stickers"
                className="bg-white"
              />
            </Reveal>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <p className="shrink-0 font-montserrat text-[11px] tracking-wide text-accent-purple">
            Iris Quiambao | Portfolio &lsquo;26
          </p>
          <div aria-hidden="true" className="h-px flex-1 bg-accent-purple/60" />
        </div>
      </Container>
    </Section>
  );
}
