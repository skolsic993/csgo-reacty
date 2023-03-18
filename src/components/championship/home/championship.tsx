import useFetch from "@/hooks/useFetch";
import { Championship } from "@/models/Championship";
import pickCorrectColor from "@/utils/pickKrobColor";
import Link from "next/link";
import { useRouter } from "next/router";
import { Badge } from "primereact/badge";
import { Divider } from "primereact/divider";
import { Knob } from "primereact/knob";

export const ChampionshipList = () => {
  const router = useRouter();
  const { data }: { data: { items: Championship[] } } = useFetch(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/championships`
  );

  const rediredToDetailsPage = (championship_id: string) => {
    router.push(`/championships/${championship_id}`);
  };

  return (
    <>
      <div className="border-round mb-1">
        {data?.items?.slice(0, 10).map((championship: Championship) => (
          <Link
            href={`/championships/${championship?.id}`}
            key={championship?.championship_id}
          >
            <li
              className="p-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2 surface-card shadow-1 border-round cursor-pointer transition-duration-400 hover:shadow-4"
              key={championship?.championship_id}
              onClick={() =>
                rediredToDetailsPage(championship?.championship_id)
              }
            >
              <div className="mb-3 lg:mb-0">
                <span className="text-900 font-medium text-xl">
                  {championship?.name}
                </span>
                <div className="mt-3 lg:mt-2 text-600">
                  <Badge
                    value={championship?.status}
                    severity={
                      championship?.status === "cancelled"
                        ? "danger"
                        : "success"
                    }
                    className="mr-2"
                  ></Badge>

                  <Badge
                    value={
                      championship?.anticheat_required
                        ? "Anticheat required"
                        : "Anticheat not required"
                    }
                    severity={"danger"}
                    className="mr-2"
                  ></Badge>

                  <Badge
                    value={
                      championship?.stream?.active
                        ? "Stream enabled"
                        : "Stream disabled"
                    }
                    severity={
                      championship?.stream?.active ? "success" : "danger"
                    }
                    className="mr-2"
                  ></Badge>
                </div>
              </div>
              <div className="flex lg:justify-content-between align-items-center">
                <div className="flex flex-column sm:flex-row">
                  <Knob
                    value={
                      championship?.join_checks.min_skill_level === -1
                        ? 1
                        : championship?.join_checks.min_skill_level
                    }
                    max={championship?.join_checks.max_skill_level}
                    readOnly
                    size={40}
                    valueColor={pickCorrectColor(
                      championship?.join_checks.min_skill_level
                    )}
                  />
                  <Divider layout="vertical" className="p-0 hidden sm:block" />
                  <Knob
                    value={championship?.join_checks.max_skill_level}
                    max={10}
                    readOnly
                    size={40}
                    valueColor={pickCorrectColor(
                      championship?.join_checks.max_skill_level
                    )}
                  />
                </div>

                <div className="ml-4 flex justify-content-evenly align-items-center w-5rem">
                  <i
                    className="pi text-yellow-500 pi-star"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  {championship?.total_prizes}
                </div>

                <div className="ml-4 flex justify-content-evenly align-items-center w-6rem">
                  <i
                    className="pi text-indigo-400 pi-users mr-1"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  {championship?.slots} Slots
                </div>
              </div>
            </li>
          </Link>
        ))}
      </div>
    </>
  );
};
