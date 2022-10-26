import { IChampionships } from "./types";
import * as S from "./styles";

const Championships = ({
  title,
  status,
  championshipName,
  children,
}: IChampionships) => {
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
        <div>{children}</div>
      </S.InscriptionContainer>
    </S.Container>
  );
};

export default Championships;
