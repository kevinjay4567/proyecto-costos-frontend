import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";

interface Props {
  tableColumns: GridColDef[];
  getData: Function;
}

export function Files({ tableColumns, getData }: Props) {
  const { data, isLoading } = getData();

  useEffect(() => {}, [data]);

  if (isLoading)
    return (
      <DataGrid
        sx={{ height: "88dvh", maxWidth: "75dvw", margin: "0 auto" }}
        rows={[]}
        columns={tableColumns}
        loading
      ></DataGrid>
    );

  return (
    <>
      <DataGrid
        sx={{ height: "88dvh", maxWidth: "75dvw", margin: "0 auto" }}
        getRowId={(row) => row.id}
        rows={data !== undefined ? data : []}
        columns={tableColumns}
      />
    </>
  );
}
