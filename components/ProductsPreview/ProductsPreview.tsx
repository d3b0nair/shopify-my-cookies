import { CustomLink } from '../CustomLink/CustomLink';
import { ProductCard } from '../ProductCard/ProductCard';
import { IconWithStyle } from '../IconWithStyle/IconWithStyle';
import { ProductPreviewProps } from './ProductsPreview.props';
import CookieIconSVG from '../../assets/svg/CookieIcon.svg';
import MiniCartIconSVG from '../../assets/svg/MiniCartDetailed.svg';
import { useState } from 'react';

export const ProductsPreview = ({
  products,
}: ProductPreviewProps): JSX.Element => {
  const [qtyToLoad, setQtyToLoad] = useState<number>(3);
  const canLoad = qtyToLoad < products.length;

  return (
    <div className="sm:hidden my-[50px]">
      <h2 className="text-2xl font-extrabold mb-6 text-center text-primary">
        Cookies
      </h2>
      <div className="snap-x flex flex-col">
        {products.map((product, index) => {
          if (index < qtyToLoad) {
            return (
              <ProductCard
                className="snap-center mb-5"
                key={product.node.id}
                product={product.node}
              />
            );
          }
        })}

        <div className="flex border-b-2 pb-5">
          {!canLoad ? (
            <span className="text-offGrey mx-auto">Nothing to load</span>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <IconWithStyle
          tabIndex={0}
          className={`${!canLoad ? 'cursor-not-allowed' : ''}`}
          onClick={() => {
            if (canLoad) {
              setQtyToLoad(qtyToLoad + 1);
            }
          }}
        >
          <span>Load more</span>&nbsp;
          <CookieIconSVG height={22} width={22} />
        </IconWithStyle>
        <CustomLink
          className="text-primary flex items-center pl-4 ml-4 border-l"
          href={'/store'}
        >
          <IconWithStyle>
            <span>Visit store</span>
            &nbsp;
            <MiniCartIconSVG height={22} width={22} />
          </IconWithStyle>
        </CustomLink>
      </div>
    </div>
  );
};
