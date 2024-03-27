import axios from 'axios';
import { useState } from 'react';
import OKMessage from './OKMessage';
import ErrorMessage from './ErrorMessage';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  SwipeableDrawer,
} from '@mui/material';

interface Archivo {
  archivo: Blob;
  archivoNombre: string;
}

function CargaExcel() {
  axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const [archivo, setArchivo] = useState<Archivo>();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();
  const [errors, setErrors] = useState([]);
  const [request, setRequest] = useState(0);

  function changeArchivo(event) {
    setArchivo({
      archivo: event.target.files[0],
      archivoNombre: event.target.files[0].name,
    });
  }
  async function cargaArchivo() {
    setRequest(0);
    const formData = new FormData();
    if (archivo) {
      formData.append('file', archivo.archivo, archivo.archivoNombre);
    }

    await axios
      .post('http://localhost:8080/carga', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setMessage(response.data.message);
        setRequest(response.status);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
        setErrors(error.response.data.errors);
        setRequest(error.response.request.status);
      });
  }

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(open);
    };

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List style={{ padding: '20px' }}>
          <ListSubheader>Sidebar Menu</ListSubheader>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Item 1" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Item 2" />
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <Container maxWidth="sm">
        <Stack>
          <Button onClick={toggleDrawer(true)} variant="outlined">
            Open Drawer
          </Button>
        </Stack>
        <Stack spacing={2}>
          <h1>Carga Excel</h1>
          <input
            type="file"
            onChange={(e) => changeArchivo(e)}
            accept=".xlsx, .xls"
          />
          <Button variant="contained" onClick={cargaArchivo}>
            Carga
          </Button>
          {message && errors.length == 0 && request == 200 ? (
            <OKMessage message={message} />
          ) : null}
          {request === 400 ? <ErrorMessage error={message} index={0} /> : null}
          {errors.length > 0
            ? errors.map((error, index) => {
                return (
                  <>
                    <ErrorMessage error={error} index={index} />
                  </>
                );
              })
            : null}
        </Stack>
      </Container>
    </>
  );
}

export default CargaExcel;
