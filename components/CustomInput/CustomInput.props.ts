import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface CustomInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id?: string | undefined;
  placeholder?: string | undefined;
  value?: string | undefined;
  isForSubscribtionForm?: boolean;
}
