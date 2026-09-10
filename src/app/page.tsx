import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Quote from "@/components/sections/Quote";
import BackgroundSkills from "@/components/sections/BackgroundSkills";
import PhaseDivider from "@/components/sections/PhaseDivider";
import UIDesign from "@/components/sections/UIDesign";
import BrandIdentity from "@/components/sections/BrandIdentity";
import KnitKnots from "@/components/sections/KnitKnots";
import Techvance from "@/components/sections/Techvance";
import PostersPatterns from "@/components/sections/PostersPatterns";
import Patterns from "@/components/sections/Patterns";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Quote />
        <BackgroundSkills />

        <PhaseDivider title="UI Design" phase="First Phase" variant="navy" />
        <UIDesign />

        <PhaseDivider
          title="Brand Identity"
          phase="Second Phase"
          variant="purple"
        />
        <BrandIdentity />
        <KnitKnots />
        <Techvance />

        <PhaseDivider
          title="Posters and Patterns"
          phase="Third Phase"
          variant="deep"
        />
        <PostersPatterns />
        <Patterns />
      </main>
      <Footer />
    </>
  );
}
