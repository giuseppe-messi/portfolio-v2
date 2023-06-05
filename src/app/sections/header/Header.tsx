import { AnimatedHeading } from "src/app/components/animated-heading/AnimatedHeading";
import * as S from "./Header.styles";
import { forwardRef, memo } from "react";

export const Header = memo(
  forwardRef<HTMLElement>((_, ref) => {
    return (
      <S.Header ref={ref}>
        <AnimatedHeading text="Giuseppe" />
      </S.Header>
    );
  })
);
