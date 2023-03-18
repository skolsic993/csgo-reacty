import { Member } from "@/models/Member";
import pickCorrectColor from "@/utils/pickKrobColor";
import { Avatar } from "primereact/avatar";
import { Knob } from "primereact/knob";

export const ChampionshipTeam = ({ member }: { member: Member }) => {
  return (
    <div>
      <div className="flex justify-content-between align-items-center flex-wrap">
        <div className="flex">
          <Avatar
            image={member?.avatar ? member?.avatar : "/images/user-logo.png"}
            size="large"
            shape="circle"
          />
          <div className="flex flex-column justify-content-between ml-3">
            <span>{member?.nickname}</span>
            <span className="text-500">Country: {member?.country}</span>
          </div>
        </div>
        <Knob
          value={member?.skill_level === -1 ? 1 : member?.skill_level}
          max={10}
          readOnly
          size={40}
          valueColor={pickCorrectColor(member?.skill_level)}
        />
      </div>
    </div>
  );
};
