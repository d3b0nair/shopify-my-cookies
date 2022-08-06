import {
  ArrowNarrowRightIcon as SendIcon,
  CheckIcon as SuccessIcon,
  XIcon as ErrorIcon,
} from '@heroicons/react/outline';
import { Input } from '../../components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';

export const HeroSubscriptionForm = () => {
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
    'absolute top-[20px] right-[20px] sm:top-[20px] sm:right-[15px] md:top-[12px] md:right-[24px] lg:top-[18px] lg:right-[25px] h-9 w-9 cursor-pointer';

  return (
    <form
      className="relative w-full"
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
        className="mt-0 w-full md:px-6 px-9 md:py-4 py-6 md:text-base lg:text-2xl rounded-full text-offGrey focus:text-black outline-primary"
        placeholder="Enter your email here..."
      />
      <button role="button" type="submit" onClick={() => clearErrors()}>
        {isSuccess ? (
          <SuccessIcon className={`${actionButtonStyle} stroke-green-300`} />
        ) : errors.email ? (
          <ErrorIcon className={`${actionButtonStyle} stroke-red-400`} />
        ) : (
          <SendIcon
            className={`${actionButtonStyle} stroke-offGrey hover:stroke-accent`}
          />
        )}
      </button>
    </form>
  );
};
