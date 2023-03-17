import { Segment } from "./Segment";

export interface UserStats {
  player_id: string;
  game_id: string;
  lifetime: {
    ["Wins"]: string;
    ["Win Rate %"]: string;
    ["Average K/D Ratio"]: string;
    ["Average Headshots %"]: string;
    ["Current Win Streak"]: string;
    ["Longest Win Streak"]: string;
    ["Matches"]: string;
    ["Recent Results"]: string[];
    ["K/D Ratio"]: string;
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
