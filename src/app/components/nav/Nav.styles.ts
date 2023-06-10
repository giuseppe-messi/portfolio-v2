import styled from "styled-components";

interface NavProps {
  hasPassedHeader: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: fixed;
  width: 100%;
  height: 3em;
  font-size: 1.2em;
  background-color: ${({ hasPassedHeader }) =>
    hasPassedHeader ? "black" : "transparent"};
  transition: background-color 0.3s;
  padding: 0 1em;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

export const List = styled.ul`
  display: flex;
  gap: 1em;
`;

export const ListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 0 1em;
`;
