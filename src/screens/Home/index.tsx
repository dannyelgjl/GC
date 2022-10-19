import {
  Card,
  Avatar,
  Championships,
  Button,
  GameDetails,
  Header,
  ProgressBar,
} from "../../components";
import iconArrow from "../../assets/icons/arrow.png";
import lobbyIcon from "../../assets/icons/door.png";
import usersIcon from "../../assets/icons/users.png";
import missionsIcon from "../../assets/icons/missions.png";
import { Container, Pass, Content, Wrapper } from "./styles";

const Home = () => {
  return (
    <Container>
      <Card>
        <Header>
          <Avatar nickname="GC.Muleklizzo" id="ID: 737335" />

          <ProgressBar />

          <Pass />
        </Header>

        <Content>
          <Wrapper>
            <Championships />
          </Wrapper>

          <Wrapper>
            <GameDetails
              title="Lobby"
              icon={lobbyIcon}
              numberGames={542}
              numberVictories={309}
              victoriesLabel="Vitória"
              numberDefeats={233}
              defeatsLabel="Derrotas"
              gamesLabel="Partidas"
            />

            <Button title="Ir para o lobby" icon={iconArrow} />
          </Wrapper>
          <Wrapper>
            <GameDetails
              title="Ranked open"
              icon={missionsIcon}
              numberGames={542}
              numberVictories={309}
              victoriesLabel="Vitória"
              numberDefeats={233}
              defeatsLabel="Derrotas"
              gamesLabel="Partidas"
            />

            <Button title="Ir para o lobby" icon={usersIcon} />
          </Wrapper>
        </Content>
      </Card>
    </Container>
  );
};

export default Home;
