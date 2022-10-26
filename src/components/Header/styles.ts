import styled from "styled-components";
import THEME from "../../styles/theme/theme";

type Logo = {
  logo: string;
  isColor: boolean;
};

export const Container = styled.div<Logo>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1198px;
  height: 128px;
  background: ${({ logo, isColor }) => `
    linear-gradient(
      180deg,
      ${
        isColor
          ? `${THEME.LINEAR_GRADIENT.RED} 0%, ${THEME.LINEAR_GRADIENT.BLACK[20]} 100%`
          : `${THEME.LINEAR_GRADIENT.BLUE} 0%,  ${THEME.LINEAR_GRADIENT.BLACK[20]} 100%`
      }
    ),
    linear-gradient(
    90deg,
    ${THEME.SECONDARY.GRAY[900]} 17.54%,
    ${THEME.LINEAR_GRADIENT.BLACK[800]} 51.46%,
    ${THEME.SECONDARY.GRAY[900]} 82.67%
    ),
    url(${logo}),  ${THEME.SECONDARY.GRAY[900]};
`};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 18px;
`;
