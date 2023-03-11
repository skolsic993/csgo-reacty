export interface Segment {
  mode: string;
  label: string;
  img_small: string;
  img_regular: string;
  stats: {
    winRate: string;
    assists: string;
    headshotPerMatch: string;
    averageTriples: string;
    averageRampages: string;
    averageKdRatio: string;
    averageAssists: string;
    averageQuadro: string;
    averageDeaths: string;
    triple: string;
    quadro: string;
    totalHeadshots: string;
    rounds: string;
    kdRatio: string;
    headshots: string;
    deaths: string;
    mvp: string;
    wins: string;
    mvps: string;
    kd: string;
    kills: string;
    averageKd: string;
    averageKills: string;
    averageHeadshots: string;
    mtches: string;
    rampages: string;
  };
  type: string;
}
