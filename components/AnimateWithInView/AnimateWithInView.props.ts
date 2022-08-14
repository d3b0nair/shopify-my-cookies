import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AnimateWithInViewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  animation: string;
  defaultState: string;
  threshold?: number;
}
