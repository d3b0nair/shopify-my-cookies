import Image from 'next/image';
import { Input } from '../../components';
import heroImage from '../../public/hero.png';
import {
  ArrowNarrowRightIcon as SendIcon,
  CheckIcon as SuccessIcon,
  XIcon as ErrorIcon,
} from '@heroicons/react/outline';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';

export const HeroSection = (): JSX.Element => {
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
    'absolute top-[24px] right-[20px] sm:top-[24px] sm:right-[15px] md:top-[16px] md:right-[24px] lg:top-[22px] lg:right-[25px] h-9 w-9 cursor-pointer';

  return (
    <>
      <div className="flex flex-col h-[45vh] md:h-auto m-5 sm:m-0 justify-center md:justify-start lg:justify-center">
        <h1 className="text-center sm:text-left md:mx-0 text-2xl md:text-3xl lg:text-6xl font-bold">
          Grab Best Cookies
        </h1>
        <h2 className="mt-[25px] md:mt-[50px] text-base md:text-xl lg:text-2xl mb-[25px] md:mb-[85px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua!
        </h2>
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
            className="mt-0 w-full md:px-6 px-9 md:py-4 py-6 md:text-base lg:text-2xl rounded-full text-offGrey focus:text-primary outline-primary"
            placeholder="Enter your email here..."
          />
          <button role="button" type="submit" onClick={() => clearErrors()}>
            {isSuccess ? (
              <SuccessIcon
                className={`${actionButtonStyle} stroke-green-300`}
              />
            ) : errors.email ? (
              <ErrorIcon className={`${actionButtonStyle} stroke-red-400`} />
            ) : (
              <SendIcon
                className={`${actionButtonStyle} stroke-offGrey hover:stroke-accent`}
              />
            )}
          </button>
        </form>
      </div>
      <div className="relative h-[25vh] md:h-[100%] w-[100%] order-first sm:order-last mb-[25px] sm:mb-0">
        <Image
          className="sm:object-right-top md:object-right-top xl:object-right-bottom"
          src={heroImage}
          alt="Stack of cookie"
          layout="fill"
          objectFit="contain"
          placeholder="blur"
        />
      </div>
    </>
  );
};
