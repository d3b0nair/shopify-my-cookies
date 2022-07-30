import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IconWithStyleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}
