import { Tabs } from "src/app/components/tabs/Tabs";
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
          <Tabs
            items={panels}
            getId={(item) => item.id}
            getTitle={(item) => item.title}
            getText={(item) => item.text}
          />
        </S.AboutOptionsDiv>
      </S.AboutBox>
    </S.AboutWrapperDiv>
  );
};
