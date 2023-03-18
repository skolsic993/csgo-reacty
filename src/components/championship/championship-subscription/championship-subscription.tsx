import useFetch from "@/hooks/useFetch";
import { ChampionshipSubscription } from "@/models/ChampionshipSubscription";
import { Member } from "@/models/Member";
import { Badge } from "primereact/badge";
import { useEffect, useState } from "react";
import { ChampionshipTeam } from "../championship-team/championship-team";

const ChampionshipSubscriptions = ({
  championshipId,
}: {
  championshipId: string | string[] | undefined;
}) => {
  const [url, setUrl] = useState("");
  const { data }: { data: { items: ChampionshipSubscription[] } } =
    useFetch(url);

  useEffect(() => {
    if (championshipId) {
      setUrl(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/championships/${championshipId}/subscriptions`
      );
    }
  }, [championshipId]);

  return (
    <div className="col-12 md:col-12 xl:col-8">
      {data &&
        data?.items
          ?.slice(0, 3)
          ?.map((subscription: ChampionshipSubscription) => (
            <li
              className="p-3 flex flex-column surface-card shadow-1 border-round cursor-pointer transition-duration-400 hover:shadow-4 mb-2"
              key={subscription?.leader}
            >
              <h2 className="font-medium text-xl">
                Coach: {subscription?.coach ? subscription?.coach : "Unknown"}{" "}
              </h2>

              <div className="flex flex-wrap flex-row mt-2">
                <h2 className="font-medium text-lg text-500 flex align-items-center">
                  Team: {subscription?.team?.name}{" "}
                  <Badge
                    value={subscription?.team?.team_type}
                    severity={
                      subscription?.team?.team_type === "premade"
                        ? "success"
                        : "danger"
                    }
                    className="ml-2"
                  />
                </h2>
              </div>
              <div className="grid">
                {subscription?.team?.members?.map((member: Member) => (
                  <div
                    className="col-12 md:col-6 xl:col-4 mb-2 p-2"
                    key={member?.faceit_url}
                  >
                    <ChampionshipTeam member={member} />
                  </div>
                ))}
              </div>
            </li>
          ))}
    </div>
  );
};

export default ChampionshipSubscriptions;
