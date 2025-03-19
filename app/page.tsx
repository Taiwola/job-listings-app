import { Jobs } from "./component/jobs";
import { jobs } from "./data";

export default function Home() {
  return (
    <>
      <Jobs jobs={jobs} />
    </>
  );
}
