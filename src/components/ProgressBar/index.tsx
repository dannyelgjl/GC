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

const ProgressBar: React.FC = () => {
  return (
    <Container>
      <LevelTop>
        <WrapperLevel>
          <TitleLevel>Casual</TitleLevel>
          <Pin />
        </WrapperLevel>

        <WrapperLevel>
          <TitleLevel>Amador</TitleLevel>
          <Pin />
        </WrapperLevel>
      </LevelTop>

      <ContainerBar>
        <Bar />
      </ContainerBar>

      <LevelBottom>
        <WrapperLevel>
          <TitleLevel>Competitivo</TitleLevel>
          <Pin rotatePin />
        </WrapperLevel>

        <WrapperLevel>
          <TitleLevel>Pro</TitleLevel>
          <Pin rotatePin />
        </WrapperLevel>
      </LevelBottom>
    </Container>
  );
};

export default ProgressBar;
