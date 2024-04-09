import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  barStatus: boolean;
}

// TODO: Agregar rutas de las demas visualizaciones
export function SideBar({ barStatus }: Props) {
  const links = [
    {
      id: 0,
      title: "Home",
      url: "/",
    },
    {
      id: 1,
      title: "Cargar Archivo Nuevo",
      url: "/carga",
    },
    {
      id: 2,
      title: "Login",
      url: "/login",
    },
    {
      id: 3,
      title: "Balances",
      url: "/balances",
    },
    {
      id: 4,
      title: "Datos Persona",
      url: "/datospersona",
    },
    {
      id: 5,
      title: "PTA",
      url: "/pta",
    }
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
      <List sx={{ width: "10vw" }}>
        {links.map((link) => (
          <ListItem key={link.id}>
            <Link to={link.url} relative="path" state={{ some: "Hello" }}>
              <ListItemText primary={link.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
