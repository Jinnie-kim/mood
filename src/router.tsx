import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Home from './pages/Home';
import MyPage from './pages/Mypage';
import PlayList from './pages/PlayList';
import Login from './pages/Login';
import Loading from './pages/Loading';

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
  {
    id: 2,
    path: '/playlist',
    element: <PlayList />,
    withAuth: true,
  },
  {
    id: 3,
    path: '/mypage',
    element: <MyPage />,
    withAuth: true,
  },
  {
    id: 4,
    path: '/loading',
    element: <Loading />,
    withAuth: true,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <AuthLayout>{router.element}</AuthLayout>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);
