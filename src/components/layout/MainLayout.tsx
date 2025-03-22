import { Outlet } from 'react-router-dom';

import { useSideBarContext } from '@/hooks/context-hooks';

import { SideBar } from '../common/side-bar';

const MainLayout = () => {
  const sideBarContextValues = useSideBarContext();
  return (
    <div className="w-full flex flex-col p-2">
      <div className="sticky top-0 h-[50px] border-b border-border">Header</div>

      <div className="flex h-full">
        <SideBar className="w-[80%]" showConnectorLine {...sideBarContextValues} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
