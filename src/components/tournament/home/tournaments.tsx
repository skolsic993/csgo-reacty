import useFetch from "@/hooks/useFetch";
import { Tournament } from "@/models/Tournament";
import pickCorrectColor from "@/utils/pickKrobColor";
import { useRouter } from "next/router";
import { Badge } from "primereact/badge";
import { Divider } from "primereact/divider";
import { Knob } from "primereact/knob";

export const Tournaments = () => {
  const router = useRouter();
  const { data }: { data: { items: Tournament[] } } = useFetch(`/tournaments`);

  const rediredToDetailsPage = (tournament_id: string) => {
    router.push(`/tournaments/${tournament_id}`);
  };

  return (
    <>
      <div className="border-round mb-1">
        {data?.items?.slice(0, 10).map((tournament: Tournament) => (
          <li
            className="p-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2 surface-card shadow-1 border-round cursor-pointer transition-duration-400 hover:shadow-4"
            key={tournament?.tournament_id}
            onClick={() => rediredToDetailsPage(tournament?.tournament_id)}
          >
            <div className="mb-3 lg:mb-0">
              <span className="text-900 font-medium text-xl">
                {tournament?.name}
              </span>
              <div className="mt-3 lg:mt-2 text-600">
                <Badge
                  value={tournament?.status}
                  severity={
                    tournament?.status === "cancelled" ? "danger" : "success"
                  }
                  className="mr-2"
                ></Badge>
                <Badge
                  value={tournament?.invite_type}
                  severity="info"
                  className="mr-2"
                ></Badge>
                <Badge
                  value={tournament?.region}
                  severity="info"
                  className="mr-2"
                ></Badge>
                <Badge
                  value={tournament?.membership_type}
                  severity="info"
                  className="mr-2"
                ></Badge>
              </div>
            </div>
            <div className="flex lg:justify-content-between align-items-center">
              <div className="flex flex-column sm:flex-row">
                <Knob
                  value={
                    tournament?.min_skill === -1 ? 1 : tournament?.min_skill
                  }
                  max={tournament?.max_skill}
                  readOnly
                  size={40}
                  valueColor={pickCorrectColor(tournament?.min_skill)}
                />
                <Divider layout="vertical" className="p-0 hidden sm:block" />
                <Knob
                  value={tournament?.max_skill}
                  max={10}
                  readOnly
                  size={40}
                  valueColor={pickCorrectColor(tournament?.max_skill)}
                />
              </div>

              <div className="ml-4 flex justify-content-evenly align-items-center w-5rem">
                <i
                  className="pi text-yellow-500 pi-star"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                {tournament?.total_prize}
              </div>

              <div className="ml-4 flex justify-content-evenly align-items-center w-5rem">
                <i
                  className="pi text-indigo-400 pi-users"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                {tournament?.number_of_players_joined}/
                {tournament?.number_of_players}
              </div>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};
