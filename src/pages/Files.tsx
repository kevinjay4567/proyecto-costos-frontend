import { useGetAllBalances } from '@/hooks';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect } from 'react';

const columns: GridColDef[] = [
  {
    field: 'conceptoRelation',
    headerName: 'Concepto',
    valueGetter: (value) => value.value.nombre,
    width: 150
  },
  {
    field: 'empresaRelation',
    headerName: 'Empresa',
    valueGetter: (value) => value.value.nombre,
    width: 260
  },
  {
    field: 'sedeRelation',
    headerName: 'Sede',
    valueGetter: (value) => value.value.id,
  },
  {
    field: 'subcuentaRelation',
    headerName: 'Subcuenta',
    valueGetter: (value) => value.value.id,
  },
  { field: 'valor', headerName: 'Valor' },
];

export function Files() {
  const { data, isLoading } = useGetAllBalances();

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
        rows={data !== undefined ? data : []}
        columns={columns}
      />
    </>
  );
}
