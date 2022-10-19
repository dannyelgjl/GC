import styled from "styled-components";
import passIcon from "../../assets/logos/pass.png";
import icon from "../../assets/icons/door.png";
import iconGear from "../../assets/icons/gear.png";
import iconDownload from "../../assets/icons/download.png";
import userPlusIcon from "../../assets/icons/userplus.png";
import eyerOffIcon from "../../assets/icons/eyeoff.png";
import { Link } from "react-router-dom";

import THEME from "../../styles/theme/theme";

type IBorder = {
  borderRight?: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const LevelGamer = styled.div``;

export const Pass = styled.img.attrs({
  src: passIcon,
})`
  width: 60px;
  height: 80px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Icon = styled.img.attrs({
  src: icon,
})`
  width: 18px;
  height: 20px;
  margin-right: 11px;
`;

export const Title = styled.h2`
  font-family: "Teko";
  color: ${THEME.NEUTRAL.WHITE};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
`;

export const CardsGameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const CardsGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 123px;
  height: 92px;
  padding: 8px;
  margin-right: 8px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const NumberGames = styled.h2`
  font-family: "Teko";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: ${THEME.PRIMARY.YELLOW};
`;

export const Games = styled.p`
  font-family: "Teko";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${THEME.NEUTRAL.WHITE};
`;

export const Wrapper = styled.div<IBorder>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  border-right: ${({ borderRight }) =>
    borderRight ? "0.5px solid rgba(255, 255, 255, 0.16)" : ""}; //
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.16);
  padding: 24px 16px 24px 16px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
`;

export const ConfigContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonConfig = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 8px;
  background: #383b51;
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.16),
    inset 0px 1px 0px rgba(255, 255, 255, 0.24);
  border-radius: 2px;
`;

export const ButtonDownload = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-direction: row;

  padding: 12px 24px 12px 24px;

  background: #383b51;
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.16),
    inset 0px 1px 0px rgba(255, 255, 255, 0.24);
  border-radius: 2px;

  border-style: none;
`;

export const ButtonTitle = styled.h2`
  text-align: center;
  color: ${THEME.NEUTRAL.WHITE};

  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
`;

export const IconGear = styled.img.attrs({
  src: iconGear,
})`
  width: 22px;
  height: 22px;
`;

export const DownloadIcon = styled.img.attrs({
  src: iconDownload,
})`
  width: 18px;
  height: 18px;
  margin-right: 12px;
`;

export const PlayersStatusContainer = styled.div`
  display: flex;
`;

export const ChangeAvatarContainer = styled.div`
  display: flex;
  background: #383b51;
  border-style: none;
  outline: none;
  margin-bottom: 18px;
`;

export const UserPlusIcon = styled.img.attrs({
  src: userPlusIcon,
})`
  width: 19px;
  height: 22px;
  margin-right: 16px;
`;

export const Label = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: ${THEME.NEUTRAL.WHITE};
  outline: none;
`;

export const HideCheatersContainer = styled.button`
  display: flex;
  background: #383b51;
  border-style: none;
  margin-bottom: 18px;
`;

export const EyerOffIcon = styled.img.attrs({
  src: eyerOffIcon,
})`
  width: 22px;
  height: 16px;
  margin-right: 16px;
`;
