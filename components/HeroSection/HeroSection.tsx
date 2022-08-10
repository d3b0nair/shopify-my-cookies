import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Button, CustomLink, HeroBackdrop } from '../../components';
import { ChevronRightIcon } from '@heroicons/react/outline';

export const HeroSection = ({
  className,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element => {
  const iconClasses = 'h-8 w-8';
  return (
    <div
      className={` ${
        className ? className : ''
      } grid items-center grid-cols-[1fr] sm:grid-cols-[1fr_1fr] text-primary gap-x-0 sm:gap-x-28`}
      {...props}
    >
      <div className="z-40 flex flex-col md:h-auto justify-center md:justify-start lg:justify-center">
        <h1 className="text-center sm:text-left md:mx-0 text-2xl md:text-3xl lg:text-6xl font-bold text-accent">
          Grab Best Cookies
        </h1>
        <h2 className="mt-[25px] md:mt-[50px] mb-[25px] md:mb-[50px] text-base md:text-xl lg:text-2xl text-darkestGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua!
        </h2>
        <div>
          <CustomLink href={'/store'}>
            <Button
              standart
              ripple
              primary
              className="w-full lg:w-1/2 2xl:w-1/3 !p-0 rounded-none"
            >
              <span className="flex items-center justify-between">
                <span className="p-4 whitespace-nowrap">SHOP NOW</span>
                <span className="border-l-2 ml-0 p-4">
                  <ChevronRightIcon className={`${iconClasses}`} width={1} />
                </span>
              </span>
            </Button>
          </CustomLink>
        </div>
      </div>
      <div className="flex relative h-[75%] w-full order-first sm:order-last">
        <HeroBackdrop />
      </div>
    </div>
  );
};
