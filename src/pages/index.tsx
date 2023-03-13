import Friends from "@/components/home/friends/friends";
import { Matches } from "@/components/home/matches/matches";
import { Ranks } from "@/components/home/ranks/ranks";
import { Tournaments } from "@/components/home/tournaments/tournaments";
import UserDetails from "@/components/home/user-details/user-details";
import { UserStatistics } from "@/components/home/user-stats/user-stats";

import { FaceitAccount } from "@/models/FaceitAccount";
import { User } from "@/models/User";
import { UserStats } from "@/models/UserStats";
import PolarArea from "@/shared/polar-area/polar-area";
import fetcher from "@/utils/fetcher";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function Home({
  faceitUser,
  userStats,
  friends,
  ranks,
}: {
  faceitUser: FaceitAccount;
  userStats: UserStats;
  friends: FaceitAccount[];
  ranks: any;
}) {
  return (
    <>
      <UserDetails faceitUser={faceitUser} />
      <UserStatistics userStats={userStats} />
      <div className="grid">
        <div className="col-12 md:col-6 xl:col-5 h-full">
          <PolarArea stats={userStats} />
        </div>

        <div className="col-12 md:col-6 xl:col-4">
          <Tournaments />
          <Matches userStats={userStats} />
        </div>

        <div className="col-12 md:col-6 xl:col-3">
          <Friends friends={friends} />
          <Ranks ranks={ranks?.items.slice(0, 6)} />
        </div>
      </div>
    </>
  );
}

export const getUser = async (context: GetServerSidePropsContext) => {
  return await fetcher<User>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    context.req.headers
  );
};

export const getUserStats = async (
  context: GetServerSidePropsContext,
  id: string
) => {
  return await fetcher<User>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/stats/${id}`,
    context.req.headers
  );
};

export const getFaceItUser = async (
  context: GetServerSidePropsContext,
  nick: string
) => {
  return await fetcher<FaceitAccount>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/nickname/${nick}`,
    context.req.headers
  );
};

export const getUserFriends = async (
  context: GetServerSidePropsContext,
  ids: string[]
) => {
  const friends = ids.join("&&");

  return await fetcher<FaceitAccount>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/friends/${friends}`,
    context.req.headers
  );
};

export const getGlobalRanks = async (
  context: GetServerSidePropsContext,
  region: string
) => {
  return await fetcher<FaceitAccount>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/ranks/${region}`,
    context.req.headers
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const user = await getUser(context);
  const faceitUser = await getFaceItUser(context, user?.nick);
  const userStats = await getUserStats(context, faceitUser?.player_id);
  const friends = await getUserFriends(
    context,
    faceitUser?.friends_ids.splice(0, 3)
  );
  const ranks = await getGlobalRanks(context, "EU");

  return {
    props: {
      faceitUser,
      userStats,
      friends,
      ranks,
    },
  };
};
