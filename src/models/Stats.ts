import { Team } from "./Team";

export interface Stats {
  best_of?: string;
  competition_id?: number | string;
  game_id?: string;
  game_mode?: string;
  match_id?: string;
  match_round?: string;
  played?: string;
  round_stats?: {
    Map?: string;
    Winner?: string;
    Region?: string;
    Rounds?: string;
    Score?: string;
  };
  teams: Team[];
}
