import { Tournament } from "@/models/Tournament";
import { Divider } from "primereact/divider";
import { CardSegment } from "../card-segment/card-segment";

const TournamentDetailsInfo = ({ tournament }: { tournament: Tournament }) => {
  return (
    <div className="col-12 md:col-6 xl:col-4">
      <div className="surface-card shadow-2 p-4 border-round flex flex-column justify-content-center align-items-center">
        <div className="bg-indigo-500 p-3 border-round">
          <img
            src="/images/trophy.png"
            alt="Tournament"
            className="w-7rem h-5rem "
            style={{ objectFit: "contain" }}
          />
        </div>

        <h2 className="text-4xl font-medium mt-3 mb-0"> {tournament?.name}</h2>
        <Divider />

        <div className="flex flex-wrap mb-4">
          <CardSegment
            title={tournament?.game_id ? "CS:GO" : ""}
            subtitle={"Game"}
            background={"bg-purple-500"}
          >
            <img
              src="/images/csgo-icon.png"
              alt="CounterStrikeIcon"
              className="w-full"
            />
          </CardSegment>

          <CardSegment
            title={tournament?.match_type ? "5v5" : ""}
            subtitle={"Team size"}
            background={"bg-red-500"}
          >
            <i className="pi text-indigo-50 text-xl pi-users"></i>
          </CardSegment>
        </div>

        <div className="flex flex-wrap mb-4">
          <CardSegment
            title={tournament?.anticheat_required ? "Required" : "Not required"}
            subtitle={"Anticheat"}
            background={"bg-pink-500"}
          >
            <img
              src="/images/anticheat.png"
              alt="CounterStrikeIcon"
              className="w-full"
            />
          </CardSegment>

          <CardSegment
            title={tournament?.total_prize}
            subtitle={"Prize pool"}
            background={"bg-yellow-500"}
          >
            <i className="pi text-indigo-50 text-xl pi-star"></i>
          </CardSegment>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetailsInfo;
