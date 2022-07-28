import { InputProps } from './Input.props';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export const Input = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputProps>
>(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div>
        <input
          ref={ref}
          {...props}
          className={`${className ? className : ''} p-2 mt-1`}
        />
        {error && <span role="alert">{error.message}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';
