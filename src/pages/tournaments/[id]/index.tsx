import TournamentDetailsInfo from "@/components/tournament/tournament-details/tournament-details";
import TournamentTree from "@/components/tournament/tournament-tree/tournament-tree";
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
      setUrl(`/tournaments/${id}/details`);
    }
  }, [id]);

  return (
    <>
      <div className="grid">
        <TournamentDetailsInfo tournament={data} />
        <TournamentTree tournament={data} />
      </div>
    </>
  );
};

export default TournamentDetails;
