import { useEffect, useState } from "react";
import * as S from "./CustomCursor.style";
import { cursorStore } from "src/store/cursorStore";

export const CustomCursor = () => {
  const { isCursorHoverNavListItem } = cursorStore();

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });

    const addMoveListener = () =>
      document.addEventListener("mousemove", updatePosition);

    const removeMoveListener = () =>
      document.removeEventListener("mousemove", updatePosition);

    addMoveListener();

    return () => removeMoveListener();
  }, []);

  return (
    <S.Cursor
      position={position}
      isCursorHoverNavListItem={isCursorHoverNavListItem}
    />
  );
};
