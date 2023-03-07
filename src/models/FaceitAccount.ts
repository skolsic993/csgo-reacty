export interface FaceitAccount {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  cover_image: string;
  games: {
    csgo: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
    };
  };
  settings: {
    language: string;
  };
  friends_ids: string[];
  steam_id_64: string;
  steam_nickname: string;
  memberships: string[];
  faceit_url: string;
  membership_type: string;
}
