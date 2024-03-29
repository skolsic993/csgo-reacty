import useFetch from "@/hooks/useFetch";
import { Rank } from "@/models/Rank";
import CardHeader from "@/shared/card-header/card-header";
import { Badge } from "primereact/badge";

export const Ranks = () => {
  const { data: ranks }: { data: { items: Rank[] } } = useFetch(`/ranks/EU`);

  return (
    <div className="surface-card shadow-2 p-3 border-round transition-duration-400 hover:shadow-4">
      <CardHeader title="Rankings" />

      <div className="flex flex-column">
        {ranks?.items?.slice(0, 6).map((rank: Rank) => (
          <div className="flex mt-4" key={rank?.player_id}>
            <div>
              <span className="font-semibold">{rank?.position + "."}</span>
            </div>

            <div className="flex justify-content-between ml-2 flex-wrap w-full">
              <div>
                <span className="text-md">{rank?.nickname}</span>
              </div>
            </div>
            <div>
              <span>
                <Badge value={rank?.faceit_elo}></Badge>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
