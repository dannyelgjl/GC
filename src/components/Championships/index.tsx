import React from 'react';
import * as S from './styles';

const Championships: React.FC = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TrophyIcon />
        <S.Title>Campeonatos</S.Title>
      </S.TitleContainer>
    
    <S.InscriptionContainer>
      <S.OpenSubscriptions>
        <S.OpenSubscriptionsTitle>
            Inscrições Abertas
        </S.OpenSubscriptionsTitle>
      </S.OpenSubscriptions>

      <S.ChampionshipType>
        LIGA UNIVERSITÁRIA GAMERS CLUB QUALIFIER #1
      </S.ChampionshipType>
      <h1>Times Inscritos</h1>
    </S.InscriptionContainer>
  </S.Container>
  );
}

export default Championships;