import { useState } from "react";
import * as S from "./AnimatedHeading.styles";

type LettersAnimationState = {
  [key: string]: boolean;
};

interface AnimatedHeadingProps {
  text: string;
}

export const AnimatedHeading = ({ text }: AnimatedHeadingProps) => {
  const state = text
    .split("")
    .reduce((stateObj, _, i) => ({ ...stateObj, [i]: false }), {});

  const [lettersAnimationState, setLettersAnimationState] =
    useState<LettersAnimationState>(state);

  const handleSetLetterAnimation = (index: number) => {
    setLettersAnimationState((prevState) => ({ ...prevState, [index]: true }));
  };
  const handleStopLetterAnimation = (index: number) => {
    setLettersAnimationState((prevState) => ({ ...prevState, [index]: false }));
  };
  return (
    <>
      {text.split("").map((letter, index) => {
        const test = (index + 1) * 180;
        return (
          <S.Letter
            onMouseEnter={() => handleSetLetterAnimation(index)}
            onAnimationEnd={() => handleStopLetterAnimation(index)}
            isAnimating={lettersAnimationState[index]}
            delay={test}
            key={index}
          >
            {letter}
          </S.Letter>
        );
      })}
    </>
  );
};
