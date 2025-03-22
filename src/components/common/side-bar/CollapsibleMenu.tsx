import { ReactNode } from 'react';

import ChevronDown from '@/assets/icons/ChevronDown';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

interface CollapsibleMenuProps {
  label: string;
  renderLabel?: (className?: string) => ReactNode;
  icon?: ReactNode;
  activeIcon?: ReactNode;
  isOpen?: boolean;
  isActive?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
}

export const CollapsibleMenu = ({
  label,
  renderLabel,
  icon,
  activeIcon,
  isOpen = false,
  isActive = false,
  children,
  onClick,
  className,
  activeClassName,
}: CollapsibleMenuProps) => {
  return (
    <Collapsible open={isOpen}>
      <CollapsibleTrigger asChild className="w-full">
        <div className="relative">
          {renderLabel ? (
            <div onClick={onClick}>{renderLabel(isActive ? activeClassName : className)}</div>
          ) : (
            <Button
              variant={'ghost'}
              className={cn(
                'flex justify-between hover:bg-platinum w-full h-fit',
                'transition-all duration-300',
                className,
                { 'bg-platinum': isActive },
                isActive && activeClassName
              )}
              onClick={onClick}
            >
              <div className="flex gap-2">
                {isActive ? activeIcon || icon : icon}
                <span>{label}</span>
              </div>
            </Button>
          )}
          <ChevronDown
            className={cn(
              'absolute right-2 top-[calc(50%_-_9px)]',
              isOpen && 'rotate-180',
              'transition-transform duration-200'
            )}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          'flex flex-col p-0.5 overflow-hidden',
          'data-[state=open]:animate-collapsible-down',
          'data-[state=closed]:animate-collapsible-up'
        )}
      >
        <div className="flex flex-col relative gap-0.5 ml-6 pl-3">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};
