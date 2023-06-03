import styled from "styled-components";

interface NavProps {
  hasPassedHeader: boolean;
  hasHovering: boolean;
  isCurrent: boolean;
}

export const Nav = styled.nav<Pick<NavProps, "hasPassedHeader">>`
  position: fixed;
  width: 100%;
  height: 3em;
  background: ${({ hasPassedHeader }) =>
    hasPassedHeader ? "black" : "transparent"};
  padding: 0 1em;
  color: white;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 1;
`;

export const List = styled.ul`
  display: flex;
  gap: 2em;
`;

export const ListItem = styled.li<Pick<NavProps, "hasHovering" | "isCurrent">>`
  list-style-type: none;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s, opacity 0.3s;

  opacity: ${({ hasHovering, isCurrent }) =>
    hasHovering ? (isCurrent ? 1 : 0.5) : 1};

  &::after {
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

    &:after {
      width: 120px;
      height: 120px;
      opacity: 0.5;
    }
  }
`;
