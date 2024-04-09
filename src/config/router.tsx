import { createBrowserRouter } from "react-router-dom";
import { Login, Dashboard, DatosPersona } from "@/pages";
import { Carga } from "@/pages/Carga";
import { Balance } from "@/pages/Balance";
import { PTA } from "@/pages/PTA/PTA";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/datospersona",
    element: <DatosPersona />,
  },
  {
    path: "/balances",
    element: <Balance />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/carga",
    element: <Carga />,
  },
  {
    path: "/pta",
    element: <PTA />,
  },
]);
