import { Tournaments } from "@/components/tournament/home/tournaments";
import { Divider } from "primereact/divider";

const Tournament = () => {
  return (
    <>
      <div>
        <h1 className="text-900 font-medium text-3xl">Tournaments</h1>
        <Divider type="solid" />
      </div>

      <div>
        <Tournaments />
      </div>
    </>
  );
};

export default Tournament;
