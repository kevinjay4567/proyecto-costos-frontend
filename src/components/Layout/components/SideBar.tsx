import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  barStatus: boolean;
}

export function SideBar({ barStatus }: Props) {
  const links = [
    {
      id: 0,
      title: 'Home',
      url: '/',
    },
    {
      id: 1,
      title: 'Cargar Archivo Nuevo',
      url: '/carga',
    },
    {
      id: 2,
      title: 'Login',
      url: '/login',
    },
  ];

  return (
    <Drawer
      variant="temporary"
      open={barStatus}
      sx={{
        width: 100,
      }}
    >
      <Toolbar />
      <List sx={{ width: '10vw' }}>
        {links.map((link) => (
          <ListItem key={link.id}>
            <Link to={link.url} relative="path" state={{ some: 'Hello' }}>
              <ListItemText primary={link.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
