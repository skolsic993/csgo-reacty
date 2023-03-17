import { UserStats } from "@/models/UserStats";
import UserStatsCard from "../user-stats-card/user-stats-card";

export const UserStatistics = ({ userStats }: { userStats: UserStats }) => {
  return (
    <div className="surface-ground py-2">
      <div className="grid">
        <UserStatsCard
          title={"Wins"}
          rate={userStats?.lifetime?.["Wins"]}
          average={userStats?.lifetime?.["Win Rate %"]}
          icon={"pi-star-fill"}
          text={" win rate"}
          showPercentage={true}
        />

        <UserStatsCard
          title={"Average"}
          rate={userStats?.lifetime?.["Average K/D Ratio"]}
          average={userStats?.lifetime?.["Average Headshots %"]}
          icon={"pi-sort-numeric-up"}
          text={" average headshots"}
          showPercentage={true}
        />

        <UserStatsCard
          title={"Win Streak"}
          rate={userStats?.lifetime?.["Current Win Streak"]}
          average={userStats?.lifetime?.["Longest Win Streak"]}
          icon={"pi-sort-numeric-down-alt"}
          text={" longest win streak"}
          showPercentage={false}
        />

        <UserStatsCard
          title={"Matches"}
          rate={userStats?.lifetime?.["Matches"]}
          streak={userStats?.lifetime?.["Recent Results"]}
          icon={"pi-sort-amount-up"}
          showPercentage={false}
        />
      </div>
    </div>
  );
};
