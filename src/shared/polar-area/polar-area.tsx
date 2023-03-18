import { Segment } from "@/models/Segment";
import { UserStats } from "@/models/UserStats";
import { Chart } from "primereact/chart";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";

const PolarArea = ({ userStats }: { userStats: UserStats }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [selectedMap, setSelectedMap] = useState({
    name: userStats?.segments[0].label,
  });

  const maps = userStats?.segments.map((item: Segment) => {
    return { name: item?.label };
  });

  useEffect(() => {
    const selectedMapStats = userStats?.segments.filter((item: Segment) => {
      return item.label === selectedMap.name;
    });

    const data = {
      datasets: [
        {
          data: [
            selectedMapStats && selectedMapStats[0]?.stats?.["Average Kills"],
            selectedMapStats && selectedMapStats[0]?.stats?.["Average Assists"],
            selectedMapStats && selectedMapStats[0]?.stats?.["Average Deaths"],
            selectedMapStats &&
              selectedMapStats[0]?.stats?.["Headshots per Match"],
            selectedMapStats && selectedMapStats[0]?.stats?.["Average MVPs"],
          ],
          backgroundColor: [
            "#42A5F5",
            "#e8f230",
            "#ca3c5f",
            "#66BB6A",
            "#FFA726",
            "#26C6DA",
            "#7E57C2",
            "#f23081",
            "#af45ed",
            "#b04545",
            "#4d8afa",
          ],
        },
      ],
      labels: [
        "Average Kills",
        "Average Assists",
        "Average Deaths",
        "Headshots per Match",
        "Average MVPs",
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          grid: {
            color: "rgba(0, 0, 0, 0.2)",
          },
          ticks: {
            display: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [selectedMap]);

  return (
    <div
      className="surface-card shadow-2 p-3 border-round flex flex-column align-items-center transition-duration-400 hover:shadow-4"
      key={Math.random()}
    >
      <div className="flex justify-content-between flex-wrap align-items-center w-full mb-4">
        <h2 className="text-xl font-medium mb-2">User Map Statistics</h2>
        <Dropdown
          value={selectedMap}
          onChange={(e) => setSelectedMap(e.value)}
          options={maps}
          optionLabel="name"
          placeholder="Select a Map"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="flex align-items-center p-2">
        <Chart
          type="polarArea"
          data={chartData}
          key={Math.random()}
          options={chartOptions}
          style={{ position: "relative", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default PolarArea;
