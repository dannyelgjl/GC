import styled from "styled-components";
import THEME from "../../styles/theme/theme";
import trophyIcon from "../../assets/icons/trophy.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const TrophyIcon = styled.img.attrs({
  src: trophyIcon,
})`
  width: 18px;
  height: 20px;
  margin-right: 11px;
`;

export const Title = styled.h2`
  font-family: ${THEME.FONT_FAMILY.TEKO};
  color: ${THEME.NEUTRAL.WHITE};
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
`;

export const InscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: ${THEME.SECONDARY.BLACK};
  border: 1px solid ${THEME.BORDER.GRAY[600]};
  border-radius: 2px;
  margin-top: 16px;
`;

export const OpenSubscriptions = styled.div`
  width: 48%;
  border: 1px solid ${THEME.PRIMARY.GREEN};
  padding: 2px 18px 2px 18px;
  border-radius: 2px;
`;

export const OpenSubscriptionsTitle = styled.p`
  font-family: ${THEME.FONT_FAMILY.POPPINS};
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  font-size: 12px;
  line-height: 16px;
  color: ${THEME.PRIMARY.GREEN};
  text-align: center;
`;

export const ChampionshipType = styled.h2`
  height: 50px;
  margin-top: 20px;
  font-family: ${THEME.FONT_FAMILY.TEKO};
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 24px;
  line-height: 24px;
`;
