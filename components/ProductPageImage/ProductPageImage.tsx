import Image from 'next/image';

export const ProductPageImage = ({
  altText,
  url,
}: {
  altText: string;
  url: string;
}) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
      <div className="h-[20rem] md:h-full relative transition-all hover:scale-125">
        <Image
          src={url}
          alt={altText ? altText : 'product image'}
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
      </div>
    </div>
  );
};
