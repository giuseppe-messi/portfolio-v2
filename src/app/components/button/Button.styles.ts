import styled, { css } from "styled-components";

interface ButtonProps {
  current: boolean;
}

const hoverStyles = css`
  background-color: black;
  color: white;
`;

export const Button = styled.button<ButtonProps>`
  background-color: "white";
  color: black;
  ${({ current }) => current && hoverStyles}
  padding: 0.5em 3em;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;
