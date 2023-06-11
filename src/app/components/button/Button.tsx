import * as S from "./Button.styles";

interface Props {
  text: string;
  current: boolean;
  onClickCallBack: () => void;
}

export const Button = ({ text, current, onClickCallBack }: Props) => {
  return (
    <S.Button current={current} onClick={onClickCallBack}>
      {text}
    </S.Button>
  );
};
