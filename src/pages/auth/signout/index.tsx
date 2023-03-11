import fetcher from "@/utils/fetcher";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignOut = ({ cookieHeader }: { cookieHeader: { cookie: string } }) => {
  const router = useRouter();
  const [logoutError, setLogoutError] = useState(null);

  useEffect(() => {
    const cookie = cookieHeader.cookie.split(";");

    const logOut = async () => {
      try {
        let headers = {
          Authorization: "Bearer " + cookie[1].split("=")[1],
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

    logOut();
  }, []);

  return <h1>{logoutError}</h1>;
};

export default SignOut;

export const logoutUser = async (context: GetServerSidePropsContext) => {
  return await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/auth/signout`,
    context.req.headers
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookieHeader = context.req.headers;

  return {
    props: { cookieHeader },
  };
};
