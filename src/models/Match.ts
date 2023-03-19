import { Player } from "./Player";

export interface Match {
  match_id: string;
  game_id: string;
  region: string;
  match_type: string;
  game_mode: string;
  max_players: number;
  teams_size: number;
  teams: {
    ["faction1"]: {
      team_id: string;
      nickname: string;
      avatar: string;
      type: "";
      players: Player[];
      roster?: Player[];
      name?: string;
    };
    faction1: {
      team_id: string;
      nickname: string;
      avatar: string;
      type: "";
      players: Player[];
      roster?: Player[];
      name?: string;
    };
    faction2: {
      team_id: string;
      nickname: string;
      avatar: string;
      type: string;
      players: Player[];
      roaster?: Player[];
    };
  };
  playing_players: string[];
  competition_id: string;
  competition_name: string;
  competition_type: string;
  organizer_id: string;
  status: string;
  started_at: number;
  finished_at: number;
  results: {
    winner: string;
    score: {
      faction2: number;
      faction1: number;
    };
  };
  faceit_url: string;
}
