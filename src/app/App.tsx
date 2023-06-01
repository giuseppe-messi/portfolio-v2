import { Header } from "./sections/header/Header";
import { OtherSection } from "./sections/other-section/OtherSection";
import { SayHi } from "./sections/say-hi/SayHi";

export const App = () => {
  return (
    <>
      <Header />
      <OtherSection />
      <SayHi />
      <OtherSection />
    </>
  );
};
