import { useIntroAnimation } from "src/hooks/useIntroAnimation";
import { CustomCursor } from "./components/custom-cursor/CustomCursor";
import { AnimatedIntro } from "./components/intro/AnimatedIntro";
import { Nav } from "./components/nav/Nav";
import { ParticlesBackground } from "./components/particles-background/ParticlesBackground";
import { Header } from "./sections/header/Header";
import { useScrollDetectHeaderEnd } from "./sections/header/useScrollDetectHeaderEnd";
import { OtherSection } from "./sections/other-section/OtherSection";
import { SayHi } from "./sections/say-hi/SayHi";
import { TechIUse } from "./sections/tech-i-use/TechIUse";
import { About } from "./sections/about/About";

export const App = () => {
  const { targetRef, hasPassedHeader } = useScrollDetectHeaderEnd();
  const { isIntroAnimating } = useIntroAnimation();

  return (
    <>
      {false ? <AnimatedIntro /> : <CustomCursor />}
      <Nav hasPassedHeader={hasPassedHeader} />
      <Header ref={targetRef} />
      <About />
      <SayHi />
      <OtherSection />
      <TechIUse />
      <OtherSection />
      <ParticlesBackground />
    </>
  );
};
