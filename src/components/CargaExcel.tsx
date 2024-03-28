import { useEffect, useState } from 'react';
import { OKMessage, ErrorMessage } from '@/components';
import { Button, Container, Stack } from '@mui/material';
import { usePostAgrupaciones } from '@/hooks/useAgrupaciones';

interface Archivo {
  archivo: Blob;
  archivoNombre: string;
}

export function CargaExcel() {
  const [archivo, setArchivo] = useState<Archivo>();
  const formData = new FormData();

  function changeArchivo(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.files !== null
      ? setArchivo({
          archivo: event.target.files[0],
          archivoNombre: event.target.files[0].name,
        })
      : setArchivo({ archivo: new Blob(), archivoNombre: '' });
  }

  const mutation = usePostAgrupaciones();

  const handleSubmit = () => {
    mutation.mutate(formData);
  };

  useEffect(() => {
    if (archivo) {
      formData.append('file', archivo.archivo, archivo.archivoNombre);
    }
  }, [archivo]);

  console.log(mutation.error);

  if (mutation.isPending) return <h1>Cargando el archivo...</h1>;

  return (
    <>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <h1>Carga Excel</h1>
          <input
            type="file"
            onChange={(e) => changeArchivo(e)}
            accept=".xlsx, .xls"
          />
          <Button variant="contained" onClick={handleSubmit}>
            Carga
          </Button>
          {mutation.isError ? (
            <ErrorMessage error={mutation.error.message} />
          ) : null}
          {mutation.isSuccess ? (
            <OKMessage message={mutation.data.message} />
          ) : null}
        </Stack>
      </Container>
    </>
  );
}
