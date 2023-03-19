import useFetch from "@/hooks/useFetch";
import { Hub } from "@/models/Hub";
import { HubRole } from "@/models/HubRole";
import CardHeader from "@/shared/card-header/card-header";
import { useEffect, useState } from "react";

const HubRoles = ({ hub }: { hub: Hub }) => {
  const [url, setUrl] = useState("");

  const { data: roles }: { data: { items: HubRole[] } } = useFetch(url);

  useEffect(() => {
    if (hub?.hub_id) {
      setUrl(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/hubs/${hub?.hub_id}/roles`
      );
    }
  }, [hub?.hub_id]);

  return (
    <div className="col-12 md:col-6 xl:col-4">
      <div className="surface-card shadow-2 p-3 border-round mb-3 transition-duration-400 hover:shadow-4">
        <CardHeader title="Roles" />

        <div className="flex flex-column">
          {typeof roles !== "string" &&
            roles &&
            roles?.items?.map((role: HubRole) => (
              <div className="flex mt-4" key={role?.role_id}>
                <div className="flex justify-content-between ml-3 flex-wrap w-full">
                  <div className="flex justify-content-between w-full">
                    <span className="text-lg">{role?.name}</span>
                    <div
                      className="text-sm font-medium text-gray-900 p-2 border-round"
                      style={{ background: `${role?.color}` }}
                    >
                      Ranking: {role?.ranking}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HubRoles;
