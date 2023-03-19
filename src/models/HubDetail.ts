export interface HubDetail {
  hub_id: string;
  name: string;
  avatar: string;
  cover_image: string;
  background_image: string;
  game_id: string;
  region: string;
  description: string;
  chat_room_id: string;
  organizer_id: string;
  rule_id: string;
  players_joined: number;
  min_skill_level: number;
  max_skill_level: number;
  join_permission: string;
  faceit_url: string;
}
