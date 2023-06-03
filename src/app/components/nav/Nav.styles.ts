import styled, { css, keyframes } from "styled-components";

interface NavProps {
  hasHovering: boolean;
  isCurrent: boolean;
}

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 2.2em;
  padding: 0 1em;
  color: white;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 1;
`;

export const List = styled.ul`
  display: flex;
  gap: 3em;
`;

const strike = keyframes`
  0%   { width : 0; }
  100% { width: 100%; }`;

const test = css`
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    height: 2px;
    background: rgb(255, 0, 0);
    animation: ${strike} 0.6s linear 1 forwards;
    z-index: 1;
  }
`;

export const ListItem = styled.li<NavProps>`
  list-style-type: none;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s;

  opacity: ${({ hasHovering, isCurrent }) =>
    hasHovering ? (isCurrent ? 1 : 0.5) : 1};

  ${({ hasHovering, isCurrent }) => (hasHovering ? (isCurrent ? 1 : test) : 1)};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 0;
    transition: width 0.3s, height 0.3s, opacity 0.3s;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.4);

    &:before {
      width: 120px;
      height: 120px;
      opacity: 0.5;
    }
  }
`;
