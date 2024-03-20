import { ReactNode } from 'react';

export interface ILargeBtn {
  label: string | ReactNode;
  icon: string;
  path: string;
  isDisabled?: boolean;
}
