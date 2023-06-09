import styled, { keyframes } from "styled-components";

const arrowAnimetion = keyframes`
   0% {top: 2.5em}
   10% {top: 3em}
   20% {top: 2.5em}
   100% {top: 2.5em}
`;

export const Header = styled.header`
  height: 100vh;
  padding: 0 3em;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const HeadingWrapDiv = styled.div`
  margin-top: 8em;
  max-width: 29em;
`;

export const H1 = styled.h1`
  display: flex;
  flex-direction: column;
`;

export const LastNameSpan = styled.span`
  align-self: end;
  font-size: 1.8em;
  margin-top: -10px;
`;

export const H2 = styled.h2`
  text-align: justify;

  & > span {
    display: inline-block;
    width: 100%;
  }
`;

export const HeadingParagraph = styled.p`
  text-align: justify;
`;

export const ArrowBoxDiv = styled.div`
  background: black;
  color: white;
  position: absolute;
  bottom: -7em;
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 2.5em;
  width: 17%;
  height: 5px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
  animation: ${arrowAnimetion} 4s linear infinite;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 60%;
    height: 5px;
    right: -4px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
  }

  &:before {
    top: 5px;
    transform: rotate(-45deg);
  }

  &:after {
    top: -5px;
    transform: rotate(45deg);
  }
`;
