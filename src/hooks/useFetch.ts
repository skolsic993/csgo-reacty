import fetcher from "@/utils/fetcher";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetcher<Promise<any>>(
          `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api` + url,
          {
            withCredentials: true,
          }
        );

        setData(response);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
