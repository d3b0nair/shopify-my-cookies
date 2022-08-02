import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline';
import { HeroBackDropProps } from './HeroBackdrop.props';

export const HeroBackdrop = ({
  imageSelector,
  imageQty,
  selectedImage,
  ...props
}: HeroBackDropProps): JSX.Element => {
  const arrowContainerStyle =
    'flex items-center flex-col z-30 hover:text-accent stroke-background hover:stroke-accent cursor-pointer leading-none md:mr-4';
  const arrowIconStyle = 'h-10 w-[60px] lg:h-20 xl:h-28 xl:w-28 my-4';
  const textStyle = 'writing-vertical-lr rotate-180';

  const nextImage = () => {
    if (selectedImage < imageQty - 1) {
      imageSelector(selectedImage + 1);
    } else {
      imageSelector(0);
    }
  };

  const prevImage = () => {
    if (selectedImage > 0) {
      imageSelector(selectedImage - 1);
    } else {
      imageSelector(imageQty - 1);
    }
  };

  return (
    <div
      className="flex text-base sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl text-background bg-primary flex-col justify-between absolute right-0 items-end w-[60%] h-full select-none"
      {...props}
    >
      <div
        className={`${arrowContainerStyle} mb-1 sm:mb-0`}
        onClick={prevImage}
        tabIndex={0}
      >
        <ArrowUpIcon stroke="" strokeWidth={1} className={arrowIconStyle} />
        <span className={textStyle}>PREVIOUS</span>
      </div>
      <div
        className={`${arrowContainerStyle} mt-1 sm:mt-0`}
        onClick={nextImage}
        tabIndex={0}
      >
        <span className={textStyle}>NEXT</span>
        <ArrowDownIcon stroke="" strokeWidth={1} className={arrowIconStyle} />
      </div>
    </div>
  );
};
