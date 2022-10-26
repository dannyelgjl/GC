import { IButton } from "./types";
import * as S from "./styles";

const Button = ({ title, icon, isChangeColor, href, target }: IButton) => {
  return (
    <S.Container isChangeColor={isChangeColor} href={href} target={target}>
      <S.Wrapper>
        <S.Icon src={icon} />
        <S.Title isChangeColor={isChangeColor}>{title}</S.Title>
      </S.Wrapper>
    </S.Container>
  );
};

export default Button;
