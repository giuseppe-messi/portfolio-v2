import * as S from "./Button.styles";

type Props = {
  current: boolean;
  onClickCallBack: () => void;
} & ({ asDot: boolean; text?: never } | { asDot?: never; text: string });

export const Button = ({ text, current, onClickCallBack, asDot }: Props) => {
  return (
    <S.Button current={current} onClick={onClickCallBack} asDot={asDot}>
      {text}
    </S.Button>
  );
};
