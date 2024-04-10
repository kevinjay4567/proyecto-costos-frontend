import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.25
  },
  {
    field: "sede",
    headerName: "Sede",
    flex: 0.5
  },
  {
    field: "vinculacion",
    headerName: "Vinculacion",
    flex: 0.7
  },
  {
    field: "actividad",
    headerName: "Actividad",
    flex: 0.6
  },
  {
    field: "facultad",
    headerName: "Facultad",
    flex: 1
  },
  {
    field: "programa",
    headerName: "Programa",
    flex: 1
  },
  {
    field: "promedio",
    headerName: "Promedio",
    flex: 0.5
  },
  {
    field: "nivel",
    headerName: "Nivel",
    flex: 1
  },
];
