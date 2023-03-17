export interface Championship {
  id: string;
  championship_id: string;
  name: string;
  cover_image: string;
  background_image: string;
  avatar: string;
  organizer_id: string;
  description: string;
  type: string;
  status: string;
  game_id: string;
  region: string;
  featured: boolean;
  subscription_start: number;
  checkin_start: number;
  checkin_clear: number;
  subscription_end: number;
  championship_start: number;
  slots: number;
  current_subscriptions: number;
  total_prizes: number;
}
