import React from "react";
import * as S from "./styles";

interface IChampionships {
  title?: string;
  championshipName?: string;
  status?: string;
}

const Championships = ({ title, status, championshipName }: IChampionships) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TrophyIcon />
        <S.Title>{title}</S.Title>
      </S.TitleContainer>

      <S.InscriptionContainer>
        <S.OpenSubscriptions>
          <S.OpenSubscriptionsTitle>{status}</S.OpenSubscriptionsTitle>
        </S.OpenSubscriptions>

        <S.ChampionshipType>{championshipName}</S.ChampionshipType>
        <h1>Times Inscritos</h1>
      </S.InscriptionContainer>
    </S.Container>
  );
};

export default Championships;
