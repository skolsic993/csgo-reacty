import useFetch from "@/hooks/useFetch";
import { FaceitAccount } from "@/models/FaceitAccount";
import { UserStats } from "@/models/UserStats";
import PolarArea from "@/shared/polar-area/polar-area";
import { Championships } from "../championships/championships";
import Friends from "../friends/friends";
import Hubs from "../hubs/hubs";
import { Matches } from "../matches/matches";
import { Ranks } from "../ranks/ranks";
import { Tournaments } from "../tournaments/tournaments";

import UserDetails from "../user-details/user-details";
import { UserStatistics } from "../user-stats/user-stats";

const Dashboard = ({ faceitUser }: { faceitUser: FaceitAccount }) => {
  const { data }: { data: UserStats } = useFetch(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/stats/${faceitUser?.player_id}`
  );

  return (
    <>
      {data && (
        <>
          <UserDetails faceitUser={faceitUser} />
          <UserStatistics userStats={data} />
          <div className="grid">
            <div className="col-12 md:col-6 xl:col-5 h-full">
              <PolarArea userStats={data} />
              <Championships />
            </div>

            <div className="col-12 md:col-6 xl:col-4">
              <Tournaments />
              <Matches userStats={data} />
              <Hubs />
            </div>

            <div className="flex col-12 md:col-12 xl:col-3 flex-column sm:flex-row xl:flex-column">
              <div className="sm:mr-3 xl:mr-0 w-full">
                <Friends
                  friends={faceitUser?.friends_ids.splice(0, 3).join("&&")}
                />
              </div>

              <div className="w-full">
                <Ranks />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
