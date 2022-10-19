export interface IPlayerDetail {
  player: IPlayer;
  featuredMedal: IFeaturedMedal;
  tournaments: ITournaments;
  lobby: ILobby;
  ranked: IRanked;
  anticheat: IAnticheat;
  reports: IReports[];
  config: IConfig[];
  expertiseProgress: IExpertiseProgress[];
}

interface IPlayer {
  id?: number;
  nickname?: string;
  avatar?: string;
}
interface IFeaturedMedal {
  name?: string;
  image?: string;
}

interface ITournaments {
  label?: string;
  nextTournament?: {
    id?: number;
    name?: string;
    status?: string;
    currentTeams?: number;
    maxTeams?: number;
  };
}

interface ILobby {
  label?: string;
  matches?: number;
  wins?: number;
  losses?: number;
  action: {
    label?: string;
    link?: string;
  };
}

interface IRanked {
  label?: string;
  type?: string;
  matches?: number;
  wins?: number;
  losses?: number;
  action: {
    label?: string;
    link?: string;
  };
}

interface IAnticheat {
  label?: string;
  download?: string;
}

interface IReports {
  type?: string;
  total?: number;
  label?: string;
}

interface IConfig {
  action?: string;
  label?: string;
}

interface IExpertiseProgress {
  key?: string;
  limit?: number;
  label?: string;
}
