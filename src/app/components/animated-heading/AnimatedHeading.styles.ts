import styled, { css, keyframes } from "styled-components";

interface HeaderProps {
  delay: number;
  isAnimating: boolean;
}

const move = keyframes`
  0% {transform: translateY(0px);}
  10% {transform: translateY(-20px) scale(1.4,.6);}
  15% {transform: translateY(-27px) scale(1.44,.6);}
  25% {transform: translateY(0px) scale(.9,1.1);}
  45% {transform: translateY(20px) scale(1,1);}
  50% {transform: translateY(30px) scale(1.2,.8);}
  55% {transform: translateY(30px) scale(1.1,.9);}
  65% {transform: translateY(10px) scale(.9,1.1);}
  100% {transform: translateY(0px);}
  `;

export const Heading = styled.h1`
  color: white;
  font-size: 5em;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const LetterWrap = styled.span<Pick<HeaderProps, "delay">>`
  animation: ${move} 1s 1 ${({ delay }) => delay}ms forwards ease-out;
`;

export const Letter = styled.span<Pick<HeaderProps, "isAnimating">>`
  display: inline-block;
  cursor: default;

  ${({ isAnimating }) =>
    isAnimating &&
    css`
       {
        animation-name: ${move};
        animation-duration: 2s;
        animation-delay: 500;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
      }
    `}
`;
