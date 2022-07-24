import { DetailedHTMLProps, FieldsetHTMLAttributes } from 'react';
import { OptionsModel } from '../../interfaces/products.interface';

export interface ProductOptionProps
  extends Omit<
      DetailedHTMLProps<
        FieldsetHTMLAttributes<HTMLFieldSetElement>,
        HTMLFieldSetElement
      >,
      'name' | 'id'
    >,
    OptionsModel {
  selectedOptions: { [key: string]: string };
  setOptions: (name: string, value: string) => void;
}
