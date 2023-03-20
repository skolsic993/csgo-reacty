import useFetch from "@/hooks/useFetch";
import { HubDetail } from "@/models/HubDetail";
import { HubMember } from "@/models/HubMember";
import CardHeader from "@/shared/card-header/card-header";
import { useEffect, useState } from "react";

const HubMembers = ({ hub }: { hub: HubDetail }) => {
  const [url, setUrl] = useState("");

  const { data: members }: { data: { items: HubMember[] } } = useFetch(url);

  useEffect(() => {
    if (hub?.hub_id) {
      setUrl(`/hubs/${hub?.hub_id}/members`);
    }
  }, [hub?.hub_id]);

  return (
    <div className="col-12 md:col-6 xl:col-4">
      <div className="surface-card shadow-2 p-3 border-round mb-3 transition-duration-400 hover:shadow-4">
        <CardHeader title="Members" />

        <div className="flex flex-column">
          {typeof members !== "string" &&
            members &&
            members?.items?.slice(0, 10).map((member: HubMember) => (
              <div className="flex mt-4" key={member?.user_id}>
                <div className="flex align-items-center justify-content-center  border-round">
                  <img
                    className=" border-circle"
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "cover",
                    }}
                    src={`${
                      member?.avatar ? member?.avatar : "/images/user-icon.png"
                    }`}
                    alt="Friend"
                  />
                </div>

                <div className="flex justify-content-between ml-3 flex-wrap w-full">
                  <div className="flex flex-column justify-content-between">
                    <span className="text-lg">{member?.nickname}</span>
                    <span className="text-sm text-500">
                      {member?.roles?.map((role: string) => {
                        if (role === "member" || role === "owner") {
                          return role + " ";
                        }
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HubMembers;
