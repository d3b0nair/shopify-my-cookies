import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TextWithMiniIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}
