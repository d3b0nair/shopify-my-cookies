import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { CustomTextAreaProps } from './CustomTextArea.props';

export const CustomTextArea = forwardRef<
  HTMLTextAreaElement,
  PropsWithChildren<CustomTextAreaProps>
>(
  (
    { ...props }: CustomTextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <textarea
        ref={ref}
        className="border bg-zinc-50 shadow-inner rounded-2xl w-full min-h-[100px] p-4 mt-1"
        {...props}
      />
    );
  }
);
CustomTextArea.displayName = 'CustomTextArea';
