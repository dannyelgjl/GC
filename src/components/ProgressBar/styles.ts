import styled from "styled-components";
import THEME from "../../styles/theme/theme";

type IRotate = {
  rotatePin?: boolean;
};

type Color = {
  isChangeColor: boolean;
  isBarColor?: boolean;
  value?: number;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ContainerBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 16px;
  background: ${THEME.PRIMARY.PRIMARY};
  border-radius: 16px;
  box-shadow: 0px 1px 0px ${THEME.LINEAR_GRADIENT.BLACK[400]},
    inset 0px 2px 4px ${THEME.BOX_SHADOW.SHADOW[900]};
  padding: 4px;
`;

export const Bar = styled.div<Color>`
  width: ${({ isBarColor, value }) => isBarColor && `${value}%`};
  height: 8px;
  border-radius: 16px;
  background: ${({ isChangeColor }) => `
    ${
      isChangeColor
        ? `linear-gradient(90deg, ${THEME.SECONDARY.LIGHT_RED} 0%, ${THEME.PRIMARY.RED} 100%)`
        : `linear-gradient(90deg, ${THEME.BORDER.BLUE} 0%, ${THEME.SECONDARY.BLUE} 100%)`
    }
  `};
  border: 1px solid ${THEME.BORDER.GRAY[700]};
  box-shadow: 0px 2px 4px ${THEME.BOX_SHADOW.SHADOW[900]},
    inset 0px 1px 0px ${THEME.BORDER.GRAY[500]};
`;

export const LevelTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 4px;
`;

export const LevelBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
  width: 60%;
  padding: 4px;
`;

export const Pin = styled.img`
  height: 22px;
  width: 18px;
  ${({ rotatePin }: IRotate) =>
    rotatePin ? "transform:rotate(180deg)" : "none"}
`;

export const WrapperLevel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const TitleLevel = styled.h2`
  margin-right: 8px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  line-height: 20px;
`;
