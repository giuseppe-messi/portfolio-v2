import styled, { css } from "styled-components";
import { PositionCordinates } from "./CustomCursor";

interface CursorProps {
  position: PositionCordinates;
  magnify: boolean;
}

const hoveringLisCss = css`
  width: 100px;
  height: 100px;
  background-color: white;
`;

export const Cursor = styled.div.attrs<Pick<CursorProps, "position">>(
  ({ position: { x, y } }) => ({
    style: {
      top: `${y}px`,
      left: `${x}px`,
    },
  })
)<CursorProps>`
  position: fixed;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  outline: white solid 4px;
  z-index: 2;
  pointer-events: none;

  ${({ magnify }) => magnify && hoveringLisCss}

  mix-blend-mode: difference;

  transition: left ease-out, top ease-out, width 0.3s, height 0.3s,
    background-color 0.3s;
`;
