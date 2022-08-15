import { useState, useEffect } from 'react';
import {
  useForm,
  SubmitHandler,
  Control as ControlType,
} from 'react-hook-form';
import { Button, CustomInput, CustomTextArea, FieldWithController } from '..';

export const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IFormInput>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setIsSuccess(false);
    }
  }, [errors]);

  const onSubmit: SubmitHandler<IFormInput> = ({
    firstName,
    lastName,
    email,
    phone,
    message,
  }) => {
    console.log(
      `Sending following message:\n '${message}' \nProvided information \n First name: ${firstName} \n Last name: ${lastName} \n Email: ${email} \n Phone number: ${phone}`
    );
    reset();
    setIsSuccess(true);
  };
  return (
    <form
      className="flex flex-col justify-between min-h-0 lg:min-h-[630px] w-full rounded-2xl p-8 shadow-2xl my-20 sm:my-0	bg-white"
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e).catch((err) => {
          console.log(err);
        });
      }}
    >
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-primary">
          Get in touch with us
        </h1>
        <p className="my-8 text-md lg:text-xl text-darkestGrey">
          Our friendly team would love to hear from you!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 md:gap-x-2 mb-0 lg:mb-4">
        <FieldWithController
          required
          control={control as unknown as ControlType}
          className="mb-4 lg:mb-0"
          label={'First name'}
          type={'firstName'}
          error={errors.firstName}
        >
          <CustomInput placeholder={'First name'} />
        </FieldWithController>
        <FieldWithController
          required
          control={control as unknown as ControlType}
          className="mb-4 lg:mb-0"
          label={'Last name'}
          type={'lastName'}
          error={errors.lastName}
        >
          <CustomInput placeholder={'Last name'} />
        </FieldWithController>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-0 md:gap-x-2 mb-0 xl:mb-4">
        <FieldWithController
          required
          control={control as unknown as ControlType}
          className="mb-4 xl:mb-0"
          label={'Email'}
          type={'email'}
          customPattern={{
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email address',
          }}
          error={errors.email}
        >
          <CustomInput placeholder={'Enter your email'} />
        </FieldWithController>
        <FieldWithController
          required
          control={control as unknown as ControlType}
          className="mb-4 xl:mb-0"
          label={'Phone'}
          type={'phone'}
          customPattern={{
            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            message: 'Please enter a valid phone number',
          }}
          error={errors.phone}
        >
          <CustomInput placeholder={'Enter your phone number'} />
        </FieldWithController>
      </div>
      <FieldWithController
        required
        control={control as unknown as ControlType}
        className="mb-4 xl:mb-0"
        label={'Message'}
        type={'message'}
        error={errors.message}
      >
        <CustomTextArea placeholder={'Write your message'} />
      </FieldWithController>
      <Button
        standart
        ripple
        primary
        className="w-full"
        role="button"
        type="submit"
        onClick={() => clearErrors()}
      >
        {isSuccess
          ? 'Message sent'
          : Object.keys(errors).length !== 0
          ? 'Send message'
          : 'Send message'}
      </Button>
    </form>
  );
};

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
}
