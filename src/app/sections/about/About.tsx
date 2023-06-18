import { Carousel } from "src/app/components/carousel/Carousel";
import * as S from "./About.styles";
import { usePanelsAboutSection } from "src/hooks/usePanelsAboutSection";

export const About = () => {
  const { panels } = usePanelsAboutSection();

  return (
    <S.AboutWrapperDiv>
      <S.H2>About</S.H2>
      <S.AboutBox>
        <S.ImageDiv>
          <div>Illustration here!</div>
        </S.ImageDiv>
        <S.AboutOptionsDiv>
          <Carousel
            items={panels}
            getTitle={(item) => item.title}
            getContent={(item) => item.text}
            withAnimation
          />
        </S.AboutOptionsDiv>
      </S.AboutBox>
    </S.AboutWrapperDiv>
  );
};
