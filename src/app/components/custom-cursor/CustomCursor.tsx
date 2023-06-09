import { useEffect, useState } from "react";
import * as S from "./CustomCursor.style";
import { useCursorMagnify } from "src/hooks/useCursorMagnify";

export interface PositionCordinates {
  x: number | null;
  y: number | null;
}

export const CustomCursor = () => {
  const { magnify } = useCursorMagnify();

  const [position, setPosition] = useState<PositionCordinates>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });

    const addMoveListener = () =>
      document.addEventListener("mousemove", updatePosition);
    const removeMoveListener = () => {
      document.removeEventListener("mousemove", updatePosition);
    };

    addMoveListener();

    return () => removeMoveListener();
  }, []);

  return (
    <S.Cursor position={position} magnify={magnify}>
      <div />
    </S.Cursor>
  );
};
