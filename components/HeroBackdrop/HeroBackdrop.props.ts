import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface HeroBackDropProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageSelector: Dispatch<SetStateAction<number>>;
  imageQty: number;
  selectedImage: number;
}
