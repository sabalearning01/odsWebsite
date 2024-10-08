import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page.tsx';
import About from './pages/about.tsx';
import Home from './pages/home.tsx';
import Sponsor from './pages/sponsor.tsx';
import Exhibitor from './pages/exhibitor.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: '/sponsor',
    element: <Sponsor />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: '/store',
  //   element: <Store />,
  //   errorElement: <ErrorPage />
  // },
  {
    path: '/exhibitors',
    element: <Exhibitor />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>
);
