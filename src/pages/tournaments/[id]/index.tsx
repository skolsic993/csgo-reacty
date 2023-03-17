import TournamentDetailsInfo from "@/components/tournament/tournament-details/tournament-details";
import useFetch from "@/hooks/useFetch";
import { Tournament } from "@/models/Tournament";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TournamentDetails = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { id } = router?.query;

  const { data }: { data: Tournament } = useFetch(url);

  useEffect(() => {
    if (id) {
      setUrl(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/tournaments/${id}/details`
      );
    }
  }, [id]);

  return (
    <>
      <div className="grid p-2">
        <TournamentDetailsInfo tournament={data} />
      </div>
    </>
  );
};

export default TournamentDetails;
