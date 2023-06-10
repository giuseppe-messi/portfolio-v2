import * as S from "./Nav.styles";
import { memo, useCallback } from "react";
import { navItems } from "./navItems";
import { useCursorMagnify } from "src/hooks/useCursorMagnify";

interface NavProps {
  hasPassedHeader: boolean | null;
}

export const Nav = memo(({ hasPassedHeader }: NavProps) => {
  const { setMagnify } = useCursorMagnify();

  const handleMouseOver = useCallback(() => setMagnify(true), []);
  const handleMouseLeave = useCallback(() => setMagnify(false), []);

  return (
    <S.Nav hasPassedHeader={hasPassedHeader!}>
      <div>GM</div>
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
