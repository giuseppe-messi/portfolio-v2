import { useCallback, useMemo, useState } from "react";
import * as S from "./Tabs.styles";
import { Button } from "../button/Button";

interface TabsProps<T> {
  items: T[];
  getId: (T: T) => number;
  getTitle: (T: T) => string;
  getText: (T: T) => string;
}

type TabsType = <T>({ items }: TabsProps<T>) => JSX.Element;

export const Tabs: TabsType = ({ items, getId, getTitle, getText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabIndex = useCallback((id: number) => setCurrentIndex(id), []);

  const currentPanel = useMemo(
    () => getText(items[currentIndex]),
    [currentIndex]
  );

  return (
    <S.TabsWrapperDiv>
      <S.TabsBoxDiv>
        {items.map((item) => {
          const id = getId(item);
          const title = getTitle(item);
          return (
            <Button
              key={id}
              text={title}
              current={currentIndex === id}
              onClickCallBack={() => handleTabIndex(id)}
            />
          );
        })}
      </S.TabsBoxDiv>
      <S.PanelDiv>{currentPanel}</S.PanelDiv>
    </S.TabsWrapperDiv>
  );
};
