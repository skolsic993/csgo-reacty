import { Tournament } from "@/models/Tournament";
import CardHeader from "@/shared/card-header/card-header";
import { OrganizationChart } from "primereact/organizationchart";
import { useState } from "react";

const TournamentTree = ({ tournament }: { tournament: Tournament }) => {
  const [data] = useState([
    {
      label: "Final",
      expanded: true,
      children: [
        {
          label: "Semifinal",
          expanded: true,
          children: [
            {
              label: "Quarterfinals",
              expanded: true,
              children: [
                {
                  label: "Round of 16",
                },
              ],
            },
            {
              label: "Quarterfinals",
              expanded: true,
              children: [
                {
                  label: "Round of 16",
                },
              ],
            },
          ],
        },
        {
          label: "Semifinal",
          expanded: true,
          children: [
            {
              label: "Quarterfinals",
              expanded: true,
              children: [
                {
                  label: "Round of 16",
                },
              ],
            },
            {
              label: "Quarterfinals",
              expanded: true,
              children: [
                {
                  label: "Round of 16",
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="col-12 md:col-6 xl:col-8">
      <div className="surface-card shadow-2 p-3 border-round transition-duration-400 hover:shadow-4 overflow-x-auto">
        <CardHeader title={"Tournament brackets"} />
        <OrganizationChart value={data} />
      </div>
    </div>
  );
};

export default TournamentTree;
