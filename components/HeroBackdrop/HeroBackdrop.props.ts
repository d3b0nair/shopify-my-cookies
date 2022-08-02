import { Dispatch, SetStateAction } from "react";

export interface HeroBackDropProps {
  imageSelector: Dispatch<SetStateAction<number>>;
  imageQty: number;
  selectedImage: number;
}
