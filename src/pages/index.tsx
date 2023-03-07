import { User } from "@/models/User";
import fetcher from "@/utils/fetcher";
import { GetServerSideProps } from "next";
import useSwr from "swr";

export default function Home({ fallbackData }: { fallbackData: User }) {
  const { data, error } = useSwr(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher,
    { fallbackData }
  );

  if (data) {
    return <div>Welcome! {JSON.stringify(data)}</div>;
  }

  return <div>Please login</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    context.req.headers
  );

  return {
    props: { fallbackData: data },
  };
};
