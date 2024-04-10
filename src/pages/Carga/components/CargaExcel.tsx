import { useEffect, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { usePostPTA, usePostBalance } from '@/hooks';
import { SubmitBtn } from '.';
import { UseMutationResult } from '@tanstack/react-query';

interface Archivo {
  archivo: Blob;
  archivoNombre: string;
}

export function CargaExcel() {
  const [archivo, setArchivo] = useState<Archivo>();
  const [option, setOption] = useState<String>("Balances");
  const formData = new FormData();

  function changeArchivo(event: React.ChangeEvent<HTMLInputElement>) {

    event.target.files !== null
      ? setArchivo({
        archivo: event.target.files[0],
        archivoNombre: event.target.files[0].name,
      })
      : setArchivo({ archivo: new Blob(), archivoNombre: '' });

  }

  function changePost(): UseMutationResult<any, Error, FormData> {

    switch (option) {
      case 'PTA': return usePostPTA();
      default: return usePostBalance();
    }

  }

  const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  }

  useEffect(() => {

    if (archivo) {
      formData.append('file', archivo.archivo, archivo.archivoNombre);
    }

  });

  return (
    <>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <h1>Carga Excel</h1>
          <select onChange={(e) => optionChange(e)}>
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
          <SubmitBtn usePost={changePost()} formData={formData} />
        </Stack>
      </Container>
    </>
  );
}
