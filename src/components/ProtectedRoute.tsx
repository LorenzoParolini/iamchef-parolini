import { Navigate } from 'react-router';
import type { ReactNode } from 'react';
import useAPIStore from '../store/useAPIStore';

// componente per proteggere le rotte che richiedono api key
interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { ApiKey } = useAPIStore();
  
  // se non c'è api key, reindirizza a /set-api
  if (!ApiKey) {
    return <Navigate to="/set-api" replace />;
  }
  
  return <>{children}</>;
}
