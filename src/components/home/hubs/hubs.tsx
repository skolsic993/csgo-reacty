import CardHeader from "@/shared/card-header/card-header";
import { CardBody } from "../card-body/card-body";

const Hubs = () => {
  return (
    <div className="surface-card shadow-2 p-3 border-round mt-3">
      <CardHeader title="Hubs" link="/tournaments" />

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
  );
};

export default Hubs;
