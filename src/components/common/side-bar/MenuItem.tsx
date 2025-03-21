import { HTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import Dot from '@/assets/icons/Dot';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  label: string;
  icon?: ReactNode;
  href?: string;
  isSubItem?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

export const MenuItem = ({
  label,
  icon,
  href,
  isSubItem = false,
  isActive = false,
  onClick,
  className,
}: MenuItemProps) => {
  if (href) {
    return (
      <Button onClick={onClick} asChild variant={'ghost'} className="p-2">
        <Link
          to={href}
          className={cn(
            'flex gap-1 justify-start w-full',
            isSubItem ? 'hover:font-bold' : 'hover:bg-platinum',
            'transition-all duration-200',
            { 'bg-platinum': isActive && !isSubItem },
            className
          )}
        >
          {!!icon ? icon : isSubItem ? <Dot r={isActive ? 4 : undefined} /> : null}
          <span className={cn({ 'font-bold': isActive && isSubItem })}>{label}</span>
        </Link>
      </Button>
    );
  }

  return (
    <Button
      variant={'ghost'}
      className={cn(
        'flex justify-between hover:bg-platinum w-full',
        'transition-all duration-200',
        { 'bg-platinum': isActive },
        className
      )}
    >
      <span>{label}</span>
    </Button>
  );
};
