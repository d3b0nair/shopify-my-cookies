import Image from 'next/image';
import { Button, Input } from '../../components';
import heroImage from '../../public/hero.png';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

export const HomePage = (): JSX.Element => {
  return (
    <div className="grid max-w-[1600px] max-h-[1000] mt-[100px] grid-cols-[1fr] lg:grid-cols-[1fr_1fr] xl:grid-cols-[705px_1fr] text-primary">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold">Grab Best Cookies</h1>
        <h2 className="mt-[50px] text-2xl mb-[85px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua!
        </h2>
        <div className="relative w-full">
          <Input
            className="w-full px-9 py-[22px] text-3xl rounded-full text-offGrey focus:text-accent"
            placeholder="Enter your email here..."
          />
          <ArrowNarrowRightIcon className="absolute top-[26px] right-[25px] h-9 w-9  stroke-offGrey hover:stroke-accent cursor-pointer" />
        </div>
      </div>
      <div className="relative h-[350px] w-[400px] justify-self-end	">
        <Image src={heroImage} alt="Stack of cookie" layout="responsive" />
      </div>
    </div>
  );
};
