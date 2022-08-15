import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FormInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: string;
  placeholder: string;
  type: string;
}
