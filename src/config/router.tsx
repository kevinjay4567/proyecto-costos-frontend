import { createBrowserRouter } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { Dashboard } from '@/pages/Home/Dashboard';
import { Carga } from '@/pages/Carga';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/carga',
    element: <Carga />,
  },
]);
