import Link from "next/link";

export const Championships = ({ championships }: { championships: any }) => {
  return (
    <div className="surface-card shadow-2 p-3 border-round mt-3">
      {" "}
      <div className="flex justify-content-between align-items-center">
        <h2 className="text-xl font-medium mb-2">Championships</h2>

        <Link href="/tournaments">
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-reply text-xl"></i>
          </button>
        </Link>
      </div>
      <div className="flex justify-content-between align-items-center w-full flex-wrap">
        <div className="flex flex-column mt-4">
          <span className="font-medium text-500">New championship</span>
          <div className="mt-2 relative w-7rem">
            <h2 className="text-900 mb-1">862</h2>
            <span className="text-green-500 absolute top-0 right-0">
              {" "}
              +25.8%
            </span>
          </div>
        </div>

        <div className="flex justify-content-center align-items-center flex-column">
          <img src="/images/championships.png" alt="Championships" />
          <span className="text-500 text-sm mb-1">Yearly championship</span>
        </div>
      </div>
    </div>
  );
};
