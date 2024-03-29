import { CardSegment } from "@/components/tournament/card-segment/card-segment";
import { Championship } from "@/models/Championship";
import { Divider } from "primereact/divider";

export const ChampionshipDetailsInfo = ({
  championship,
}: {
  championship: Championship;
}) => {
  return (
    <div className="col-12 md:col-12 xl:col-4">
      <div className="surface-card shadow-2 p-4 border-round flex flex-column justify-content-center align-items-center transition-duration-400 hover:shadow-4">
        <div className="w-full">
          <img
            src="/images/background.jpg"
            alt="Tournament"
            className="w-full h-14rem"
            style={{ objectFit: "cover" }}
          />
        </div>

        <h2 className="text-xl md:text-4xl font-medium mt-3 mb-0">
          {" "}
          {championship?.name}
        </h2>
        <Divider />

        <div className="flex flex-wrap mb-4">
          <CardSegment
            title={championship?.game_id ? "CS:GO" : ""}
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
            title={championship?.region ? championship?.region : "EU"}
            subtitle={"region"}
            background={"bg-red-500"}
          >
            <i className="pi text-indigo-50 text-xl pi-users"></i>
          </CardSegment>
        </div>

        <div className="flex flex-wrap mb-4">
          <CardSegment
            title={
              championship?.anticheat_required ? "Required" : "Not required"
            }
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
            title={championship?.total_prizes}
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
