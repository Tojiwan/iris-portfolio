import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectImage from "@/components/ui/ProjectImage";
import Reveal from "@/components/ui/Reveal";

export default function KnitKnots() {
  return (
    <Section className="bg-white pt-8">
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h3 className="font-project uppercase text-muted-purple">
                Knit Knots
              </h3>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-3 font-montserrat text-[14.6px] font-semibold text-muted-purple">
                Overview
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-4 space-y-4 font-montserrat text-[11.4px] leading-relaxed text-black">
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
            <div className="grid grid-cols-2 gap-4">
              <Reveal>
                <ProjectImage
                  src="/images/knit-knots/placeholder.svg"
                  alt="Knit Knots logo and brand mark placeholder"
                />
              </Reveal>
              <Reveal delay={0.06}>
                <ProjectImage
                  src="/images/knit-knots/placeholder.svg"
                  alt="Knit Knots packaging design placeholder"
                />
              </Reveal>
              <Reveal delay={0.08}>
                <ProjectImage
                  src="/images/knit-knots/placeholder.svg"
                  alt="Knit Knots crochet product photography placeholder"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <ProjectImage
                  src="/images/knit-knots/placeholder.svg"
                  alt="Knit Knots social media graphics placeholder"
                />
              </Reveal>
            </div>
            <p className="mt-3 font-montserrat text-[11px] text-black/60">
              Logo · Typography · Palette · Packaging · Social
            </p>
          </div>
        </div>
        <p className="mt-10 font-montserrat text-[11px] tracking-wide text-accent-purple">
          Iris Quiambao | Portfolio &lsquo;26
        </p>
      </Container>
    </Section>
  );
}
