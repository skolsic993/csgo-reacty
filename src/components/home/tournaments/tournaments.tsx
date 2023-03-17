import CardHeader from "@/shared/card-header/card-header";
import { CardBody } from "../card-body/card-body";

export const Tournaments = () => {
  return (
    <div className="surface-card shadow-2 p-3 border-round">
      <CardHeader title="Tournaments" link="/tournaments" />

      <CardBody
        image={true}
        icon={""}
        title={"Tournaments"}
        value={50}
        secondIcon={"pi-star"}
        subtitle={"Points"}
        secondValue={125}
        showPercentage={true}
        background={"bg-yellow-500"}
      />
    </div>
  );
};
