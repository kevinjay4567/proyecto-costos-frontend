import { Layout } from "@/components";
import { Files } from "@/pages/Files";
import { columns } from "./utils";

import { useGetAllDatosPersonas } from "@/hooks/useDatosPersona";

export function DatosPersona() {
  return (
    <Layout title="Datos Persona">
      <Files
        tableColumns={columns}
        getData={useGetAllDatosPersonas}
      />
    </Layout>
  );
}
