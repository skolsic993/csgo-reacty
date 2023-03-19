import { Stats } from "@/models/Stats";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const MatchTable = ({ data }: { data: Stats[] }) => {
  return (
    <DataTable value={data} className="w-full">
      <Column field="nick" header="Player"></Column>
      <Column field="Kills" header="Kills"></Column>
      <Column field="Assists" header="Assists"></Column>
      <Column field="Deaths" header="Deaths"></Column>
      <Column field="K/R Ratio" header="K/R Ratio"></Column>
      <Column field="Headshots" header="Headshots"></Column>
      <Column field="Headshots %" header="Headshots %"></Column>
      <Column field="MVPs" header="MVPs"></Column>
      <Column field="Triple Kills" header="Triple Kills"></Column>
      <Column field="Quadro Kills" header="Quadro Kills"></Column>
      <Column field="Penta Kills" header="Penta Kills"></Column>
    </DataTable>
  );
};

export default MatchTable;
