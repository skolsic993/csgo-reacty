import { CardSegment } from "@/components/tournament/card-segment/card-segment";
import { HubDetail } from "@/models/HubDetail";
import pickCorrectColor from "@/utils/pickKrobColor";
import { Divider } from "primereact/divider";
import { Knob } from "primereact/knob";

export const HubDetailInfo = ({ hub }: { hub: HubDetail }) => {
  return (
    <div className="col-12 md:col-6 xl:col-4">
      <div className="surface-card shadow-2 p-4 border-round flex flex-column justify-content-center align-items-center transition-duration-400 hover:shadow-4">
        <div className="w-full">
          <img
            src={hub?.avatar}
            alt="Tournament"
            className="w-full h-10rem border-round"
            style={{ objectFit: "contain" }}
          />
        </div>

        <h2 className="text-xl md:text-4xl font-medium mt-3 mb-2">
          {" "}
          {hub?.name}
        </h2>
        <span className="text-md text-500">{hub?.description}</span>
        <Divider />

        <div className="flex flex-wrap mb-4">
          <CardSegment
            title={hub?.game_id}
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
            title={hub?.players_joined}
            subtitle={"Joined"}
            background={"bg-red-500"}
          >
            <i className="pi text-indigo-50 text-xl pi-users"></i>
          </CardSegment>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="flex flex-wrap mb-2">
            <div className="flex align-items-center justify-content-start border-round mb-1 p-2 w-11rem">
              <Knob
                value={1}
                max={10}
                readOnly
                size={50}
                valueColor={pickCorrectColor(hub?.min_skill_level)}
              />
              <div className="flex flex-column justify-content-evenly ml-3 w-7rem">
                <span className="block text-500 text-sm">Min</span>
                <span className="text-900 font-medium">Level</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-2">
            <div className="flex align-items-center justify-content-start border-round mb-1 p-2 w-12rem">
              <Knob
                value={10}
                max={10}
                readOnly
                size={50}
                valueColor={pickCorrectColor(hub?.max_skill_level)}
              />
              <div className="flex flex-column justify-content-evenly ml-3 w-7rem">
                <span className="block text-500 text-sm">Max</span>
                <span className="text-900 font-medium">Level</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
