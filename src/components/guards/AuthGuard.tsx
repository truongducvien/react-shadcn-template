import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '@/hooks/context-hooks';
import ROUTE_PATH from '@/router/path';

interface AuthGuardProps {
  children?: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) return <Navigate to={ROUTE_PATH.auth} />;

  return children;
}
