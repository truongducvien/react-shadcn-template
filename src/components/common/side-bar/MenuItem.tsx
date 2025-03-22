import { ReactNode, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Dot from '@/assets/icons/Dot';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  label: string;
  renderLabel?: (className?: string) => ReactNode;
  showIcon?: boolean;
  icon?: ReactNode;
  activeIcon?: ReactNode;
  href?: string;
  isSubItem?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
  showConnectorLine?: boolean;
}

const defaultIcon = <Dot />;
const defaultActiveIcon = <Dot r={4} />;

export const MenuItem = ({
  label,
  renderLabel,
  showIcon = true,
  icon,
  activeIcon,
  href,
  isSubItem = false,
  isActive = false,
  onClick,
  className,
  activeClassName,
  showConnectorLine,
}: MenuItemProps) => {
  const renderIcon = useCallback(() => {
    if (!showIcon) return;
    if (!icon) return isActive ? defaultActiveIcon : defaultIcon;
    if (isActive && activeIcon) return activeIcon;
    return icon;
  }, [showIcon, icon, activeIcon, isActive]);

  const baseClassName = cn(
    'flex justify-start gap-2 w-full text-sm font-medium px-4 py-2 rounded-md',
    'transition-all duration-200',
    isActive && 'bg-platinum',
    isSubItem ? 'relative bg-unset hover:font-bold' : 'hover:bg-platinum',
    isActive && isSubItem && 'font-bold'
  );

  const Comp = href ? Link : Button;

  if (renderLabel) {
    return (
      <div onClick={onClick} className="relative cursor-pointer">
        {showConnectorLine && <AnchorLine />}
        {renderLabel(isActive ? activeClassName : className)}
      </div>
    );
  }

  return (
    <Comp
      to={href || ''}
      onClick={onClick}
      variant={'ghost'}
      className={cn(baseClassName, className, isActive && activeClassName)}
    >
      {showConnectorLine && <AnchorLine />}
      {renderIcon()}
      <span className={cn({ 'font-bold': isActive && isSubItem })}>{label}</span>
    </Comp>
  );
};

const AnchorLine = () => (
  <svg
    width="15px"
    height="100px"
    viewBox="0 0 15 100"
    fill="none"
    className="absolute bottom-[calc(50%_-_2px)] right-[100%]"
  >
    <path
      d="M1 1 L1 89 Q1,98 11,98 L13 98"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-platinum"
    />
  </svg>
);
