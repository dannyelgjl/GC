import styled from "styled-components";
import THEME from "../../styles/theme/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 48px;
  height: 48px;
  padding: 2px;
  border-radius: 24px;
  border: 2px solid ${THEME.PRIMARY.GREEN};
  margin-right: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 110px;
`;

export const NickName = styled.h2`
  font-size: 16px;
  color: ${THEME.NEUTRAL.WHITE};
  font-family: "Poppins";
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  line-height: 24px;
`;

export const ID = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${THEME.FONT_WEIGHT.SEMI_BOLD};
  font-size: 12px;
  line-height: 20px;
  color: ${THEME.NEUTRAL.GRAY_RGBA};
`;
