import { useEffect, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { usePostPTA } from '@/hooks/usePTA';
import { SubmitBtn } from '.';
import { CargaMessage } from './CargaMessage';

interface Archivo {
  archivo: Blob;
  archivoNombre: string;
}

export function CargaExcel() {
  const [archivo, setArchivo] = useState<Archivo>();
  // const [option, setOption] = useState<String>("PTA");
  const formData = new FormData();

  function changeArchivo(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.files !== null
      ? setArchivo({
        archivo: event.target.files[0],
        archivoNombre: event.target.files[0].name,
      })
      : setArchivo({ archivo: new Blob(), archivoNombre: '' });
  }

  //const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  // setOption(e.target.value);
  //}

  useEffect(() => {
    if (archivo) {
      formData.append('file', archivo.archivo, archivo.archivoNombre);
    }
  });

  // mutation === undefined ? console.log("NA") : console.log(mutation.error);

  // if (mutation?.isPending) return <h1>Cargando el archivo...</h1>;

  return (
    <>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <h1>Carga Excel</h1>
          <select>
            <option>
              Balances
            </option>
            <option>
              Datos Persona
            </option>
            <option>
              PTA
            </option>
          </select>
          <input
            type="file"
            onChange={(e) => changeArchivo(e)}
            accept=".xlsx, .xls"
          />
          <SubmitBtn usePost={usePostPTA()} formData={formData} />
          <CargaMessage mutation={usePostPTA()} />
        </Stack>
      </Container>
    </>
  );
}
