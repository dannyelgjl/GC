import styled, { css } from "styled-components";
import THEME from "../../styles/theme/theme";

type Color = {
  isChangeColor?: boolean;
  isChangeColorPro?: boolean;
  isChangeColorOpen?: boolean;
};

export const Container = styled.a<Color>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.16),
    inset 0px 1px 0px rgba(255, 255, 255, 0.24);
  border-radius: 2px;
  border-style: none;

  cursor: pointer;

  ${({ isChangeColor }) =>
    isChangeColor &&
    css`
      background-color: ${THEME.PRIMARY.YELLOW};

      &:hover {
        opacity: 1;
        transition: 0.5s;
        background: rgb(198, 162, 69);
      }
    `}

  ${({ isChangeColorPro }) =>
    isChangeColorPro &&
    css`
      background-color: ${THEME.SECONDARY.RED};

      &:hover {
        opacity: 1;
        transition: 0.5s;
        background: rgb(183, 49, 56);
      }
    `}

    ${({ isChangeColorOpen }) =>
    isChangeColorOpen &&
    css`
      background-color: ${THEME.PRIMARY.BLUE};

      &:hover {
        opacity: 1;
        transition: 0.8s;
        background: rgb(26, 104, 173);
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
    isChangeColor ? ` ${THEME.NEUTRAL.BLACK}` : ` ${THEME.NEUTRAL.WHITE}`};

  text-align: center;
`;
