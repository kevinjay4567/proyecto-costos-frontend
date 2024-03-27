import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Files from '@/pages/Files';
import { Login } from '@/pages/Login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/files',
    element: <Files />,
  },
]);

export default routes;
