import { Layout } from "@/components";
import { Files } from "@/pages/Files";
import { columns } from "./utils";
import { useGetAllBalances } from "@/hooks";

export function Balance() {
  return (
    <Layout title="Balances">
      <Files tableColumns={columns} getData={useGetAllBalances} />
    </Layout>
  );
}
