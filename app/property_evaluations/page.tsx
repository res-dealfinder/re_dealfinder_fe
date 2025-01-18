import { columns } from "./columns";
import { Property } from "./type";
import DataTable from "./data-table";

async function getData(): Promise<Property[]> {
  const res = await fetch(
    "https://re-dealfinder-be.vercel.app/dealfinder/properties/"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function PropertyEvaluationsPage() {
  const data: Property[] = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
