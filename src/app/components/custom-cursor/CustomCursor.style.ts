import styled, { css } from "styled-components";

interface CursorProps {
  position: CursorPositionProps;
}

interface CursorPositionProps {
  x: number;
  y: number;
}

export const Cursor = styled.div.attrs<CursorProps>(
  ({ position: { x, y } }) => ({
    style: {
      top: `${y}px`,
      left: `${x}px`,
    },
  })
)<CursorProps>`
  position: fixed;
  transform: translateX(-120%) translateY(-50%);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  mix-blend-mode: difference;
  border: 2px solid white;
  transition: left ease-out, top ease-out;
`;
