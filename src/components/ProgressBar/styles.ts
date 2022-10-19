import styled from "styled-components";
import pinIcon from "../../assets/icons/pin.png";
import THEME from "../../styles/theme/theme";

type IRotate = {
  rotatePin?: boolean;
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
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.04),
    inset 0px 2px 4px rgba(0, 0, 0, 0.16);
  padding: 4px;
`;

export const Bar = styled.div`
  width: 50%;
  height: 8px;
  border-radius: 16px;
  background: linear-gradient(90deg, #49a3fd 0%, #61b3fa 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16),
    inset 0px 1px 0px rgba(255, 255, 255, 0.24);
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

export const Pin = styled.img.attrs({
  src: pinIcon,
})`
  height: 22 px;
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
  font-weight: 400;
  line-height: 20px;
`;
