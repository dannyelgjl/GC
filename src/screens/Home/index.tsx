import { useEffect, useState, useMemo } from "react";
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
  Loading,
} from "../../components";
import iconArrow from "../../assets/icons/arrow.png";
import lobbyIcon from "../../assets/icons/door.png";
import usersIcon from "../../assets/icons/users.png";
import missionsIcon from "../../assets/icons/missions.png";
import pinBlue from "../../assets/icons/pin.png";
import pinRed from "../../assets/icons/pin-red.png";
import missionsIconPro from "../../assets/icons/missions-pro.png";

import ctLogo from "../../assets/logos/ct.png";
import terrorLogo from "../../assets/logos/terror.png";
import { getFallen } from "../../service/fallen";
import { getLizzy } from "../../service/lizzy";

import api from "../../service/api";

import * as S from "./styles";

import { IPlayerDetail } from "./types";

const Home = () => {
  const [player, setPlayer] = useState({} as IPlayerDetail);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [showCheaters, setShowCheaters] = useState<boolean>(true);
  const [changePlayer, setChangePlayer] = useState<boolean>(false);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useMemo(() => {
    const maxTeams = player?.tournaments?.nextTournament?.maxTeams ?? 0;

    const currentTeams = player?.tournaments?.nextTournament?.currentTeams ?? 0;

    const finalValue = (currentTeams * 100) / maxTeams;

    setTotalValue(finalValue);
  }, [
    player?.tournaments?.nextTournament?.currentTeams,
    player?.tournaments?.nextTournament?.maxTeams,
  ]);

  // useEffect(() => {
  //   fetch(
  //     `https://5ee78effffee0c0016a1248e.mockapi.io/api/v1/${
  //       changePlayer ? "fallen" : "lizzy"
  //     }`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setPlayer(data.data))
  //     .catch((err) => console.log(err));
  // }, [changePlayer]);

  useEffect(() => {
    if (changePlayer) {
      getFallen()
        .then((response) => {
          if (response.data) {
            setPlayer(response.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      getLizzy()
        .then((response) => {
          if (response.data) {
            setPlayer(response.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [changePlayer]);

  useEffect(() => {
    setLoading(true);

    if (player.player) {
      setLoading(false);
    }
  }, [player]);

  const handleChangePlayer = () => {
    setChangePlayer(!changePlayer);

    setShowPopover(false);
  };

  const handleShowCheaters = () => {
    setShowCheaters(!showCheaters);
  };

  const handleShowPopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <S.Container>
      {loading ? (
        <Loading type="bars" height={60} width={60} />
      ) : (
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

          <S.Content>
            <S.Wrapper borderRight>
              <Championships
                title={player?.tournaments?.label}
                championshipName={player?.tournaments?.nextTournament?.name}
                status={"Inscrições Abertas"}
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
            </S.Wrapper>

            <S.Wrapper borderRight>
              <GameDetails
                title={player?.lobby?.label}
                icon={lobbyIcon}
                numberGames={player?.lobby?.matches}
                numberVictories={player?.lobby?.wins}
                numberDefeats={player?.lobby?.losses}
                victoriesLabel="Vitórias"
                defeatsLabel="Derrotas"
                gamesLabel="Partidas"
                isColorNumberChange="default"
              />

              <Button
                href={player?.ranked?.action?.link}
                target="_blank"
                title={player?.lobby?.action?.label}
                icon={iconArrow}
                isChangeColor={"default"}
              />
            </S.Wrapper>
            <S.Wrapper>
              <GameDetails
                title={player?.ranked?.label}
                icon={
                  player?.ranked?.type === "pro"
                    ? missionsIconPro
                    : missionsIcon
                }
                numberGames={player?.ranked?.matches}
                numberVictories={player?.ranked?.wins}
                numberDefeats={player?.ranked?.losses}
                victoriesLabel="Vitórias"
                defeatsLabel="Derrotas"
                gamesLabel="Partidas"
                isColorNumberChange={
                  player?.ranked?.type === "pro" ? "red" : "blue"
                }
              />

              <Button
                href={player?.ranked?.action?.link}
                target="_blank"
                title={player?.ranked?.action?.label}
                icon={usersIcon}
                isChangeColor={player?.ranked?.type === "pro" ? "red" : "blue"}
              />
            </S.Wrapper>
          </S.Content>

          <S.Footer>
            <S.ConfigContainer>
              <S.ButtonConfig onClick={() => handleShowPopover()}>
                <S.IconGear />
              </S.ButtonConfig>

              <S.ButtonDownload
                href={
                  !player?.anticheat?.download
                    ? ""
                    : player?.anticheat?.download
                }
                target="_blank"
              >
                <S.DownloadIcon />
                <S.ButtonTitle>Baixar Gamers Club Anti-Cheat</S.ButtonTitle>
              </S.ButtonDownload>
            </S.ConfigContainer>
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
                <>
                  <PlayersStatus
                    showTooltip
                    quantityOnline={
                      player?.reports?.length ? player?.reports[1]?.total : 0
                    }
                    title="Cheaters Banidos"
                    status="Nos últimos 7 dias"
                  />
                </>
              )}
            </S.PlayersStatusContainer>
            <Popover show={showPopover}>
              <S.ChangeAvatarContainer onClick={() => handleChangePlayer()}>
                <S.UserPlusIcon />
                <S.Label>Alterar Avatar</S.Label>
              </S.ChangeAvatarContainer>

              <S.HideCheatersContainer onClick={() => handleShowCheaters()}>
                <S.EyerOffIcon />

                <S.Label>Ocultar Cheaters Banidos</S.Label>
              </S.HideCheatersContainer>
            </Popover>
          </S.Footer>
        </Card>
      )}
    </S.Container>
  );
};

export default Home;
