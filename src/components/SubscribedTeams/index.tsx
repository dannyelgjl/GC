import { ISubscribedTeams } from "./types";
import * as S from "./styles";

const SubscribedTeams = ({
  subscribedQuantity,
  maxParticipants,
  isProgressBar,
  value,
}: ISubscribedTeams) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Times Inscritos</S.Title>

        <S.ContainerQuantity>
          <S.SubscribedQuantity>{subscribedQuantity}</S.SubscribedQuantity>
          <S.MaxParticipants>/{maxParticipants}</S.MaxParticipants>
        </S.ContainerQuantity>
      </S.Content>

      <S.ContainerBar>
        <S.Bar value={value} isProgressBar={isProgressBar} />
      </S.ContainerBar>
    </S.Container>
  );
};

export default SubscribedTeams;
