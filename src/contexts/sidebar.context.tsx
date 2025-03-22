/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IMenuItem } from '@/components/common/side-bar/types';
import { menuList } from '@/constant/sidebar';

interface Props {
  children?: ReactNode;
}

export interface ISideBarContext {
  menuList: IMenuItem[];
  openKeys: string[];
  activeKeys: string[];
  onToggleOpen: (key: string) => void;
  onActive: (keys: string[]) => void;
}

const initialValues: ISideBarContext = {
  menuList: [],
  openKeys: [],
  activeKeys: [],
  onToggleOpen: () => {},
  onActive: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const SideBarContext = createContext<ISideBarContext>(initialValues);

const SideBarProvider = ({ children }: Props) => {
  const location = useLocation();

  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const handleToggleOpen = (key: string) => {
    const matched = openKeys.findIndex((it) => it === key);
    const arr = [...openKeys];
    if (matched < 0) arr.push(key);
    else arr.splice(matched, 1);
    setOpenKeys(arr);
  };

  const handleActive = (keys: string[]) => {
    setActiveKeys(keys);
  };

  const findKeysByPath = (
    source: IMenuItem[],
    path: string,
    parentKey?: string
  ): { key: string; parentKey?: string } | null => {
    for (let i = 0; i < source.length; i++) {
      if (source[i].href === path) {
        return {
          key: source[i].key,
          parentKey,
        };
      }
      if (source[i].children) {
        const found = findKeysByPath(source[i].children as IMenuItem[], path, source[i].key);
        if (found) return found;
      }
    }
    return null;
  };

  const contextValue: ISideBarContext = {
    menuList,
    openKeys,
    activeKeys,
    onToggleOpen: handleToggleOpen,
    onActive: handleActive,
  };

  useEffect(() => {
    // Initial sidebar's status
    const keys = findKeysByPath(menuList, location.pathname);
    !!keys?.key && setActiveKeys(() => (keys.parentKey ? [keys.key, keys.parentKey] : [keys.key]));
    !!keys?.parentKey &&
      setOpenKeys((prev) =>
        !prev.includes(keys.parentKey as string) ? [...prev, keys.parentKey as string] : prev
      );
  }, []);

  return <SideBarContext.Provider value={contextValue}>{children}</SideBarContext.Provider>;
};

export default SideBarProvider;
