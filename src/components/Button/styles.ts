import styled, { css } from "styled-components";
import THEME from "../../styles/theme/theme";

type Color = {
  isChangeColor?: "default" | "blue" | "red";
};

export const Container = styled.a<Color>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  border: 1px solid ${THEME.BORDER.GRAY[600]};
  box-shadow: 0px 2px 4px ${THEME.BOX_SHADOW.SHADOW[900]},
    0px 4px 8px ${THEME.BOX_SHADOW.SHADOW[900]},
    inset 0px 1px 0px ${THEME.BORDER.GRAY[500]};
  border-radius: 2px;
  border-style: none;

  cursor: pointer;

  ${({ isChangeColor }) =>
    isChangeColor === "default" &&
    css`
      background-color: ${THEME.PRIMARY.YELLOW};

      &:hover {
        opacity: 1;
        transition: 0.5s;
        background: ${THEME.RGB.YELLOW};
      }
    `}

  ${({ isChangeColor }) =>
    isChangeColor === "red" &&
    css`
      background-color: ${THEME.SECONDARY.RED};

      &:hover {
        opacity: 1;
        transition: 0.5s;
        background: ${THEME.RGB.RED};
      }
    `}

    ${({ isChangeColor }) =>
    isChangeColor === "blue" &&
    css`
      background-color: ${THEME.PRIMARY.BLUE};

      &:hover {
        opacity: 1;
        transition: 0.8s;
        background: ${THEME.RGB.BLUE};
      }
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 19px;
  height: 19px;
  margin-right: 11px;
`;

export const Title = styled.h2<Color>`
  font-family: "Teko";
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ isChangeColor }) =>
    isChangeColor === "default"
      ? ` ${THEME.NEUTRAL.BLACK}`
      : ` ${THEME.NEUTRAL.WHITE}`};

  text-align: center;
`;
