import { Outlet } from 'react-router-dom';

import SideBarProvider from '@/contexts/sidebar.context';

import { SideBar } from '../common/side-bar';

const MainLayout = () => (
  <SideBarProvider>
    <div className="w-full flex flex-col p-2">
      <div className="sticky top-0 h-[50px] border-b border-border">Header</div>

      <div className="flex h-full">
        <SideBar />
        <Outlet />
      </div>
    </div>
  </SideBarProvider>
);

export default MainLayout;
