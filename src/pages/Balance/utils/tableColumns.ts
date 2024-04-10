import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "subcuenta_id",
    headerName: "Subcuenta",
    flex: 0.5
  },
  {
    field: "anho",
    headerName: "Anho",
    flex: 0.25
  },
  {
    field: "valor",
    headerName: "Valor",
    flex: 0.5
  },
  {
    field: "concepto",
    headerName: "Concepto",
    valueGetter: (value) => value.value.nombre,
    flex: 0.5
  },
  {
    field: "sede_id",
    headerName: "Sede",
    flex: 0.25
  },
  {
    field: "empresa",
    headerName: "Empresa",
    valueGetter: (value) => value.value.nombre,
    flex: 1
  },
];
