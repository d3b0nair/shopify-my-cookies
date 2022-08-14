import Image from 'next/image';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import { floatToUSDCurrency } from '../../utils/helpers';
import { Button, CustomLink, Input } from '../index';
import { CartListItemProps } from './CartListItem.props';
import { useLayoutEffect, useState } from 'react';

export const CartListItem = ({
  product,
  setCartOpen,
  removeCartItem,
  updateQty,
}: CartListItemProps): JSX.Element => {
  const [qty, setQty] = useState<number>(product.quantity);
  const [isChangingQty, setIsChangingQty] = useState<boolean>(false);

  const minQty = 0;
  const maxQty = 99;

  useLayoutEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isChangingQty) {
      if (qty === 0) {
        timer = setTimeout(() => {
          void removeCartItem(product.id);
          setIsChangingQty(false);
        }, 200);
      } else {
        timer = setTimeout(() => {
          void updateQty(product, qty);
          setIsChangingQty(false);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [isChangingQty, product, qty, removeCartItem, updateQty]);

  const handleOnChange = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const value = parseInt(evt.currentTarget.value);
    if (value && value < maxQty && value > minQty) {
      setIsChangingQty(true);
      setQty(value);
    }
  };

  const increaseQty = () => {
    if (qty < 99) {
      setIsChangingQty(true);
      setQty(qty + 1);
    }
  };
  const decreaseQty = () => {
    if (qty > 0) {
      setIsChangingQty(true);
      setQty(qty - 1);
    }
  };

  const iconClasses = 'w-4 h-4 hover:stroke-accent active:stroke-accent';

  return (
    <li key={product.id} className="flex py-6">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          quality={40}
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between items-center text-base font-medium text-gray-900">
            <h3>
              <CustomLink
                href={`/products/${product.handle}`}
                className="text-sm sm:text-md"
              >
                <span
                  className="text-primary hover:text-accent"
                  onClick={() => setCartOpen(false)}
                >
                  {product.title}
                </span>
              </CustomLink>
            </h3>
            <p className="ml-4">{floatToUSDCurrency(product.variantPrice)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.variantTitle}</p>
        </div>
        <div className="flex sm:flex-1 flex-col justify-between text-sm">
          <fieldset>
            <div className="flex flex-row items-center">
              <legend className="text-gray-500 mr-4">Qty:</legend>
              <button onClick={decreaseQty}>
                <MinusIcon strokeWidth={1} className={`${iconClasses}`} />
                <span className="sr-only">Decrease product quantity</span>
              </button>
              <Input
                className="text-center outline-none"
                min={minQty}
                max={maxQty}
                name="quantity"
                type="number"
                placeholder={product.quantity.toString()}
                value={qty}
                onChange={handleOnChange}
              />
              <button onClick={increaseQty}>
                <PlusIcon strokeWidth={1} className={`${iconClasses}`} />
                <span className="sr-only">Increase product quantity</span>
              </button>
            </div>
          </fieldset>
          <div className="flex self-end">
            <Button
              onClick={() => {
                void removeCartItem(product.id);
              }}
              transparent
              type="button"
              className="font-medium text-base mt-6 sm:mt-0 text-primary"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
