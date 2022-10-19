import {
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
  useMemo,
} from "react";
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
  SubscribedTeams,
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
  const [changePlayer, setChangePlayer] = useState<boolean>(false);
  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    api
      .get(`/${changePlayer ? "fallen" : "lizzy"}`)
      .then((response) => {
        setPlayer(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [changePlayer]);

  useMemo(() => {
    const maxTeams = player?.tournaments?.nextTournament?.maxTeams ?? 0;

    const currentTeams = player?.tournaments?.nextTournament?.currentTeams ?? 0;

    const finalValue = (currentTeams * 100) / maxTeams;

    setTotalValue(finalValue);
  }, [
    player?.tournaments?.nextTournament?.currentTeams,
    player?.tournaments?.nextTournament?.maxTeams,
  ]);

  const handleChangePlayer = () => {
    setChangePlayer(!changePlayer);
  };

  const handleShowCheaters = () => {
    setShowCheaters(!showCheaters)!;
  };

  const handleShowPopover = () => {
    setShowPopover(!showPopover);
  };

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
            isBarColor
            value={player?.player?.expertise}
          />

          <Medal
            medal={player?.featuredMedal?.image}
            isChangeColor={changePlayer}
          />
        </Header>

        <Content>
          <Wrapper borderRight>
            <div>
              <Championships
                title={player?.tournaments?.label}
                championshipName={player?.tournaments?.nextTournament?.name}
                status={player?.tournaments?.nextTournament?.status}
              >
                <SubscribedTeams
                  subscribedQuantity={
                    player?.tournaments?.nextTournament?.currentTeams
                  }
                  maxParticipants={
                    player?.tournaments?.nextTournament?.maxTeams
                  }
                  value={totalValue}
                  isProgressBar
                />
              </Championships>
              {/* renderComponent={() => <Header />} */}
            </div>
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
              isColorNumberDefault
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
              isColorNumberBlue={player?.ranked?.type === "open"}
              isColorNumberRed={player?.ranked?.type === "pro"}
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
        </Footer>
      </Card>
    </Container>
  );
};

export default Home;
