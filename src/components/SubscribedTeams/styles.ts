import styled from "styled-components";
import THEME from "../../styles/theme/theme";

interface IBar {
  value?: number;
  isProgressBar?: boolean;
}

export const Container = styled.div`
  margin-top: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  font-family: "Poppins";
  line-height: 20px;
`;

export const ContainerQuantity = styled.div`
  display: flex;
`;

export const ContainerBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 16px;
`;

export const Bar = styled.div<IBar>`
  width: ${({ value, isProgressBar }) => isProgressBar && `${value}%`};
  height: 10px;
  background: linear-gradient(90deg, #5968f8 0%, #49a3fd 100%);

  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16),
    inset 0px 1px 0px rgba(255, 255, 255, 0.24);
  border-radius: 16px;
`;

export const SubscribedQuantity = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 12px;
  line-height: 20px;
  color: ${THEME.NEUTRAL.WHITE};
`;

export const MaxParticipants = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.REGULAR};
  font-size: 12px;
  line-height: 20px;

  color: rgba(255, 255, 255, 0.48);
`;
