import * as S from "./Button.styles";

interface Props {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: Props) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};
