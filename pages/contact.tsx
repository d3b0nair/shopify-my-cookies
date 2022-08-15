import type { NextPage } from 'next';
import { Button, ContactFormMap, FormInput } from '../components';

const Contact: NextPage = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-x-0 md:grid-cols-2 md:gap-x-20 xl:gap-x-32 2xl:gap-x-40 min-h-[100vh] lg:min-h-[calc(100vh-62px)] justify-items-center items-center my-[62px]">
      <form className="min-h-0 lg:min-h-[630px] w-full rounded-2xl p-8 shadow-2xl my-20 sm:my-0	bg-white">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-primary">
            Get in touch with us
          </h1>
          <p className="my-8 text-md lg:text-xl text-darkestGrey">
            Our friendly team would love to hear from you!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 md:gap-x-2 mb-0 md:mb-4">
          <FormInput
            className="mb-4 lg:mb-0"
            label={'First Name'}
            placeholder={'First name'}
            type={'firstname'}
          />
          <FormInput
            className="mb-4 lg:mb-0"
            label={'Last Name'}
            placeholder={'Last Name'}
            type={'lastname'}
          />
        </div>
        <FormInput
          label={'Email'}
          placeholder={'Enter your email'}
          type={'email'}
        />
        <FormInput
          label={'Phone number'}
          placeholder={'Enter your phone number'}
          type={'phone'}
        />
        <div>
          <label htmlFor="message" className="text-darkestGrey">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message to us"
            className="border bg-zinc-50 shadow-inner rounded-2xl w-full min-h-[100px] mb-4 p-4"
          />
        </div>
        <Button standart ripple primary className="w-full">
          Send message
        </Button>
      </form>
      <ContactFormMap />
    </div>
  );
};
export default Contact;
