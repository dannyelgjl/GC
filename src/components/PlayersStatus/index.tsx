import Tooltip from "react-tooltip";
import { IPlayersStatus } from "./types";
import * as S from "./styles";

const PlayersStatus = ({
  quantityOnline,
  isMargin,
  title,
  status,
  colorStatus,
  showTooltip,
}: IPlayersStatus) => {
  return (
    <S.PlayersOnline isMargin={isMargin}>
      <S.QuantityOnline isColor={colorStatus}>
        {quantityOnline}
      </S.QuantityOnline>

      <S.OnlineContainer
        data-tip={
          showTooltip && "Você pode ocultar os cheaters indo nas configurações!"
        }
      >
        <S.Player>{title}</S.Player>
        <S.Online isColor={colorStatus}>{status}</S.Online>

        {showTooltip && <Tooltip />}
      </S.OnlineContainer>
    </S.PlayersOnline>
  );
};

export default PlayersStatus;
