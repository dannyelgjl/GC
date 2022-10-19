import React from "react";
import { IButton } from "./types";
import * as S from "./styles";

const Button = ({
  title,
  icon,
  isChangeColor,
  onClick,
  isChangeColorPro,
  isChangeColorOpen,
}: IButton) => {
  return (
    <S.Container
      isChangeColor={isChangeColor}
      isChangeColorPro={isChangeColorPro}
      isChangeColorOpen={isChangeColorOpen}
      onClick={onClick}
    >
      <S.Wrapper>
        <S.Icon src={icon} />
        <S.Title isChangeColor={isChangeColor}>{title}</S.Title>
      </S.Wrapper>
    </S.Container>
  );
};

export default Button;
