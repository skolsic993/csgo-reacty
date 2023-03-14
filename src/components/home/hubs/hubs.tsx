import Link from "next/link";

const Hubs = ({ hubs }: { hubs: any }) => {
  return (
    <div className="surface-card shadow-2 p-3 border-round mt-3">
      <div className="flex justify-content-between align-items-center">
        <h2 className="text-xl font-medium mb-2">Hubs</h2>

        <Link href="/tournaments">
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-reply text-xl"></i>
          </button>
        </Link>
      </div>

      <div className="flex mt-4 flex-wrap">
        {hubs?.items.slice(0, 4).map((hub: any) => (
          <div
            className="flex bg-indigo-500 border-round p-2 mr-2 mb-2 w-10rem"
            key={hub?.hub_id}
          >
            <div className="flex">
              <div className="flex align-items-center justify-content-center">
                <img
                  className="border-circle shadow-3"
                  src={hub?.avatar}
                  alt="Friend"
                  style={{ width: "35px", height: "35px", objectFit: "cover" }}
                />
              </div>
              <div className="flex justify-content-between ml-2 flex-wrap w-full">
                <div className="flex flex-column justify-content-between">
                  <span className="text-sm">{hub?.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hubs;
