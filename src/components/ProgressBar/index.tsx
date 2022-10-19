import React from "react";

import {
  Container,
  ContainerBar,
  Bar,
  LevelTop,
  Pin,
  LevelBottom,
  TitleLevel,
  WrapperLevel,
} from "./styles";

interface IProgressBar {
  isChangeColor: boolean;
  pinIcon: string;
}

const ProgressBar = ({ isChangeColor, pinIcon }: IProgressBar) => {
  return (
    <Container>
      <LevelTop>
        <WrapperLevel>
          <TitleLevel>Casual</TitleLevel>
          <Pin src={pinIcon} />
        </WrapperLevel>

        <WrapperLevel>
          <TitleLevel>Amador</TitleLevel>
          <Pin src={pinIcon} />
        </WrapperLevel>
      </LevelTop>

      <ContainerBar>
        <Bar isChangeColor={isChangeColor} />
      </ContainerBar>

      <LevelBottom>
        <WrapperLevel>
          <TitleLevel>Competitivo</TitleLevel>
          <Pin rotatePin src={pinIcon} />
        </WrapperLevel>

        <WrapperLevel>
          <TitleLevel>Pro</TitleLevel>
          <Pin rotatePin src={pinIcon} />
        </WrapperLevel>
      </LevelBottom>
    </Container>
  );
};

export default ProgressBar;
