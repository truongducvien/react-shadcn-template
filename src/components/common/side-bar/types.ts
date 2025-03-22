import { ReactNode } from 'react';

export interface IMenuItem {
  key: string;
  label: string;
  renderLabel?: (className?: string) => ReactNode;
  showIcon?: boolean; // Default True
  icon?: ReactNode;
  activeIcon?: ReactNode;
  href?: string;
  children?: IMenuItem[];
  className?: string;
  activeClassName?: string;
}
