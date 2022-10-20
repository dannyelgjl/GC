import styled from "styled-components";
import THEME from "../../styles/theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  border-radius: 2px;
  border: 1px solid ${THEME.BORDER.GRAY[700]};
  box-shadow: 0px 16px 32px ${THEME.BOX_SHADOW.SHADOW[800]},
    0px 8px 16px ${THEME.BOX_SHADOW.SHADOW[800]};
  background: ${THEME.SECONDARY.BLACK};
`;
