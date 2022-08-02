import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline';
import { HeroBackDropProps } from './HeroBackdrop.props';

export const HeroBackdrop = ({
  imageSelector,
  imageQty,
  selectedImage,
}: HeroBackDropProps): JSX.Element => {
  const arrowContainerStyle =
    'flex items-center flex-col z-30 hover:text-white cursor-pointer leading-none md:mr-4';
  const arrowIconStyle =
    'h-10 w-[60px] lg:h-20 xl:h-28 xl:w-28 stroke-white my-4';
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
    <div className="flex text-base sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl text-primary bg-secondary flex-col justify-between absolute right-0 items-end w-[60%] h-full select-none">
      <div
        className={`${arrowContainerStyle} mb-1 sm:mb-0`}
        onClick={prevImage}
        tabIndex={0}
      >
        <ArrowUpIcon strokeWidth={1} className={arrowIconStyle} />
        <span className={textStyle}>PREVIOUS</span>
      </div>
      <div
        className={`${arrowContainerStyle} mt-1 sm:mt-0`}
        onClick={nextImage}
        tabIndex={0}
      >
        <span className={textStyle}>NEXT</span>
        <ArrowDownIcon strokeWidth={1} className={arrowIconStyle} />
      </div>
    </div>
  );
};
