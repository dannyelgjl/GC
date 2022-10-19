import styled, { css } from "styled-components";
import THEME from "../../styles/theme/theme";

type Color = {
  isColorNumberDefault?: boolean;
  isColorNumberRed?: boolean;
  isColorNumberBlue?: boolean;
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

export const NumberGames = styled.h2<Color>`
  font-family: "Teko";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;

  ${({ isColorNumberDefault }) =>
    isColorNumberDefault &&
    css`
      color: ${THEME.PRIMARY.YELLOW};
    `}

  ${({ isColorNumberBlue }) =>
    isColorNumberBlue &&
    css`
      color: ${THEME.PRIMARY.BLUE};
    `}

  ${({ isColorNumberRed }) =>
    isColorNumberRed &&
    css`
      color: ${THEME.SECONDARY.RED};
    `}
`;

export const NumberVictorie = styled.h2`
  font-family: "Teko";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: ${THEME.PRIMARY.GREEN};
`;

export const NumberDefeats = styled.h2`
  font-family: "Teko";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: ${THEME.PRIMARY.RED};
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
