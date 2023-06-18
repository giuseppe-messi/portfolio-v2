import styled from "styled-components";

interface CarouselProps {
  currentIndex: number;
}

export const TabsWrapperDiv = styled.div``;

export const TabsBoxDiv = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-top: 1em;
`;

export const PanelDiv = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 23em;
  height: 20em;
  text-align: justify;
  margin: 2em auto 0 auto;
  scroll-snap-type: x mandatory;
`;

export const CarouselWrapperDiv = styled.div`
  display: flex;
  position: absolute;
`;

export const PanelBox = styled.div<CarouselProps>`
  width: 24em;
  transform: translateX(${({ currentIndex }) => -(currentIndex * 100)}%);
  padding-right: 1em;
  transition: transform 1s ease;
`;
