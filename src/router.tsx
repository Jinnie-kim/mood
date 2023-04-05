import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Home from './pages/Home';
import Login from './pages/Login';

const code = new URLSearchParams(window.location.search).get('code');

interface RouterElement {
  id: number;
  path: string;
  element: React.ReactNode;
  withAuth: boolean;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    element: <Login />,
    withAuth: false,
  },
  {
    id: 1,
    path: '/home',
    element: <Home />,
    withAuth: true,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <AuthLayout code={code as string}>{router.element}</AuthLayout>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);
