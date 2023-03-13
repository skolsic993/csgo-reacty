import Link from "next/link";

export const Matches = ({ userStats }: { userStats: any }) => {
  return (
    <div
      className="surface-card shadow-2 p-3 border-round mt-3"
      key={Math.random()}
    >
      <div className="flex justify-content-between align-items-center">
        <h2 className="text-xl font-medium mb-2">Matches</h2>

        <Link href="/matches">
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-reply text-xl"></i>
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap">
        <div className="flex  mt-4 w-full mb-4">
          <div className="flex">
            <div
              className="flex align-items-center justify-content-center bg-indigo-500 border-round"
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <img src="/images/trophy.png" alt="Trophy" className="w-6" />
            </div>
            <div className="ml-2">
              <span className="block text-500 text-sm mb-1"> Matches </span>
              <span className="block text-500 text-indigo-400 font-medium">
                {" "}
                {userStats?.lifetime?.["Matches"]}{" "}
              </span>
            </div>
          </div>
          <div className="flex flex-direction-row ml-4">
            <div
              className="flex align-items-center justify-content-center bg-yellow-500 border-round"
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <img src="/images/up.png" alt="Up" />
            </div>
            <div className="ml-2">
              <span className="block text-500 text-sm mb-1"> K/D Ratio </span>
              <span className="block text-500 text-yellow-400 font-medium">
                {" "}
                {userStats?.lifetime?.["K/D Ratio"]}{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-column justify-content-center align-items-center w-full">
          <img
            src="images/stats.png"
            alt="Statistics"
            className="w-full h-10rem"
            style={{ objectFit: "cover" }}
          />
          <span className="block text-500 text-sm mt-1">Match statistics</span>
        </div>
      </div>
    </div>
  );
};
