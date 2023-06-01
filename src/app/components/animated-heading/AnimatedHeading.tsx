import { useCallback, useState } from "react";
import * as S from "./AnimatedHeading.styles";

type LettersAnimetionObj = {
  [key: string]: boolean;
};

interface AnimatedHeadingProps {
  text: string;
}

const createIndexesObj = (num: number) => {
  const obj: LettersAnimetionObj = {};
  Array.from({ length: num }, (_, i) => (obj[i] = false));
  return obj;
};

export const AnimatedHeading = ({ text }: AnimatedHeadingProps) => {
  const [animeLetters, setAnimeLetters] = useState<LettersAnimetionObj>(
    createIndexesObj(text.length)
  );

  const handleSetAnimeLetters = useCallback((index: number) => {
    setAnimeLetters((prevState) => ({ ...prevState, [index]: true }));
  }, []);

  const handleStopAnimeLetters = useCallback((index: number) => {
    setAnimeLetters((prevState) => ({ ...prevState, [index]: false }));
  }, []);

  return (
    <S.Heading>
      {text.split("").map((letter, index) => {
        const delay = (index + 1) * 180;

        return (
          <S.LetterWrap key={index} delay={delay}>
            <S.Letter
              onMouseEnter={() => handleSetAnimeLetters(index)}
              onAnimationEnd={() => handleStopAnimeLetters(index)}
              isAnimating={animeLetters[index]}
            >
              {letter}
            </S.Letter>
          </S.LetterWrap>
        );
      })}
    </S.Heading>
  );
};
