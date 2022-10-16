import { Card, Avatar, Championships, Button } from '../../components';
import iconArrow from '../../assets/icons/arrow.png';
import {
  Container, 
  Header, 
  LevelGamer, 
  Pass, 
  Content, 
  GameDetailContainer,
  TitleContainer,
  Title,
  Icon,
  CardsGameContainer,
  CardsGame,
  NumberGames,
  Games,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Card>
        <Header>
          <Avatar nickname='GC.Muleklizzo' id='ID: 737335'/>

          <LevelGamer>
            <h1>Daniel</h1>
          </LevelGamer>

          <Pass />
        </Header>

        <Content>
          <Championships />

          <GameDetailContainer>
            <TitleContainer>
              <Icon />
              <Title>Lobby</Title>
            </TitleContainer>

            <CardsGameContainer>
              <CardsGame>
                  <NumberGames>540</NumberGames>
                  <Games>Partidas</Games>
              </CardsGame>

              <CardsGame>
                  <NumberGames>540</NumberGames>
                  <Games>Partidas</Games>
              </CardsGame>

              <CardsGame>
                  <NumberGames>540</NumberGames>
                  <Games>Partidas</Games>
              </CardsGame>
            </CardsGameContainer>
            <Button icon={iconArrow} title='Ir para a Lobby'/>
          </GameDetailContainer>


          <Championships />
        </Content>
      </Card>
    </Container>
  );
}

export default Home;