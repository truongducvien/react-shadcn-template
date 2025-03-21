import { useContext } from 'react';

import { ISideBarContext, SideBarContext } from '@/contexts/sidebar.context';

const useSideBarContext = () => useContext<ISideBarContext>(SideBarContext);

export default useSideBarContext;
