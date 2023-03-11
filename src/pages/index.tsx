import fetcher from "@/utils/fetcher";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Home({
  fallbackData,
  something,
}: {
  fallbackData: any;
  something: any;
}) {
  const [logoutError, setLogoutError] = useState(null);

  const router = useRouter();

  const logout = async () => {
    const asd = something.cookie.split(";");

    try {
      let headers = {
        Authorization: "Bearer " + asd[1].split("=")[1],
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/auth/signout`,
        null,
        {
          headers,
          withCredentials: true,
        }
      );

      router.push("/auth/signin");
    } catch (error: any) {
      setLogoutError(error);
    }
  };

  if (fallbackData) {
    return (
      <>
        <>Welcome! {fallbackData && JSON.stringify(fallbackData)}</>
        <button onClick={logout}>Logout</button>
        {logoutError && JSON.stringify(logoutError)}
      </>
    );
  }
}

export const getMe = async (context: GetServerSidePropsContext) => {
  return await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    context.req.headers
  ).catch((error) => {
    console.log(error);
    return null;
  });
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const something = context.req.headers;
  const session = await getMe(context);

  return {
    props: {
      fallbackData: session,
      something,
    },
  };
};
