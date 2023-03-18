import CardHeader from "@/shared/card-header/card-header";
import Link from "next/link";
import { CardBody } from "../card-body/card-body";

const Hubs = () => {
  return (
    <Link href="/hubs">
      <div className="surface-card shadow-2 p-3 border-round mt-3 transition-duration-400 hover:shadow-4">
        <CardHeader title="Hubs" />

        <CardBody
          image={false}
          icon={"pi-sitemap"}
          title={"Hubs"}
          value={240}
          secondIcon={"pi-users"}
          subtitle={"People"}
          secondValue={4}
          showPercentage={true}
          background={"bg-red-500"}
        />
      </div>
    </Link>
  );
};

export default Hubs;
