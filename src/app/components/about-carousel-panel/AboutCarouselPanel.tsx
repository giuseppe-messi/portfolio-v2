import * as S from "./AboutCarouselPanel.styles";

interface AboutCarouselPanelProps {
  title: string;
  content: string;
}

export const AboutCarouselPanel = ({
  title,
  content,
}: AboutCarouselPanelProps) => {
  return (
    <S.WrapperDIv>
      <h3>{title}</h3>
      <p>{content}</p>
    </S.WrapperDIv>
  );
};
