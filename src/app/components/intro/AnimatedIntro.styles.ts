import styled, { css, keyframes } from "styled-components";

const enlarge = keyframes`
  0% {width: 20vh; height: 20vh;}
  50% {width: 230vh; height: 230vh;}
  100% {width: 30px; height: 30px;}
`;

const shrink = keyframes`
  0% {outline: white solid 200vh;}
  100% {outline: white solid 4px;}
`;

const otherInnerDivAnime = keyframes`
  0% { width: 230vh; height: 230vh;}
  100% { width: 30px; height: 30px;}
`;

const pulse = keyframes`
  0% {box-shadow: 0 0 0 0px #ffffff;}
  100% {box-shadow: 0 0 10px 50px #ffffff00;}
`;

const sharedStyles = css`
  position: fixed;
  background: transparent;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  top: 50%;
  left: 50%;
`;

export const OuterLayer = styled.div`
  ${sharedStyles}
  width: 20vh;
  height: 20vh;
  outline: white solid 200vh;

  animation: ${enlarge} 4s ease-in-out 0.5s forwards,
    ${shrink} 2s ease-in-out 1s forwards, ${pulse} 1.5s 5s 1;

  transition: left ease-out, top ease-out, width 0.3s, height 0.3s,
    background-color 0.3s;

  & > div {
    ${sharedStyles}
    outline: white solid 4px;
    width: 230vh;
    height: 230vh;

    animation: ${otherInnerDivAnime} 2s cubic-bezier(1, 0, 1, 1) forwards;

    &:nth-of-type(1) {
      animation-delay: 2.2s;
    }

    &:nth-of-type(2) {
      animation-delay: 2.5s;
    }

    &:nth-of-type(3) {
      animation-delay: 2.7s;
    }
  }
`;
