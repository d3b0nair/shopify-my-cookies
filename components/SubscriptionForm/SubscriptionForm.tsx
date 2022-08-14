import {
  ArrowNarrowRightIcon as SendIcon,
  CheckIcon as SuccessIcon,
  XIcon as ErrorIcon,
} from '@heroicons/react/outline';
import { Input } from '..';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';

export const SubscriptionForm = () => {
  interface IFormInput {
    email: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IFormInput>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  useEffect(() => {
    if (errors.email) {
      setIsSuccess(false);
    }
  }, [errors.email]);

  const onSubmit: SubmitHandler<IFormInput> = ({ email }) => {
    console.log(`Simulating subscribing ${email} to newsletter`);
    setIsSuccess(true);
    reset();
  };

  const actionButtonStyle =
    'absolute top-[18px] right-[16px] sm:top-[18px] sm:right-[11px] md:top-[10px] md:right-[19px] lg:top-[9px] lg:right-[21px] h-9 w-9 cursor-pointer';

  return (
    <form
      className="relative w-full transition-colors"
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e).catch((err) => {
          console.log(err);
        });
      }}
    >
      <Input
        error={errors.email}
        type="email"
        {...register('email', {
          required: {
            value: true,
            message: 'Enter an email address',
          },
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email address',
          },
        })}
        className="mt-0 w-full md:px-6 px-9 md:py-4 py-6 rounded-full text-sm text-grey focus:text-black outline-primary"
        placeholder="Enter your email here..."
      />
      <button
        aria-label="subscripe email address"
        role="button"
        type="submit"
        onClick={() => clearErrors()}
        className="transition-all"
      >
        {isSuccess ? (
          <SuccessIcon
            className={`${actionButtonStyle} stroke-green-300 hover:stroke-green-400 active:stroke-green-400`}
          />
        ) : errors.email ? (
          <ErrorIcon
            className={`${actionButtonStyle} stroke-red-400 hover:stroke-red-500 active:stroke-red-600`}
          />
        ) : (
          <SendIcon
            className={`${actionButtonStyle} stroke-offGrey hover:stroke-accentLighter active:stroke-accent`}
          />
        )}
      </button>
    </form>
  );
};
