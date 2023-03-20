import MatchTable from "@/components/match-table.tsx/matche-table";
import useFetch from "@/hooks/useFetch";
import { Player } from "@/models/Player";
import { Stats } from "@/models/Stats";
import CardHeader from "@/shared/card-header/card-header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MatchDetails = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { id } = router?.query;

  const { data }: { data: { rounds: Stats[] } } = useFetch(url);

  useEffect(() => {
    if (id) {
      setUrl(`/matches/${id}/stats`);
    }
  }, [id]);

  return (
    <div className="grid p-2">
      {data && (
        <>
          <div className="surface-card shadow-1 p-3 border-round mb-2 overflow-x w-full transition-duration-400 hover:shadow-4">
            <div className="flex justify-content-between align-items-center">
              <CardHeader
                title={
                  data?.rounds?.map(
                    (stats: Stats) => stats?.teams[0]?.team_stats["Team"]
                  )[0]
                }
              />
              <CardHeader
                title={`Score: ${
                  data?.rounds?.map(
                    (stats: Stats) => stats?.teams[0]?.team_stats["Final Score"]
                  )[0]
                }`}
              />
            </div>

            <MatchTable
              data={
                data?.rounds?.map((stats: Stats) =>
                  stats?.teams[0]?.players?.map((player: Player) => {
                    player.player_stats.nick = player?.nickname;

                    return player?.player_stats;
                  })
                )[0] as unknown as Stats[]
              }
            />
          </div>

          <div className="surface-card shadow-1 p-3 border-round mb-2 overflow-x w-full transition-duration-400 hover:shadow-4">
            <div className="flex justify-content-between align-items-center">
              <CardHeader
                title={
                  data?.rounds?.map(
                    (stats: Stats) => stats?.teams[1]?.team_stats["Team"]
                  )[0]
                }
              />

              <CardHeader
                title={`Score: ${
                  data?.rounds?.map(
                    (stats: Stats) => stats?.teams[1]?.team_stats["Final Score"]
                  )[0]
                }`}
              />
            </div>
            <MatchTable
              data={
                data?.rounds?.map((stats: Stats) =>
                  stats?.teams[1]?.players?.map((player: Player) => {
                    player.player_stats.nick = player?.nickname;

                    return player?.player_stats;
                  })
                )[0] as unknown as Stats[]
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MatchDetails;
