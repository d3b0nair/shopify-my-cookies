import Image from 'next/image';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import { floatToUSDCurrency } from '../../utils/helpers';
import { Button, CustomLink, Input } from '../index';
import { CartListItemProps } from './CartListItem.props';
import { useEffect, useState } from 'react';

export const CartListItem = ({
  product,
  setCartOpen,
  removeCartItem,
  updateQty,
}: CartListItemProps): JSX.Element => {
  const [qty, setQty] = useState<number>(product.variantQuantity);

  const minQty = 0;
  const maxQty = 99;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (qty === 0) {
      removeCartItem(product.id);
    } else {
      timer = setTimeout(() => {
        updateQty(product, qty);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [product, qty, removeCartItem, updateQty]);

  const handleOnChange = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const value = parseInt(evt.currentTarget.value);
    if (value && value < maxQty && value > minQty) {
      setQty(value);
    }
  };

  const increaseQty = () => {
    if (qty < 99) {
      setQty(qty + 1);
    }
  };
  const decreaseQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const iconSize = 'w-4 h-4';

  return (
    <li key={product.id} className="flex py-6">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between items-center text-base font-medium text-gray-900">
            <h3>
              <CustomLink href={`/products/${product.handle}`}>
                <span onClick={() => setCartOpen(false)}>{product.title}</span>
              </CustomLink>
            </h3>
            <p className="ml-4">{floatToUSDCurrency(product.variantPrice)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.variantTitle}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <fieldset>
            <div className="flex items-center">
              <legend className="text-gray-500 mr-4">Qty:</legend>
              <button onClick={decreaseQty}>
                <MinusIcon strokeWidth={1} className={`${iconSize}`} />
                <span className="sr-only">Decrease product quantity</span>
              </button>
              <Input
                className="text-center outline-none"
                min={minQty}
                max={maxQty}
                name="quantity"
                type="number"
                placeholder={product.variantQuantity.toString()}
                value={qty}
                onChange={handleOnChange}
              />
              <button onClick={increaseQty}>
                <PlusIcon strokeWidth={1} className={`${iconSize}`} />
                <span className="sr-only">Increase product quantity</span>
              </button>
            </div>
          </fieldset>
          <div className="flex">
            <Button
              onClick={() => void removeCartItem(product.id)}
              transparent
              type="button"
              className="font-medium text-base"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
