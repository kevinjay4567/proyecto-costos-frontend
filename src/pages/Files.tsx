import { useGetAllAgrupaciones } from '@/hooks/useAgrupaciones';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useEffect } from 'react';

const columns: GridColDef[] = [
  { field: 'subcuenta', headerName: 'Subcuenta', width: 200 },
  { field: 'descripcion', headerName: 'Descripcion', width: 500 },
  { field: 'agrupacion', headerName: 'Agrupacion', width: 300 },
  { field: 'anho', headerName: 'Año' },
];

export function Files() {
  const { data, isLoading } = useGetAllAgrupaciones();

  useEffect(() => {}, [data]);

  console.log(data);

  if (isLoading)
    return (
      <DataGrid
        sx={{ height: '88dvh', maxWidth: '75dvw', margin: '0 auto' }}
        rows={[]}
        columns={columns}
        loading
      ></DataGrid>
    );

  return (
    <>
      <DataGrid
        sx={{ height: '88dvh', maxWidth: '75dvw', margin: '0 auto' }}
        getRowId={(row) => row.subcuenta}
        rows={data}
        columns={columns}
      />
    </>
  );
}
