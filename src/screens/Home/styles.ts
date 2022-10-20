import styled from "styled-components";
import passIcon from "../../assets/logos/pass.png";
import icon from "../../assets/icons/door.png";
import iconGear from "../../assets/icons/gear.png";
import iconDownload from "../../assets/icons/download.png";
import userPlusIcon from "../../assets/icons/userplus.png";
import eyerOffIcon from "../../assets/icons/eyeoff.png";
import eyerIcon from "../../assets/icons/eye-outline.png";

import THEME from "../../styles/theme/theme";

interface IBorder {
  borderRight?: boolean;
}

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
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
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
    ${THEME.LINEAR_GRADIENT.BLACK[400]} 0%,
    ${THEME.LINEAR_GRADIENT.BLACK[700]} 100%
  );
`;

export const NumberGames = styled.h2`
  font-family: "Teko";
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: ${THEME.PRIMARY.YELLOW};
`;

export const Games = styled.p`
  font-family: "Teko";
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${THEME.NEUTRAL.WHITE};
`;

export const Wrapper = styled.div<IBorder>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 33.4%;

  border-right: ${({ borderRight }) =>
    borderRight ? `0.5px solid ${THEME.BORDER.GRAY[600]}` : ""}; //
  border-bottom: 0.5px solid ${THEME.BORDER.GRAY[600]};
  padding: 24px 16px 24px 16px;
`;

export const Footer = styled.div`
  display: flex;
  position: relative;
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
  padding: 10px;
  background: ${THEME.PRIMARY.BACKGROUND};
  box-shadow: 0px 2px 4px ${THEME.BOX_SHADOW.SHADOW[900]},
    0px 4px 8px ${THEME.BOX_SHADOW.SHADOW[900]},
    inset 0px 1px 0px ${THEME.BORDER.GRAY[500]};
  border-radius: 2px;
  outline: none;

  cursor: pointer;
`;

export const ButtonDownload = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-direction: row;

  padding: 12px 24px 12px 24px;

  background: ${THEME.PRIMARY.BACKGROUND};

  box-shadow: 0px 2px 4px ${THEME.BOX_SHADOW.SHADOW[900]},
    0px 4px 8px ${THEME.BOX_SHADOW.SHADOW[900]},
    inset 0px 1px 0px ${THEME.BORDER.GRAY[500]};
  border-radius: 2px;
`;

export const ButtonTitle = styled.h2`
  text-align: center;
  color: ${THEME.NEUTRAL.WHITE};

  font-size: 20px;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
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

export const ChangeAvatarContainer = styled.button`
  display: flex;
  background: ${THEME.PRIMARY.BACKGROUND};
  border-style: none;
  outline: none;
  margin-bottom: 18px;
  cursor: pointer;
`;

export const UserPlusIcon = styled.img.attrs({
  src: userPlusIcon,
})`
  width: 19px;
  height: 22px;
  margin-right: 16px;
`;

export const Label = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  line-height: 22px;
  color: ${THEME.NEUTRAL.WHITE};
  outline: none;
`;

export const HideCheatersContainer = styled.button`
  display: flex;
  background: ${THEME.PRIMARY.BACKGROUND};
  margin-bottom: 18px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const EyerOffIcon = styled.img.attrs({
  src: eyerOffIcon,
})`
  width: 22px;
  height: 16px;
  margin-right: 16px;
`;

export const EyeOutlineIcon = styled.img.attrs({
  src: eyerIcon,
})`
  width: 28px;
  height: 28px;
  margin-right: 16px;
`;
