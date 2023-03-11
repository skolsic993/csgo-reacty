import UserDetails from "@/components/home/user-details/user-details";
import { FaceitAccount } from "@/models/FaceitAccount";
import { User } from "@/models/User";
import fetcher from "@/utils/fetcher";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function Home({
  faceitUser,
  user,
}: {
  faceitUser: FaceitAccount;
  user: User;
}) {
  return (
    <>
      <UserDetails faceitUser={faceitUser} />
    </>
  );
}

export const getUser = async (context: GetServerSidePropsContext) => {
  return await fetcher<User>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
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

  return {
    props: {
      user,
      faceitUser,
    },
  };
};
