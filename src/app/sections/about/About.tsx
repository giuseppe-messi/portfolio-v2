import { Tabs } from "src/app/components/tabs/Tabs";
import * as S from "./About.styles";

interface Panel {
  id: number;
  title: string;
  text: string;
}

const panels: Panel[] = [
  { id: 0, title: "first", text: "This is the text for the FIRST item" },
  { id: 1, title: "second", text: "This is the text for the SECOND item" },
  { id: 2, title: "third", text: "This is the text for the THIRD item" },
];

export const About = () => {
  return (
    <S.AboutWrapperDiv>
      <S.H2>About</S.H2>
      <S.AboutBox>
        <S.ImageDiv>Illustration here!</S.ImageDiv>
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
