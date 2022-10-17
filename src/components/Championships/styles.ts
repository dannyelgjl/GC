import styled from 'styled-components';
import THEME from '../../styles/theme/theme';
import trophyIcon from '../../assets/icons/trophy.png';


export const Container = styled.div`
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

export const TrophyIcon = styled.img.attrs({
  src: trophyIcon,
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

export const InscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 2px;
  margin-top: 16px;
`;

export const OpenSubscriptions = styled.div`
  width: 48%;
  border: 1px solid ${THEME.PRIMARY.GREEN};
  padding: 2px 18px 2px 18px;
  border-radius: 2px;
`;

export const OpenSubscriptionsTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${THEME.PRIMARY.GREEN};
  text-align: center;
`;

export const ChampionshipType = styled.h2`
  margin-top: 20px;
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
`;