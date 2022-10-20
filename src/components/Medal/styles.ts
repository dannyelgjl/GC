import styled from "styled-components";
import THEME from "../../styles/theme/theme";

type Color = {
  isChangeColor: boolean;
};

export const Container = styled.div<Color>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60px;
  height: 80px;
  background: ${({ isChangeColor }) => `
    linear-gradient(
      180deg,
      ${
        isChangeColor
          ? `${THEME.LINEAR_GRADIENT.BLACK[20]} 50%, ${THEME.LINEAR_GRADIENT_SECONDARY.RED} 98.7%`
          : `${THEME.LINEAR_GRADIENT.BLACK[30]} 50%, ${THEME.LINEAR_GRADIENT_SECONDARY.BLUE} 98.7%)`
      }
      
    )#1c1d2c,
  `};
  border: 1px solid
    ${({ isChangeColor }) =>
      isChangeColor ? `${THEME.BORDER.RED}` : `${THEME.BORDER.BLUE}`};
  box-shadow: 0px 2px 4px ${THEME.BOX_SHADOW.SHADOW[800]};
  border-radius: 2px;
`;

export const Line = styled.div<Color>`
  width: 100%;
  height: 1px;
  border: 1px dashed
    ${({ isChangeColor }) =>
      isChangeColor ? `${THEME.BORDER.RED}` : `${THEME.BORDER.BLUE}`};
  margin-top: 8px;
`;

export const MedalIcon = styled.img`
  width: 56px;
  height: 56px;
`;
