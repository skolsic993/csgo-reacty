import { Team } from "./Team";

export interface ChampionshipSubscription {
  coach: string;
  leader: string;
  coleader: string;
  team: Team;
  group: 0;
  substitutes: [];
  roster: string[];
  status: string;
}
