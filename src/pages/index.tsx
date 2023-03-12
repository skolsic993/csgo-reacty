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
}: {
  faceitUser: FaceitAccount;
  userStats: UserStats;
}) {
  return (
    <>
      <UserDetails faceitUser={faceitUser} />
      <UserStatistics userStats={userStats} />
      <div className="grid">
        <PolarArea stats={userStats} />
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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const user = await getUser(context);
  const faceitUser = await getFaceItUser(context, user?.nick);
  const userStats = await getUserStats(context, faceitUser?.player_id);

  return {
    props: {
      faceitUser,
      userStats,
    },
  };
};
