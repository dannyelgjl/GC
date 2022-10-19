import styled from "styled-components";
import passIcon from "../../assets/logos/pass.png";
import icon from "../../assets/icons/door.png";
import THEME from "../../styles/theme/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const LevelGamer = styled.div``;

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
  font-family: "Teko";
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
  margin-top: 16px;
`;

export const CardsGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 123px;
  height: 92px;
  padding: 8px;
  margin-right: 8px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const NumberGames = styled.h2`
  font-family: "Teko";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: ${THEME.PRIMARY.YELLOW};
`;

export const Games = styled.p`
  font-family: "Teko";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${THEME.NEUTRAL.WHITE};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.16);
  border-right: 0.5px solid rgba(255, 255, 255, 0.16);
  padding: 24px 16px 24px 16px;
`;
