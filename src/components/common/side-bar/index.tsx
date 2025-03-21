import { HTMLAttributes } from 'react';

import { useSideBarContext } from '@/hooks/context-hooks';
import { cn } from '@/lib/utils';

import { CollapsibleMenu } from './CollapsibleMenu';
import { MenuItem } from './MenuItem';

interface SideBarProps {
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

export const SideBar = ({ className }: SideBarProps) => {
  const { menuList, openKeys, activeKeys, onToggleOpen, onActive } = useSideBarContext();
  if (!menuList.length) return;

  return (
    <div className={cn('w-full max-w-[40%] h-full p-2', className)}>
      {menuList.map((item) =>
        !!item.children?.length ? (
          <CollapsibleMenu
            key={item.key}
            icon={item.icon}
            label={item.label}
            isOpen={openKeys?.includes(item.key)}
            isActive={activeKeys?.includes(item.key)}
            onClick={() => onToggleOpen(item.key)}
          >
            {!!item.children?.length &&
              item.children?.map((it) => (
                <MenuItem
                  key={it.key}
                  icon={it.icon}
                  label={it.label}
                  href={it.href}
                  isSubItem
                  isActive={activeKeys?.includes(it.key)}
                  onClick={() => onActive?.([item.key, it.key])}
                />
              ))}
          </CollapsibleMenu>
        ) : (
          <MenuItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={activeKeys?.includes(item.key)}
            onClick={() => onActive([item.key])}
          />
        )
      )}
    </div>
  );
};
