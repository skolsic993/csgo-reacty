import { Member } from "./Member";

export interface Team {
  team_id: string;
  nickname: string;
  name: string;
  description: string;
  avatar: string;
  cover_image: string;
  game: string;
  team_type: string;
  members: Member[];
  leader: string;
  website: string;
  facebook: string;
  twitter: string;
  youtube: string;
  chat_room_id: string;
  faceit_url: string;
}
