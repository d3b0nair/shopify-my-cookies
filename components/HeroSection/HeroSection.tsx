import Image from 'next/image';
import { useState } from 'react';
import { HeroBackdrop, HeroSubscriptionForm } from '../../components';
import { heroImages } from '../../utils/helpers';

export const HeroSection = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

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
        <HeroSubscriptionForm />
      </div>
      <div className="flex relative h-[100%] w-[100%] order-first sm:order-last">
        <HeroBackdrop
          imageSelector={setSelectedImage}
          selectedImage={selectedImage}
          imageQty={heroImages.length}
        />
        <div className="h-[35vh] sm:h-full w-full sm:w-[75%] lg:w-[60%] xl:w-[75%] relative">
          <Image
            className="object-center"
            src={heroImages[selectedImage]}
            alt="Cookie sample"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};
