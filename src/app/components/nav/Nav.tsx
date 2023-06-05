import * as S from "./Nav.styles";
import { memo, useCallback } from "react";
import { navItems } from "./navItems";
import { cursorStore } from "src/store/cursorStore";

interface NavProps {
  hasPassedHeader: boolean | null;
}

export const Nav = memo(({ hasPassedHeader }: NavProps) => {
  const { setIsCursorHoverNavListItem } = cursorStore();

  const handleMouseOver = useCallback(
    () => setIsCursorHoverNavListItem(true),
    []
  );

  const handleMouseLeave = useCallback(
    () => setIsCursorHoverNavListItem(false),
    []
  );

  return (
    <S.Nav hasPassedHeader={hasPassedHeader!}>
      <S.List>
        {navItems.map((item) => {
          const { name } = item;

          return (
            <S.ListItem
              key={name}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              {name}
            </S.ListItem>
          );
        })}
      </S.List>
    </S.Nav>
  );
});
