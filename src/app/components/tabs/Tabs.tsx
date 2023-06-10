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

  console.log(currentIndex);

  const handleTabIndex = useCallback((id: number) => setCurrentIndex(id), []);

  const Buttons = useMemo(
    () =>
      items.map((item) => (
        <Button
          key={getId(item)}
          text={getTitle(item)}
          onClick={() => handleTabIndex(getId(item))}
        />
      )),
    []
  );

  console.log(getText(items[currentIndex]));

  const pannel = useMemo(() => getText(items[currentIndex]), [currentIndex]);

  return (
    <S.TabsWrapperDiv>
      <div>{Buttons}</div>
      <div>{pannel}</div>
    </S.TabsWrapperDiv>
  );
};
