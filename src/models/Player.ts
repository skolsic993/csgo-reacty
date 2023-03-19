export interface Player {
  player_id: string;
  nickname: string;
  avatar: string;
  skill_level: number;
  game_player_id: string;
  game_player_name: string;
  faceit_url: string;
  player_stats: {
    nick: string;
    ["Result"]: string;
    ["Headshots"]: string;
    ["Assists"]: string;
    ["K/R Ratio"]: string;
    ["Deaths"]: string;
    ["Quadro Kills"]: string;
    ["K/D Ratio"]: string;
    ["Triple Kills"]: string;
    ["Headshots %"]: string;
    ["MVPs"]: string;
    ["Kills"]: string;
    ["Penta Kills"]: string;
  };
}
