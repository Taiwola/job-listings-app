import { Job, jobs } from "@/app/data";
import { SingleJob } from "./component/job";

export default async function Page({
  params,
}: {
  params: Promise<{ Id: string }>;
}) {
  const { Id } = await params;
  const filteredJob = jobs.find((j) => j.id === Id);
  return (
    <>
      <SingleJob job={filteredJob as Job} />
    </>
  );
}
