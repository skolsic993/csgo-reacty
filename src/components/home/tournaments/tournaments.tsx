import Link from "next/link";

export const Tournaments = () => {
  return (
    <div className="surface-card shadow-2 p-3 border-round">
      <div className="flex justify-content-between align-items-center">
        <h2 className="text-xl font-medium mb-2">Tournaments</h2>

        <Link href="/tournaments">
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-reply text-xl"></i>
          </button>
        </Link>
      </div>

      <div className="flex mt-4">
        <div
          className="flex align-items-center justify-content-center bg-indigo-500 border-round"
          style={{ width: "2.5rem", height: "2.5rem" }}
        >
          <img src="/images/trophy.png" alt="Trophy" className="w-6" />
        </div>
        <div className="ml-2">
          <span className="block text-500 text-sm mb-1"> Tournaments </span>
          <span className="block text-500 text-indigo-400 font-medium">
            {" "}
            50{" "}
          </span>
        </div>
        <div className="flex flex-direction-row ml-4">
          <div
            className="flex align-items-center justify-content-center bg-yellow-500 border-round"
            style={{ width: "2.5rem", height: "2.5rem" }}
          >
            <i
              className="pi text-pink-50 pi-star"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
          <div className="ml-2">
            <span className="block text-500 text-sm mb-1"> Points </span>
            <span className="block text-500 text-yellow-400 font-medium">
              {" "}
              125.5K{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};