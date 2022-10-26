import styled from "styled-components";
import iconGear from "../../assets/icons/gear.png";
import iconDownload from "../../assets/icons/download.png";
import userPlusIcon from "../../assets/icons/userplus.png";
import eyerOffIcon from "../../assets/icons/eyeoff.png";

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

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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

  &:hover {
    opacity: 1;
    transition: 0.5s;
    background: ${THEME.BOX_SHADOW.SHADOW[800]};
  }
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

  &:hover {
    opacity: 1;
    transition: 0.5s;
    background: ${THEME.BOX_SHADOW.SHADOW[800]};
  }
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
  font-family: ${THEME.FONT_FAMILY.POPPINS};
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
