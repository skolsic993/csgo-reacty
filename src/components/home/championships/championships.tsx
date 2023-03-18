import CardHeader from "@/shared/card-header/card-header";
import Link from "next/link";

export const Championships = () => {
  return (
    <Link href="/championships">
      <div className="surface-card shadow-2 p-3 border-round mt-3 transition-duration-400 hover:shadow-4">
        {" "}
        <CardHeader title="Championships" />
        <div className="flex justify-content-between align-items-center w-full flex-wrap">
          <div className="flex flex-column mt-2">
            <span className="font-medium text-500">New championship</span>
            <div className="mt-2 relative w-8rem">
              <h2 className="text-900">862</h2>
              <span className="text-green-500 absolute top-0 right-0 flex align-items-center">
                {" "}
                <i
                  className="pi text-green-500 pi-angle-up"
                  style={{ fontSize: "1.5rem", color: "#48ff66" }}
                ></i>
                25.8%
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
