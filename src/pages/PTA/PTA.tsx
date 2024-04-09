import { Layout } from "@/components";
import { Files } from "../Files";
import { columns } from "./utils";
import { useGetAllPTAs } from "@/hooks/usePTA";

export function PTA() {
  return (
    <Layout title="PTA">
      <Files tableColumns={columns} getData={useGetAllPTAs} />
    </Layout>
  )
}
