import { useEffect, useState, useCallback } from "react";
import {
  Card,
  Avatar,
  Championships,
  Button,
  GameDetails,
  Header,
  ProgressBar,
  Medal,
  PlayersStatus,
  Popover,
} from "../../components";
import iconArrow from "../../assets/icons/arrow.png";
import lobbyIcon from "../../assets/icons/door.png";
import usersIcon from "../../assets/icons/users.png";
import missionsIcon from "../../assets/icons/missions.png";
import pinBlue from "../../assets/icons/pin.png";
import pinRed from "../../assets/icons/pin-red.png";
import missionsIconPro from "../../assets/icons/missions-pro.png";
import {
  Container,
  Content,
  Wrapper,
  Footer,
  ConfigContainer,
  ButtonConfig,
  IconGear,
  ButtonDownload,
  ButtonTitle,
  DownloadIcon,
} from "./styles";
import ctLogo from "../../assets/logos/ct.png";
import terrorLogo from "../../assets/logos/terror.png";
import * as S from "./styles";
import api from "../../service/api";

import { IPlayerDetail } from "./types";

const Home = () => {
  const [player, setPlayer] = useState({} as IPlayerDetail);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [showCheaters, setShowCheaters] = useState<boolean>(true);
  const [changePlayer, setChangePlayer] = useState(false);

  useEffect(() => {
    api
      .get(`/${changePlayer ? "fallen" : "lizzy"}`)
      .then((response) => {
        setPlayer(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [changePlayer]);

  const handleChangePlayer = () => {
    setChangePlayer(!changePlayer);
  };

  const handleShowCheaters = () => {
    setShowCheaters(!showCheaters)!;
  };

  const handleShowPopover = () => {
    setShowPopover(!showPopover);
  };

  // const rankedLevel = ({ typeRanked }: string) => {
  //   const ranked = player?.ranked?.type === typeRanked;

  //   return ranked;
  // };

  const handleOpenLobby = useCallback(() => {
    window.open(player?.lobby?.action?.link, "_blank");
  }, [player?.lobby?.action?.link]);

  const handleOpenRanked = useCallback(() => {
    window.open(player?.ranked?.action?.link, "_blank");
  }, [player?.ranked?.action?.link]);

  return (
    <Container>
      <Card>
        <Header
          isColor={changePlayer}
          logo={changePlayer ? terrorLogo : ctLogo}
        >
          <Avatar
            avatar={player?.player?.avatar}
            nickname={player?.player?.nickname}
            id={`ID: ${player?.player?.id}`}
          />

          <ProgressBar
            isChangeColor={changePlayer}
            pinIcon={changePlayer ? pinRed : pinBlue}
          />

          <Medal
            medal={player?.featuredMedal?.image}
            isChangeColor={changePlayer}
          />
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

            <Button
              onClick={() => handleOpenLobby()}
              title={player?.lobby?.action?.label}
              icon={iconArrow}
              isChangeColor
            />
          </Wrapper>
          <Wrapper>
            <GameDetails
              title={player?.ranked?.label}
              icon={
                player?.ranked?.type === "pro" ? missionsIconPro : missionsIcon
              }
              numberGames={player?.ranked?.matches}
              numberVictories={player?.ranked?.wins}
              numberDefeats={player?.ranked?.losses}
              victoriesLabel="Vitória"
              defeatsLabel="Derrotas"
              gamesLabel="Partidas"
            />

            <Button
              onClick={() => handleOpenRanked()}
              title={player?.ranked?.action?.label}
              icon={usersIcon}
              isChangeColorPro={player?.ranked?.type === "pro"}
              isChangeColorOpen={player?.ranked?.type === "open"}
            />
          </Wrapper>
        </Content>

        <Footer>
          <ConfigContainer>
            <ButtonConfig onClick={() => handleShowPopover()}>
              <IconGear />
            </ButtonConfig>

            <ButtonDownload
              href={
                !player?.anticheat?.download ? "" : player?.anticheat?.download
              }
              target="_blank"
            >
              <DownloadIcon />
              <ButtonTitle>Baixar Gamers Club Anti-Cheat</ButtonTitle>
            </ButtonDownload>
          </ConfigContainer>

          <S.PlayersStatusContainer>
            <PlayersStatus
              colorStatus
              quantityOnline={
                player?.reports?.length ? player?.reports[0]?.total : 0
              }
              title="Jogadores"
              status="Online"
              isMargin
            />

            {showCheaters && (
              <PlayersStatus
                quantityOnline={
                  player?.reports?.length ? player?.reports[1]?.total : 0
                }
                title="Cheaters Banidos"
                status="Nos últimos 7 dias"
              />
            )}
          </S.PlayersStatusContainer>
        </Footer>
      </Card>

      <Popover show={showPopover}>
        <S.ChangeAvatarContainer onClick={() => handleChangePlayer()}>
          <S.UserPlusIcon />
          <S.Label to="">Alterar Avatar</S.Label>
        </S.ChangeAvatarContainer>

        <S.HideCheatersContainer onClick={() => handleShowCheaters()}>
          <S.EyerOffIcon />

          <S.Label to="">Ocultar Cheaters Banidos</S.Label>
        </S.HideCheatersContainer>
      </Popover>
    </Container>
  );
};

export default Home;
