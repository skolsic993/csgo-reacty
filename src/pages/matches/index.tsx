import useFetch from "@/hooks/useFetch";
import { Match } from "@/models/Match";
import { Player } from "@/models/Player";
import CardHeader from "@/shared/card-header/card-header";
import Cookies from "js-cookie";
import Link from "next/link";
import { Badge } from "primereact/badge";

export default function Matches() {
  const id = Cookies.get("id");
  const { data }: { data: { items: Match[] } } = useFetch(`/matches/${id}`);

  const getResult = (match: Match) => {
    const winner = match?.results?.winner as keyof object;
    const teams = match?.teams?.[winner] as { players: Player[] };

    const players = teams?.players?.map((player: Player) => player?.player_id);

    return players?.includes(`${id}`) ? "Win" : "Loss";
  };

  return (
    <div className="surface-card shadow-1 p-3 border-round mb-2">
      <CardHeader title={"Match history"} />

      <div className="mt-4">
        {data &&
          data?.items?.map((match: Match) => (
            <Link href={`/matches/${match?.match_id}`} key={match?.match_id}>
              <li
                className="p-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2 surface-card shadow-1 border-round cursor-pointer transition-duration-400 hover:shadow-4"
                key={match?.match_id}
              >
                <div className="mb-3 lg:mb-0">
                  <span
                    className={`text-900 font-medium text-xl ${
                      getResult(match) === "Win"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {getResult(match)}
                  </span>
                </div>
                <div className="flex lg:justify-content-between align-items-center">
                  <div className="mt-3 lg:mt-2 text-600">
                    <Badge
                      value={match?.game_id}
                      severity="success"
                      className="mr-2"
                    ></Badge>
                    <Badge
                      value={match?.game_mode}
                      severity="info"
                      className="mr-2"
                    ></Badge>
                    <Badge
                      value={match?.status}
                      severity={
                        match?.status === "cancelled" ? "danger" : "success"
                      }
                      className="mr-2"
                    ></Badge>
                    <Badge
                      value={match?.competition_type}
                      severity={
                        match?.competition_type === "matchmaking"
                          ? "info"
                          : "success"
                      }
                      className="mr-2"
                    ></Badge>
                  </div>
                </div>
              </li>
            </Link>
          ))}
      </div>
    </div>
  );
}
