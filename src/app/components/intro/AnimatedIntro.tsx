import { useIntroAnimation } from "src/hooks/useIntroAnimation";
import * as S from "./AnimatedIntro.styles";

export const AnimatedIntro = () => {
  const { setIsIntroAnimatingToFalse } = useIntroAnimation();
  return (
    <div>
      <S.OuterLayer>
        <div />
        <div />
        <div onAnimationEnd={setIsIntroAnimatingToFalse} />
      </S.OuterLayer>
    </div>
  );
};
