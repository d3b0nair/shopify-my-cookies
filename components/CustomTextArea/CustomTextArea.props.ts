import {
  DetailedHTMLProps,
  FocusEventHandler,
  FormEventHandler,
  HTMLAttributes,
  Ref,
} from 'react';

export interface CustomTextAreaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  id?: string | undefined;
  ref?: Ref<HTMLTextAreaElement> | undefined;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined;
  onChange?: FormEventHandler<HTMLTextAreaElement> | undefined;
  placeholder?: string | undefined;
  value?: string | undefined;
}
