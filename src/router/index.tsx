import { ReactNode } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AuthGuard from '@/components/guards/AuthGuard';
import { AuthLayout, MainLayout } from '@/components/layout';

import { Auth, Home, NotFoundPage, OTPVerification, Register, ResetPassword } from './element';
import ROUTE_PATH from './path';

// TODO: Add extra parameters (roles, permission, ...) to access specific routes
const withAuth = (element: ReactNode) => <AuthGuard>{element}</AuthGuard>;

const AppRouter = () => {
  const routes: RouteObject[] = [
    /**
     * Public route
     */
    {
      path: ROUTE_PATH.register,
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Register />,
        },
      ],
    },
    {
      path: ROUTE_PATH.auth,
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Auth />,
        },
      ],
    },
    {
      path: ROUTE_PATH.reset_password,
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <ResetPassword />,
        },
      ],
    },
    {
      path: ROUTE_PATH.otp_verification,
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <OTPVerification />,
        },
      ],
    },

    /**
     * Private routes:
     */
    {
      path: ROUTE_PATH.home,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: withAuth(<Home />),
        },
      ],
    },
    {
      path: '/posts',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: withAuth(<h2>All posts</h2>),
        },
        {
          path: 'new',
          element: withAuth(<h2>New post</h2>),
        },
      ],
    },
    {
      path: '/me',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: withAuth(<h2>My profile</h2>),
        },
      ],
    },
    {
      path: '/explore',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: withAuth(<h2>Explore</h2>),
        },
      ],
    },
    {
      path: '/setting',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: withAuth(<h2>Setting</h2>),
        },
      ],
    },

    /**
     * 404 routes:
     */
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];
  return useRoutes(routes);
};

export default AppRouter;
