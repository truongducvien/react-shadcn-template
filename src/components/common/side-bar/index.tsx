import { cn } from '@/lib/utils';

import { CollapsibleMenu } from './CollapsibleMenu';
import { MenuItem } from './MenuItem';
import { IMenuItem } from './types';

interface SideBarProps {
  menuList: IMenuItem[];
  openKeys: string[];
  activeKeys: string[];
  onToggleOpen?: (key: string) => void;
  onActive?: (keys: string[]) => void;
  className?: string;
  showConnectorLine?: boolean;
}

export const SideBar = ({
  menuList,
  openKeys,
  activeKeys,
  onToggleOpen,
  onActive,
  className,
  showConnectorLine,
}: SideBarProps) => {
  if (!menuList.length) return;

  return (
    <div className={cn('w-full max-w-[40%] h-full p-2', className)}>
      {menuList.map((item) =>
        !!item.children?.length ? (
          <CollapsibleMenu
            activeIcon={item.activeIcon || item.icon}
            isOpen={openKeys?.includes(item.key)}
            isActive={activeKeys?.includes(item.key)}
            onClick={() => onToggleOpen?.(item.key)}
            className={item.className}
            activeClassName={item.activeClassName}
            {...item}
            key={item.key}
          >
            {!!item.children?.length &&
              item.children?.map((it) => (
                <MenuItem
                  activeIcon={it.activeIcon || it.icon}
                  isSubItem
                  isActive={activeKeys?.includes(it.key)}
                  onClick={() => onActive?.([item.key, it.key])}
                  showConnectorLine={showConnectorLine}
                  {...it}
                  key={it.key}
                />
              ))}
          </CollapsibleMenu>
        ) : (
          <MenuItem
            isActive={activeKeys?.includes(item.key)}
            onClick={() => onActive?.([item.key])}
            {...item}
            key={item.key}
          />
        )
      )}
    </div>
  );
};
