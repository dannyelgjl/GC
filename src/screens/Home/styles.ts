import styled from 'styled-components';
import logo from '../../assets/logos/ct1.png';
import passIcon from '../../assets/logos/pass.png';
import icon from '../../assets/icons/door.png';
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
  background: linear-gradient(180deg, rgba(73, 163, 253, 0.16) 0%, rgba(73, 163, 253, 0) 100%), linear-gradient(90deg, #212335 17.54%, rgba(33, 35, 53, 0.64) 51.46%, #212335 82.67%), url(${logo}), #212335;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 18px;
`;

export const LevelGamer = styled.div``

export const Pass = styled.img.attrs({
  src: passIcon,
})`
  width: 60px;
  height: 80px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GameDetailContainer = styled.div`
  display: flex;
  width: 33.3%;
  flex-direction: column;
  padding: 24px 16px 24px 16px;
  border: 0.5px solid rgba(255, 255, 255, 0.16);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Icon = styled.img.attrs({
  src: icon,
})`
  width: 18px;
  height: 20px;
  margin-right: 11px;
`;

export const Title = styled.h2`
  font-family: 'Teko';
  color: ${THEME.NEUTRAL.WHITE};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
`;

export const CardsGameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px
`;

export const CardsGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 123px;
  height: 92px;
  padding: 8px;
  margin-right: 8px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%);
`;

export const NumberGames = styled.h2`
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: ${THEME.PRIMARY.YELLOW};
`;

export const Games = styled.p`
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${THEME.NEUTRAL.WHITE};
`;