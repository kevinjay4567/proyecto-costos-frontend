import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes, queryCLient } from './config';
import { QueryClientProvider } from '@tanstack/react-query';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
);
