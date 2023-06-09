import { AnimatedText } from "src/app/components/animated-text/AnimatedText";
import * as S from "./Header.styles";
import { forwardRef, memo } from "react";

export const Header = memo(
  forwardRef<HTMLElement>((_, ref) => {
    return (
      <S.Header ref={ref}>
        <S.HeadingWrapDiv>
          <S.H1>
            <AnimatedText text="Giuseppe" />
            <S.LastNameSpan>Messina</S.LastNameSpan>
          </S.H1>
          <S.H2>
            A Web Developer's Playground <span></span>
          </S.H2>
          <S.HeadingParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est
            quam, bibendum a magna ac, sollicitudin ultricies eros. Mauris eu
            leo sed sapien hendrerit porttitor
          </S.HeadingParagraph>
        </S.HeadingWrapDiv>

        <S.ArrowBoxDiv>
          <S.Arrow />
        </S.ArrowBoxDiv>
      </S.Header>
    );
  })
);
