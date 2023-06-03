import { AnimatedHeading } from "src/app/components/animated-heading/AnimatedHeading";
import { ParticlesBackground } from "../../components/particles-background/ParticlesBackground";
import * as S from "./Header.styles";
import { forwardRef, memo } from "react";

export const Header = memo(
  forwardRef<HTMLElement>((_, ref) => {
    return (
      <S.Header ref={ref}>
        <ParticlesBackground />
        <AnimatedHeading text="Giuseppe" />
      </S.Header>
    );
  })
);
