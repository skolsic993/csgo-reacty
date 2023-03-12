import UserStatsCard from "../user-stats-card/user-stats-card";

export const UserStatistics = ({ userStats }: { userStats: any }) => {
  return (
    <div className="surface-ground py-2">
      <div className="grid">
        <UserStatsCard
          title={"Wins"}
          rate={userStats?.lifetime?.["Wins"]}
          average={userStats?.lifetime?.["Win Rate %"]}
          icon={"pi-shopping-cart"}
          text={" win rate"}
        />

        <UserStatsCard
          title={"Average"}
          rate={userStats?.lifetime?.["Average K/D Ratio"]}
          average={userStats?.lifetime?.["Average Headshots %"]}
          icon={"pi-shopping-cart"}
          text={" average headshots"}
        />

        <UserStatsCard
          title={"Win Streak"}
          rate={userStats?.lifetime?.["Current Win Streak"]}
          average={userStats?.lifetime?.["Longest Win Streak"]}
          icon={"pi-shopping-cart"}
          text={" longest win streak"}
        />

        <UserStatsCard
          title={"Matches"}
          rate={userStats?.lifetime?.["Matches"]}
          streak={userStats?.lifetime?.["Recent Results"]}
          icon={"pi-shopping-cart"}
        />
      </div>
    </div>
  );
};
