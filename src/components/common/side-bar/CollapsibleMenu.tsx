import { motion } from 'motion/react';
import { HTMLAttributes, ReactNode } from 'react';

import ChevronDown from '@/assets/icons/ChevronDown';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

interface CollapsibleMenuProps {
  label: string;
  icon?: ReactNode;
  isOpen?: boolean;
  isActive?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

export const CollapsibleMenu = ({
  label,
  icon,
  isOpen = false,
  isActive = false,
  children,
  onClick,
  className,
}: CollapsibleMenuProps) => {
  return (
    <Collapsible open={isOpen}>
      <CollapsibleTrigger asChild className="w-full">
        <Button
          variant={'ghost'}
          className={cn(
            'flex justify-between hover:bg-platinum w-full',
            'transition-all duration-300',
            { 'bg-platinum': isActive },
            className
          )}
          onClick={onClick}
        >
          <div className="flex gap-2">
            {icon}
            <span>{label}</span>
          </div>
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <ChevronDown />
          </motion.div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          'flex flex-col p-0.5 overflow-hidden',
          'data-[state=open]:animate-collapsible-down',
          'data-[state=closed]:animate-collapsible-up'
        )}
      >
        <div className="flex flex-col gap-0.5 pl-6">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};
