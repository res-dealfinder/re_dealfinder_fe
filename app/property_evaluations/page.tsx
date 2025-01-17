import { columns } from "./columns";
import { Property } from "./type";
import DataTable from "./data-table";

async function getData(): Promise<Property[]> {
  const res = await fetch(
    "https://re-dealfinder-bdl4blg57-res-dealfinders-projects.vercel.app/dealfinder/properties/"
  );
  const data = await res.json();
  return data;
}

export default async function PropertyEvaluationsPage() {
  const data: Property[] = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
