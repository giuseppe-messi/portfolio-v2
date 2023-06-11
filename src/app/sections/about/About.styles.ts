import styled from "styled-components";

export const AboutWrapperDiv = styled.div`
  background-color: white;
  height: 500px;
  padding: 2em 3em 4em 3em;
`;

export const H2 = styled.h2``;

export const AboutBox = styled.div`
  display: flex;
  height: 100%;
`;

export const ImageDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;

  & > div {
    background: black;
    color: white;
    padding: 1em;
  }
`;

export const AboutOptionsDiv = styled.div`
  width: 50%;
`;
