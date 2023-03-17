import useFetch from "@/hooks/useFetch";
import { Tournament } from "@/models/Tournament";
import { Badge } from "primereact/badge";
import { Divider } from "primereact/divider";
import { Knob } from "primereact/knob";

export const Tournaments = () => {
  const { data }: { data: { items: Tournament[] } } = useFetch(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/tournaments`
  );

  const pickCorrectColor = (value: number) => {
    switch (value) {
      case -1: {
        return "#fcd6d6";
      }
      case 0: {
        return "#fcd6d6";
      }
      case 1: {
        return "#fcd6d6";
      }
      case 2: {
        return "#f89b9b";
      }
      case 3: {
        return "#fc7979";
      }
      case 4: {
        return "#fc4e4e";
      }
      case 5: {
        return "#ff2f2f";
      }
      case 6: {
        return "#fd1f1f";
      }
      case 7: {
        return "#ff1010";
      }
      case 8: {
        return "#fa0909";
      }
      default: {
        return "#a70000";
      }
    }
  };

  return (
    <>
      <div className=" border-round mb-2">
        {data?.items?.slice(0, 10).map((tournament: Tournament) => (
          <li
            className=" p-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4 surface-card shadow-1 border-round"
            key={tournament?.tournament_id}
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
