import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CarouselSliderButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  action: () => void;
  direction: string;
  isSmallSize?: boolean;
}
