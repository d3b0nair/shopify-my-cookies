import { HeroBackdrop, HeroSubscriptionForm } from '../../components';

export const HeroSection = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col min-h-[300px] h-[40vh] md:h-auto m-5 md:mb-10 justify-center md:justify-start lg:justify-center">
        <h1 className="text-center sm:text-left md:mx-0 text-2xl md:text-3xl lg:text-6xl font-bold text-accent">
          Grab Best Cookies
        </h1>
        <h2 className="mt-[25px] md:mt-[50px] text-base md:text-xl lg:text-2xl mb-[25px] md:mb-[85px] text-darkestGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua!
        </h2>
        <HeroSubscriptionForm />
      </div>
      <div className="flex relative min-h-[265px] h-[100%] w-[100%] order-first sm:order-last">
        <HeroBackdrop />
      </div>
    </>
  );
};
