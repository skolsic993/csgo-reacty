import CardHeader from "@/shared/card-header/card-header";
import { CardBody } from "../card-body/card-body";

export const Matches = ({ userStats }: { userStats: any }) => {
  return (
    <div
      className="surface-card shadow-2 p-3 border-round mt-3"
      key={Math.random()}
    >
      <CardHeader title={"Matches"} link={"/matches"} />

      <CardBody
        image={true}
        icon={""}
        title={"Matches"}
        value={userStats?.lifetime?.["Matches"]}
        secondIcon={""}
        secondImage={true}
        subtitle={" K/D Ratio"}
        secondValue={userStats?.lifetime?.["K/D Ratio"]}
        stats={true}
      />
    </div>
  );
};
