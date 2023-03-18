import CardHeader from "@/shared/card-header/card-header";
import Link from "next/link";
import { CardBody } from "../card-body/card-body";

export const Tournaments = () => {
  return (
    <Link href="/tournaments">
      <div className="surface-card shadow-2 p-3 border-round transition-duration-400 hover:shadow-4">
        <CardHeader title="Tournaments" />

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
    </Link>
  );
};
