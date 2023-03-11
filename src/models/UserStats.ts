import { Segment } from "./Segment";

export interface UserStats {
  player_id: string;
  game_id: string;
  lifetime: {
    totalHeadshot: string;
    headshot: string;
    longestWin: string;
    currentWin: string;
    kD: string;
    average: string;
    recentResults: string[];
    matches: string;
    Wins: string;
  };
  segments: Segment[];
}
