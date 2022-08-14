import {
  ArrowNarrowDownIcon,
  ArrowNarrowUpIcon,
} from '@heroicons/react/outline';
import { heroImages } from '../../utils/heroList';
import Image from 'next/image';
import { useState } from 'react';

export const HeroBackdrop = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const arrowContainerStyle =
    'z-[31] flex items-center flex-col text-white transition-colors cursor-pointer leading-none mr-[5%] sm:mr-[15%] md:mr-[15%] lg:mr-[20%] xl:mr-[15%] hover:text-secondary active:text-offSecondary';
  const arrowIconStyle = 'h-10 w-[60px] lg:h-20 xl:h-28 xl:w-28 my-4';
  const textStyle =
    'writing-vertical-lr rotate-180 text-md sm:text-2xl md:text-3xl lg:text-4xl';

  const nextImage = () => {
    if (selectedImage < heroImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0);
    }
  };

  const prevImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else {
      setSelectedImage(heroImages.length - 1);
    }
  };

  return (
    <div className="z-30 flex relative h-[75%] w-full order-first sm:order-last animate-showDownSection opacity-0">
      <div
        style={{ borderRadius: '0% 100% 0% 100% / 0% 0% 100% 100%' }}
        className="flex text-white bg-accentLighter flex-col justify-evenly absolute  items-end top-[-17%] right-[-12%] w-[112%] h-[117%] sm:right-[-38%] sm:top-[-59%] sm:w-[202%] md:w-[200%] lg:w-[191%] sm:h-[159%] 2xl:w-[171%] 2xl:right-[-40%] select-none"
      >
        <div
          className={`${arrowContainerStyle} mb-1 sm:mb-0`}
          onClick={prevImage}
          tabIndex={0}
        >
          <ArrowNarrowUpIcon strokeWidth={1} className={arrowIconStyle} />
          <span className={textStyle}>PREVIOUS</span>
        </div>
        <div
          className={`${arrowContainerStyle} mt-1 sm:mt-0`}
          onClick={nextImage}
          tabIndex={0}
        >
          <span className={textStyle}>NEXT</span>
          <ArrowNarrowDownIcon strokeWidth={1} className={arrowIconStyle} />
        </div>
      </div>
      <div className="min-h-[265px] sm:h-full w-full sm:w-[75%] lg:w-[60%] xl:w-[75%] relative">
        {selectedImage >= 0 &&
          heroImages.map((imageUrl, index) => {
            return index === selectedImage ? (
              <div
                key={`selectedImageContainer-${new Date()
                  .getTime()
                  .toString()}`}
                className="relative animate-ZoomIn w-full h-full opacity-0"
              >
                <Image
                  key={`selectedImage-${new Date().getTime().toString()}`}
                  className={'object-center md:object-left lg:object-right'}
                  src={imageUrl}
                  alt="Cookie sample"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
};
