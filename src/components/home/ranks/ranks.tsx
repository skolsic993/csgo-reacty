import { Badge } from "primereact/badge";

export const Ranks = ({ ranks }: { ranks: any }) => {
  return (
    <div className="surface-card shadow-2 p-3 border-round">
      <div className="flex justify-content-between align-items-center">
        <h2 className="text-xl font-medium mb-2">Rankings</h2>
      </div>

      <div className="flex flex-column">
        {ranks?.map((rank: any) => (
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
