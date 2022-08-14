import { InputProps } from './Input.props';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

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
        {error && (
          <span
            className="text-red-800 flex justify-center md:justify-start"
            role="alert"
          >
            <ExclamationCircleIcon
              className="self-center"
              width={22}
              height={22}
            />
            &nbsp;
            <span>{error.message}</span>
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
