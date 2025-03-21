import { ReactNode } from 'react';

export interface IMenuItem {
  key: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  children?: IMenuItem[];
}
