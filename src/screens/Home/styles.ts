import styled from 'styled-components';
import logo from '../../assets/logos/ct1.png';
import passIcon from '../../assets/logos/pass.png';
import THEME from '../../styles/theme/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 128px;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(180deg, rgba(73, 163, 253, 0.16) 0%, rgba(73, 163, 253, 0) 100%), linear-gradient(90deg, #212335 17.54%, rgba(33, 35, 53, 0.64) 51.46%, #212335 82.67%), url(${logo}), #212335;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 18px;
`;

export const AvantarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img.attrs({
  src: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ac/ac6fd3610257492db106bc30892bf213aa4a0689_full.jpg'
})`
  width: 48px;
  height: 48px;
  padding: 2px;
  border-radius: 24px;
  border: 2px solid ${THEME.PRIMARY.GREEN};
  margin-right: 16px
`;

export const UserInfor = styled.div`
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

export const LevelGamer = styled.div``

export const Pass = styled.img.attrs({
  src: passIcon,
})`
  width: 60px;
  height: 80px;
`;