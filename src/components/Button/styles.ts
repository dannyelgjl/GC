import styled from "styled-components";
import THEME from "../../styles/theme/theme";

export const Container = styled.button`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.16),
    inset 0px 1px 0px rgba(255, 255, 255, 0.24);
  border-radius: 2px;
  background-color: ${THEME.PRIMARY.YELLOW};
  padding: 12px;

  border-style: none;
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

export const Title = styled.h2`
  font-family: "Teko";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${THEME.NEUTRAL.BLACK};
  text-align: center;
`;
