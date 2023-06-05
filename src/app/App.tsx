import { CustomCursor } from "./components/custom-cursor/CustomCursor";
import { Nav } from "./components/nav/Nav";
import { ParticlesBackground } from "./components/particles-background/ParticlesBackground";
import { Header } from "./sections/header/Header";
import { useScrollDetectHeaderEnd } from "./sections/header/useScrollDetectHeaderEnd";
import { OtherSection } from "./sections/other-section/OtherSection";
import { SayHi } from "./sections/say-hi/SayHi";
import { TechIUse } from "./sections/tech-i-use/TechIUse";

export const App = () => {
  const { targetRef, hasPassedHeader } = useScrollDetectHeaderEnd();

  return (
    <>
      <Nav hasPassedHeader={hasPassedHeader} />
      <Header ref={targetRef} />
      <OtherSection />
      <SayHi />
      <OtherSection />
      <TechIUse />
      <OtherSection />
      <CustomCursor />
      <ParticlesBackground />
    </>
  );
};
