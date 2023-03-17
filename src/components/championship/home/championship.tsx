import useFetch from "@/hooks/useFetch";
import { Championship } from "@/models/Championship";
import { useRouter } from "next/router";
import { Badge } from "primereact/badge";
import { Knob } from "primereact/knob";

export const ChampionshipList = () => {
  const router = useRouter();
  const { data }: { data: { items: Championship[] } } = useFetch(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/championships`
  );

  const rediredToDetailsPage = (championship_id: string) => {
    router.push(`/tournaments/${championship_id}`);
  };

  return (
    <>
      <div className="border-round mb-1">
        {data?.items?.slice(0, 10).map((championship: Championship) => (
          <li
            className="p-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2 surface-card shadow-1 border-round cursor-pointer"
            key={championship?.championship_id}
            onClick={() => rediredToDetailsPage(championship?.championship_id)}
          >
            <div className="mb-3 lg:mb-0">
              <span className="text-900 font-medium text-xl">
                {championship?.name}
              </span>
              <div className="mt-3 lg:mt-2 text-600">
                <Badge
                  value={championship?.status}
                  severity={
                    championship?.status === "cancelled" ? "danger" : "success"
                  }
                  className="mr-2"
                ></Badge>
                {/* <Badge
                  value={championship?.invite_type}
                  severity="info"
                  className="mr-2"
                ></Badge>
                <Badge
                  value={championship?.region}
                  severity="info"
                  className="mr-2"
                ></Badge>
                <Badge
                  value={tournament?.membership_type}
                  severity="info"
                  className="mr-2"
                ></Badge> */}
              </div>
            </div>
            <div className="flex lg:justify-content-between align-items-center">
              <div className="flex flex-column sm:flex-row">
                <Knob value={1} max={5} readOnly size={40} />
                {/* <Divider layout="vertical" className="p-0 hidden sm:block" />
                <Knob
                  value={tournament?.max_skill}
                  max={10}
                  readOnly
                  size={40}
                  valueColor={pickCorrectColor(tournament?.max_skill)}
                /> */}
              </div>

              <div className="ml-4 flex justify-content-evenly align-items-center w-5rem">
                <i
                  className="pi text-yellow-500 pi-star"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                {championship?.total_prizes}
              </div>

              <div className="ml-4 flex justify-content-evenly align-items-center w-5rem">
                <i
                  className="pi text-indigo-400 pi-users"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                {championship?.featured}/{championship?.region}
              </div>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};
