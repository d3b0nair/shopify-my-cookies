import {
  ArrowNarrowRightIcon as SendIcon,
  CheckIcon as SuccessIcon,
  XIcon as ErrorIcon,
} from '@heroicons/react/outline';
import { CustomInput, FieldWithController } from '..';
import {
  useForm,
  SubmitHandler,
  Control as ControlType,
} from 'react-hook-form';
import { useState, useEffect } from 'react';

export const SubscriptionForm = () => {
  interface IFormInput {
    email: string;
  }
  const {
    control,
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
      <FieldWithController
        required
        control={control as unknown as ControlType}
        type={'email'}
        customPattern={{
          value:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Please enter a valid email address',
        }}
        error={errors.email}
      >
        <CustomInput isForSubscribtionForm placeholder={'Enter your email'} />
      </FieldWithController>
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
            className={`${actionButtonStyle} stroke-offGrey active:stroke-accentLighter hover:stroke-accent`}
          />
        )}
      </button>
    </form>
  );
};
