import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { CustomInputProps } from './CustomInput.props';

export const CustomInput = forwardRef<
  HTMLInputElement,
  PropsWithChildren<CustomInputProps>
>(
  (
    { isForSubscribtionForm, ...props }: CustomInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        ref={ref}
        className={`${
          isForSubscribtionForm
            ? 'mt-0 w-full md:px-6 px-9 md:py-4 py-6 rounded-full text-sm text-grey focus:text-black outline-primary'
            : 'p-2 mt-1 border bg-zinc-50 shadow-inner rounded-2xl w-full'
        }`}
        {...props}
      />
    );
  }
);
CustomInput.displayName = 'CustomInput';
