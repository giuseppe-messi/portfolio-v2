import { AnimatedHeading } from "src/app/components/animated-heading/AnimatedHeading";
import { ParticlesBackground } from "../../components/particles-background/ParticlesBackground";
import * as S from "./Header.styles";

export const Header = () => {
  return (
    <>
      <ParticlesBackground />
      <S.Heading>
        <AnimatedHeading text="Giuseppe" />
      </S.Heading>
    </>
  );
};
