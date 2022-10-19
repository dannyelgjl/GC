import React from "react";
import { IButton } from "./types";
import * as S from "./styles";

const Button = ({ title, icon }: IButton) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Icon src={icon} />
        <S.Title>{title}</S.Title>
      </S.Wrapper>
    </S.Container>
  );
};

export default Button;
