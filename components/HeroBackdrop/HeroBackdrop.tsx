import {
  ArrowNarrowDownIcon,
  ArrowNarrowUpIcon,
} from '@heroicons/react/outline';
import { heroImages } from '../../utils/heroList';
import Image from 'next/image';
import { useState } from 'react';

export const HeroBackdrop = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<number>(3);
  const [slideDirection, setSlideDirection] = useState<string>('');

  const arrowContainerStyle =
    'flex items-center flex-col z-30 hover:text-darkestGrey stroke-background hover:stroke-darkestGrey cursor-pointer leading-none md:mr-4';
  const arrowIconStyle = 'h-10 w-[60px] lg:h-20 xl:h-28 xl:w-28 my-4';
  const textStyle = 'writing-vertical-lr rotate-180';

  const nextImage = () => {
    setSlideDirection('up');
    if (selectedImage < heroImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0);
    }
  };

  const prevImage = () => {
    setSlideDirection('down');
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else {
      setSelectedImage(heroImages.length - 1);
    }
  };

  return (
    <>
      <div className="flex text-base sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl text-background bg-primary flex-col justify-between absolute right-0 items-end w-[60%] h-full select-none">
        <div
          className={`${arrowContainerStyle} mb-1 sm:mb-0`}
          onClick={prevImage}
          tabIndex={0}
        >
          <ArrowNarrowUpIcon
            stroke=""
            strokeWidth={1}
            className={arrowIconStyle}
          />
          <span className={textStyle}>PREVIOUS</span>
        </div>
        <div
          className={`${arrowContainerStyle} mt-1 sm:mt-0`}
          onClick={nextImage}
          tabIndex={0}
        >
          <span className={textStyle}>NEXT</span>
          <ArrowNarrowDownIcon
            stroke=""
            strokeWidth={1}
            className={arrowIconStyle}
          />
        </div>
      </div>
      <div className="h-[50vh] min-h-[265px] sm:h-full w-full sm:w-[75%] lg:w-[60%] xl:w-[75%] relative">
        {selectedImage >= 0 &&
          heroImages.map((imageUrl, index) => {
            return index === selectedImage ? (
              <div
                key={`selectedImageContainer${new Date().getTime().toString()}`}
                className={`${
                  slideDirection === 'down'
                    ? 'animate-SlideFromTop sm:animate-SlideFromBottom'
                    : 'animate-SlideFromTop'
                }  w-full h-full`}
              >
                <Image
                  key={`selectedImage${new Date().getTime().toString()}`}
                  className={'object-center'}
                  src={imageUrl}
                  alt="Cookie sample"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ) : null;
          })}
      </div>
    </>
  );
};
