import useFetch from "@/hooks/useFetch";
import { Hub } from "@/models/Hub";
import Cookies from "js-cookie";
import { Avatar } from "primereact/avatar";

export const Hubs = () => {
  const id = Cookies.get("id");
  const { data }: { data: { items: Hub[] } } = useFetch(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/hubs/${id}`
  );

  return (
    <div className="grid">
      {data &&
        data?.items?.map((hub: Hub) => (
          <div className="col-12 md:col-6 xl:col-3">
            <div className="surface-card shadow-1 p-3 border-round mb-2">
              <div className="flex">
                <Avatar
                  image={hub?.avatar}
                  size="xlarge"
                  style={{ objectFit: "cover" }}
                  className="mr-3 w-5rem border-round"
                />

                <h2 className="font-medium text-xl m-0 white-space-nowrap overflow-hidden text-overflow-ellipsis w-full">
                  {hub?.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Hubs;
