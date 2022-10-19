import React from "react";
import { IGameDetails } from "./types";
import * as S from "./styles";

const GameDetails = ({
  title,
  numberGames,
  gamesLabel,
  numberVictories,
  victoriesLabel,
  numberDefeats,
  defeatsLabel,
  icon,
  isColorNumberDefault,
  isColorNumberBlue,
  isColorNumberRed,
}: IGameDetails) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Icon src={icon} />
        <S.Title>{title}</S.Title>
      </S.TitleContainer>

      <S.CardsGameContainer>
        <S.CardsGame>
          <S.NumberGames
            isColorNumberRed={isColorNumberRed}
            isColorNumberBlue={isColorNumberBlue}
            isColorNumberDefault={isColorNumberDefault}
          >
            {numberGames}
          </S.NumberGames>
          <S.Games>{gamesLabel}</S.Games>
        </S.CardsGame>

        <S.CardsGame>
          <S.NumberVictorie>{numberVictories}</S.NumberVictorie>
          <S.Games>{victoriesLabel}</S.Games>
        </S.CardsGame>

        <S.CardsGame>
          <S.NumberDefeats>{numberDefeats}</S.NumberDefeats>
          <S.Games>{defeatsLabel}</S.Games>
        </S.CardsGame>
      </S.CardsGameContainer>
    </S.Container>
  );
};

export default GameDetails;
