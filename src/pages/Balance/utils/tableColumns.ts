import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "subcuenta_id",
    headerName: "Subcuenta",
  },
  {
    field: "anho",
    headerName: "Anho",
  },
  {
    field: "valor",
    headerName: "Valor",
  },
  {
    field: "concepto",
    headerName: "Concepto",
    valueGetter: (value) => value.value.nombre,
  },
  {
    field: "sede_id",
    headerName: "Sede",
  },
  {
    field: "empresa",
    headerName: "Empresa",
    valueGetter: (value) => value.value.nombre,
  },
];
