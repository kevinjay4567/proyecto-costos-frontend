import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Subcuenta",
    valueGetter: (value) => value.value.subcuenta,
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
    valueGetter: (value) => value.value.concepto.id,
  },
  {
    field: "sede",
    headerName: "Sede",
  },
  {
    field: "empresa",
    headerName: "Empresa",
    valueGetter: (value) => value.value.empresa.nombre,
  },
];
