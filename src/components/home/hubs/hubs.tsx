import Link from "next/link";

const Hubs = ({ hubs }: { hubs: any }) => {
  console.log(hubs, "ASD");

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
    </div>
  );
};

export default Hubs;
