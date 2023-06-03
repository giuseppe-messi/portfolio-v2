import styled, { keyframes } from "styled-components";
import TextBackground from "../../../assets/images/say-hi-text-background.jpg";

const moveTextBG = keyframes`
  0% {background-position: 0 0;}
  10% {background-position: -10vw 0;}
  20% {background-position: -20vw 0;}
  30% {background-position: -30vw 0;}
  40% {background-position: -40vw 0;}
  50% {background-position: -50vw 0;}
  60% {background-position: -60vw 0;}
  70% {background-position: -70vw 0;}
  80% {background-position: -80vw 0;}
  90% {background-position: -90vw 0;}
  100% {background-position: -100vw 0;}
`;

export const Test = styled.h1`
  font-size: 10em;
  text-align: center;
  font-weight: bold;
  color: transparent;
  background-image: url(${TextBackground});
  background-size: cover;
  background-repeat: repeat-x;
  background-attachment: fixed;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${moveTextBG} 20s linear infinite;
`;

export const Box = styled.div`
  background-color: black;
  padding: 4em 3em;
`;
