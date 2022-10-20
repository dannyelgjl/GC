import styled from "styled-components";
import THEME from "../../styles/theme/theme";

type IMargin = {
  isMargin?: boolean;
};

type IColor = {
  isColor?: boolean;
};

export const PlayersOnline = styled.div<IMargin>`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-right: ${({ isMargin }) => (isMargin ? "24px" : 0)};
`;

export const OnlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const QuantityOnline = styled.p<IColor>`
  margin-right: 8px;
  color: ${({ isColor }) =>
    isColor ? `${THEME.PRIMARY.BLUE}` : `${THEME.SECONDARY.LIGHT_RED}`};

  font-size: 24px;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  line-height: 24px;
`;

export const Online = styled.p<IColor>`
  color: ${({ isColor }) =>
    isColor ? `${THEME.PRIMARY.BLUE}` : `${THEME.SECONDARY.LIGHT_RED}`};

  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
`;

export const Player = styled.p`
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
`;
