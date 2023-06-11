import * as S from "./Nav.styles";
import { memo, useMemo } from "react";
import { navItems } from "./navItems";
import { withCursorHoverFunctionality } from "src/helpers/withCursorHoverFunctionality";

interface NavProps {
  hasPassedHeader: boolean | null;
}

export const Nav = memo(({ hasPassedHeader }: NavProps) => {
  const ListItemWithCursorHoverFunctionality = useMemo(
    () => withCursorHoverFunctionality(S.ListItem),
    []
  );

  return (
    <S.Nav hasPassedHeader={hasPassedHeader!}>
      <div>GM</div>
      <S.List>
        {navItems.map((item) => {
          const { name } = item;

          return (
            <ListItemWithCursorHoverFunctionality key={name}>
              {name}
            </ListItemWithCursorHoverFunctionality>
          );
        })}
      </S.List>
    </S.Nav>
  );
});
