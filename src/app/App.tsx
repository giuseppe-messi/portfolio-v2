import { useMemo } from "react";
import { CustomCursor } from "./components/custom-cursor/CustomCursor";
import { Nav } from "./components/nav/Nav";
import { Header } from "./sections/header/Header";
import { useScrollDetection } from "./sections/header/useScrollDetection";
import { OtherSection } from "./sections/other-section/OtherSection";
import { SayHi } from "./sections/say-hi/SayHi";
import { TechIUse } from "./sections/tech-i-use/TechIUse";

export const App = () => {
  const { targetRef, hasPassedHeader } = useScrollDetection();

  const cachedHasPassedHeader = useMemo(
    () => hasPassedHeader,
    [hasPassedHeader]
  );

  const cachedTargetRef = useMemo(() => targetRef, [targetRef]);

  return (
    <>
      <Nav hasPassedHeader={cachedHasPassedHeader} />
      <Header ref={cachedTargetRef} />
      <OtherSection />
      <SayHi />
      <OtherSection />
      <TechIUse />
      <OtherSection />
      <CustomCursor />
    </>
  );
};
