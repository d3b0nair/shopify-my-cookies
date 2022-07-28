import { DetailedHTMLProps, FieldsetHTMLAttributes } from 'react';

export interface ProductOptionProps
  extends DetailedHTMLProps<
    FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  > {
  name: string;
  values: string[];
  selectedOptions: { [key: string]: string };
  setOptions: (name: string, value: string) => void;
}
