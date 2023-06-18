import { ReactNode, useEffect, useState } from "react";
import * as S from "./Carousel.styles";
import { Button } from "../button/Button";
import { AboutCarouselPanel } from "../about-carousel-panel/AboutCarouselPanel";

interface TabsProps<T> {
  items: T[];
  getTitle: (T: T) => string;
  getContent: (T: T) => string;
  withAnimation?: boolean;
}

type TabsType = <T>({ items }: TabsProps<T>) => JSX.Element;

export const Carousel: TabsType = ({
  items,
  getTitle,
  getContent,
  withAnimation = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (withAnimation) {
      const animationInterval = setInterval(() => {
        setCurrentIndex((currentIndex) =>
          currentIndex >= items.length - 1 ? 0 : currentIndex + 1
        );
      }, 8000);
      return () => clearInterval(animationInterval);
    }
  }, [withAnimation]);

  return (
    <S.TabsWrapperDiv>
      <S.PanelDiv>
        <S.CarouselWrapperDiv>
          {items.map((item, index) => (
            <S.PanelBox key={index} currentIndex={currentIndex}>
              <AboutCarouselPanel
                title={getTitle(item)}
                content={getContent(item)}
              />
            </S.PanelBox>
          ))}
        </S.CarouselWrapperDiv>
      </S.PanelDiv>
      <S.TabsBoxDiv>
        {items.map((_, index) => (
          <Button
            key={index}
            asDot
            current={currentIndex === index}
            onClickCallBack={() => setCurrentIndex(index)}
          />
        ))}
      </S.TabsBoxDiv>
    </S.TabsWrapperDiv>
  );
};
