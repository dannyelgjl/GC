import styled from 'styled-components';
import THEME from '../../styles/theme/theme';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const UserAvatar = styled.img.attrs({
  src: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ac/ac6fd3610257492db106bc30892bf213aa4a0689_full.jpg'
})`
  width: 48px;
  height: 48px;
  padding: 2px;
  border-radius: 24px;
  border: 2px solid ${THEME.PRIMARY.GREEN};
  margin-right: 16px
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NickName = styled.h2`
  font-size: 16px;
  color: ${THEME.NEUTRAL.WHITE};
  font-family: 'Poppins';
  font-weight: 500;
  line-height: 24px;
`

export const ID = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.48);
`;