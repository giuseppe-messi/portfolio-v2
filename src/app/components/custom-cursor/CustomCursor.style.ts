import styled, { css } from "styled-components";

interface CursorProps {
  position: CursorPositionProps;
  isCursorHoverNavListItem: boolean;
}

interface CursorPositionProps {
  x: number;
  y: number;
}

const hoveringLisCss = css`
  width: 100px;
  height: 100px;
  background-color: white;
`;

export const Cursor = styled.div.attrs<CursorProps>(
  ({ position: { x, y } }) => ({
    style: {
      top: `${y}px`,
      left: `${x}px`,
    },
  })
)<CursorProps>`
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  width: 30px;
  height: 30px;

  ${({ isCursorHoverNavListItem }) =>
    isCursorHoverNavListItem && hoveringLisCss}

  z-index: 1;
  mix-blend-mode: difference;
  pointer-events: none;

  border-radius: 50%;
  mix-blend-mode: difference;
  border: 2px solid white;
  transition: left ease-out, top ease-out, width 0.3s, height 0.3s,
    background-color 0.3s;
`;
