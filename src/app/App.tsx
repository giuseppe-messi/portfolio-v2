import { CustomCursor } from "./components/custom-cursor/CustomCursor";
import { Nav } from "./components/nav/Nav";
import { Header } from "./sections/header/Header";
import { OtherSection } from "./sections/other-section/OtherSection";
import { SayHi } from "./sections/say-hi/SayHi";
import { TechIUse } from "./sections/tech-i-use/TechIUse";

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <OtherSection />
      <SayHi />
      <OtherSection />
      <TechIUse />
      <OtherSection />
      <CustomCursor />
    </>
  );
};
