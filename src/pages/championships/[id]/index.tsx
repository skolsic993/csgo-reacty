import { ChampionshipDetailsInfo } from "@/components/championship/championship-details-info/championship-details-info";
import ChampionshipSubscriptions from "@/components/championship/championship-subscription/championship-subscription";
import useFetch from "@/hooks/useFetch";
import { Championship } from "@/models/Championship";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ChampionshipDetails = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { id } = router?.query;

  const { data }: { data: Championship } = useFetch(url);

  useEffect(() => {
    if (id) {
      setUrl(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/championships/${id}/details`
      );
    }
  }, [id]);

  return (
    <div className="grid">
      <ChampionshipDetailsInfo championship={data} />
      <ChampionshipSubscriptions championshipId={id} />
    </div>
  );
};

export default ChampionshipDetails;
