import { useNavigate } from 'react-router-dom';

import { LogInFields, LogInForm } from '@/components/form';
import { useAuthContext } from '@/hooks/context-hooks';
import ROUTE_PATH from '@/router/path';

export default function Auth() {
  const { setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const submit = (data: LogInFields) => {
    // Call api
    setIsAuthenticated(true);
    // Save token
    // Redirect
    navigate(ROUTE_PATH.home);
  };

  return (
    <div className="flex flex-col w-full">
      <LogInForm onSubmit={submit} />
    </div>
  );
}
