import styled, { css, keyframes } from "styled-components";

interface AnimatedTextStylesProps {
  delay: number;
  isAnimating: boolean;
}

export const move = keyframes`
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

export const WrapperSpan = styled.span`
  font-size: 3em;
  display: flex;
`;

export const LetterBoxSpan = styled.span<
  Pick<AnimatedTextStylesProps, "delay">
>`
  animation: ${move} 1s 1 ${({ delay }) => delay}ms forwards ease-out;
`;

export const LetterSpan = styled.span<
  Pick<AnimatedTextStylesProps, "isAnimating">
>`
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
