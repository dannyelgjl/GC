import { useEffect, useState } from "react";
import {
  Card,
  Avatar,
  Championships,
  Button,
  GameDetails,
  Header,
  ProgressBar,
  Medal,
} from "../../components";
import iconArrow from "../../assets/icons/arrow.png";
import lobbyIcon from "../../assets/icons/door.png";
import usersIcon from "../../assets/icons/users.png";
import missionsIcon from "../../assets/icons/missions.png";
import {
  Container,
  Content,
  Wrapper,
  Footer,
  ConfigContainer,
  PlayersOnlineContainer,
  ButtonConfig,
  IconGear,
  ButtonDownload,
  ButtonTitle,
  DownloadIcon,
} from "./styles";
import api from "../../service/api";
import { IPlayerDetail } from "./types";

const Home = () => {
  const [player, setPlayer] = useState({} as IPlayerDetail);

  console.log(player);

  useEffect(() => {
    api.get("/fallen").then((response) => {
      setPlayer(response.data.data);
    });
  }, []);
  // |
  return (
    <Container>
      <Card>
        <Header>
          <Avatar
            avatar={player?.player?.avatar}
            nickname={player?.player?.nickname}
            id={`ID: ${player?.player?.id}`}
          />

          <ProgressBar />

          <Medal medal={player?.featuredMedal?.image} />
        </Header>

        <Content>
          <Wrapper borderRight>
            <Championships
              title={player?.tournaments?.label}
              championshipName={player?.tournaments?.nextTournament?.name}
              status={player?.tournaments?.nextTournament?.status}
            />
          </Wrapper>

          <Wrapper borderRight>
            <GameDetails
              title={player?.lobby?.label}
              icon={lobbyIcon}
              numberGames={player?.lobby?.matches}
              numberVictories={player?.lobby?.wins}
              numberDefeats={player?.lobby?.losses}
              victoriesLabel="Vitória"
              defeatsLabel="Derrotas"
              gamesLabel="Partidas"
            />

            <Button title={player?.lobby?.action?.label} icon={iconArrow} />
          </Wrapper>
          <Wrapper>
            <GameDetails
              title={player?.ranked?.label}
              icon={missionsIcon}
              numberGames={player?.ranked?.matches}
              numberVictories={player?.ranked?.wins}
              numberDefeats={player?.ranked?.losses}
              victoriesLabel="Vitória"
              defeatsLabel="Derrotas"
              gamesLabel="Partidas"
            />

            <Button title={player?.ranked?.action?.label} icon={usersIcon} />
          </Wrapper>
        </Content>

        <Footer>
          <ConfigContainer>
            <ButtonConfig>
              <IconGear />
            </ButtonConfig>

            <ButtonDownload>
              <DownloadIcon />
              <ButtonTitle>Baixar Gamers Club Anti-Cheat</ButtonTitle>
            </ButtonDownload>
          </ConfigContainer>

          <PlayersOnlineContainer>
            <h1>daniel</h1>
          </PlayersOnlineContainer>
        </Footer>
      </Card>
    </Container>
  );
};

export default Home;
