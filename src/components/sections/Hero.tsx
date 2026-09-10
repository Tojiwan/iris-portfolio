import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-lavender"
    >

      <div aria-hidden="true" className="absolute inset-0 md:hidden">
        <Image
          src="/images/hero/hero-mobile.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_20%]"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 hidden md:block">
        <Image
          src="/images/hero/hero-middle-edited.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_20%]"
        />
      </div>
      {/* Screen-reader description of the background portrait */}
      <span className="sr-only">Editorial portrait of Iris Quiambao</span>

      <div aria-hidden className="absolute inset-0 bg-lavender/60" />

      <Container className="relative z-10 py-20 text-center">
        <Reveal>
          <div className="relative mx-auto inline-block max-w-5xl">
            <p className="absolute -top-7 font-montserrat text-[16px] text-black md:-top-8 md:text-[19.2px]">
              Explore my
            </p>
            <h1 className="font-hero uppercase text-navy">Portfolio</h1>
            <p className="absolute -bottom-4 right-1 -translate-y-2 font-montserrat text-[16px] text-black md:-bottom-6 md:-translate-y-2.5 md:text-[19.2px]">
              of crafted works.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
