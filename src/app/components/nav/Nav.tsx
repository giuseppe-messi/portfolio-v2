import * as S from "./Nav.styles";
import { useCallback, useReducer } from "react";
import { navItems } from "./navItems";
import { cursorStore } from "src/store/cursorStore";

export interface NavReducerState {
  hasHovering: boolean;
  current: string | null;
}

interface NavReducerAction {
  type: "onMouseHover" | "onMouseLeave";
  data: string | null;
}

export const Nav = () => {
  const { setIsCursorVisible } = cursorStore();

  const reducerFunc = useCallback(
    (_: NavReducerState, action: NavReducerAction): NavReducerState => {
      const { type, data } = action;

      return {
        hasHovering: type === "onMouseHover",
        current: data,
      };
    },
    []
  );

  const [state, dispatch] = useReducer(reducerFunc, {
    hasHovering: false,
    current: null,
  });

  const handleMouseOver = useCallback((currentItem: string) => {
    setIsCursorVisible(false);
    dispatch({
      type: "onMouseHover",
      data: currentItem,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsCursorVisible(true);
    dispatch({
      type: "onMouseLeave",
      data: null,
    });
  }, []);

  return (
    <S.Nav>
      <S.List>
        {navItems.map((item) => {
          const { name } = item;
          const { hasHovering, current } = state;

          return (
            <S.ListItem
              key={name}
              onMouseOver={() => handleMouseOver(name)}
              onMouseLeave={handleMouseLeave}
              hasHovering={hasHovering}
              isCurrent={current === name}
            >
              {name}
            </S.ListItem>
          );
        })}
      </S.List>
    </S.Nav>
  );
};
