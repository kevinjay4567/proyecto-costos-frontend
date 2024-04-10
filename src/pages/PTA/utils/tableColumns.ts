import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "sede",
    headerName: "Sede",
    flex: 0.20
  },
  {
    field: "item",
    headerName: "Item",
    flex: 0.12
  },
  {
    field: "actividad_item",
    headerName: "Actividad",
    flex: 1
  },
  {
    field: "categoria_docente",
    headerName: "Categoria Docente",
    flex: 1
  },
  {
    field: "tipo",
    headerName: "Tipo",
    flex: 0.5
  },
  {
    field: "valor",
    headerName: "Valor",
    flex: 0.5
  },
]
