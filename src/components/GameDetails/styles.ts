import styled, { css } from "styled-components";
import THEME from "../../styles/theme/theme";

type Color = {
  isColorNumberChange?: "default" | "red" | "blue";
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Icon = styled.img`
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

export const NumberGames = styled.h2<Color>`
  font-family: ${THEME.FONT_FAMILY.TEKO};
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;

  ${({ isColorNumberChange }) =>
    isColorNumberChange === "default" &&
    css`
      color: ${THEME.PRIMARY.YELLOW};
    `}

  ${({ isColorNumberChange }) =>
    isColorNumberChange === "blue" &&
    css`
      color: ${THEME.PRIMARY.BLUE};
    `}

  ${({ isColorNumberChange }) =>
    isColorNumberChange === "red" &&
    css`
      color: ${THEME.SECONDARY.RED};
    `}
`;

export const NumberVictorie = styled.h2`
  font-family: ${THEME.FONT_FAMILY.TEKO};
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: ${THEME.PRIMARY.GREEN};
`;

export const NumberDefeats = styled.h2`
  font-family: ${THEME.FONT_FAMILY.TEKO};
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: ${THEME.PRIMARY.RED};
`;

export const Games = styled.p`
  font-family: ${THEME.FONT_FAMILY.TEKO};
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${THEME.NEUTRAL.WHITE};
`;
