import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <div className="flex items-center justify-center w-full">
    <Outlet />
  </div>
);

export default AuthLayout;
