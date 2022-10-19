import { IPlayersStatus } from "./types";
import * as S from "./styles";

const PlayersStatus = ({
  quantityOnline,
  isMargin,
  title,
  status,
  colorStatus,
}: IPlayersStatus) => {
  return (
    <S.PlayersOnline isMargin={isMargin}>
      <S.QuantityOnline isColor={colorStatus}>
        {quantityOnline}
      </S.QuantityOnline>

      <S.OnlineContainer>
        <S.Player>{title}</S.Player>
        <S.Online isColor={colorStatus}>{status}</S.Online>
      </S.OnlineContainer>
    </S.PlayersOnline>
  );
};

export default PlayersStatus;
