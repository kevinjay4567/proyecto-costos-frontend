import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
  { field: 'subcuenta', headerName: 'Subcuenta', width: 200 },
  { field: 'descripcion', headerName: 'Descripcion', width: 600 },
  { field: 'agrupacion', headerName: 'Agrupacion'},
];

export default function Files() {
  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/files/agrupaciones')
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <DataGrid
      sx={{height: '88dvh', maxWidth: '75dvw', margin: '0 auto'}}
        getRowId={(row) => row.subcuenta}
        rows={rows}
        columns={columns}
      />
    </>
  );
}
