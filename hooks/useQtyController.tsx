import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { useContext, useLayoutEffect, useState } from 'react';
import { CustomInput } from '../components';
import { IVariant } from '../components/ProductForm/ProductForm.props';
import { CartContext } from '../context/shopContext';

export const useQtyController = (
  defaultQty: number,
  productVariant: IVariant
) => {
  const { removeCartItem, updateQty } = useContext(CartContext);
  const [qty, setQty] = useState<number>(defaultQty);
  const [isChangingQty, setIsChangingQty] = useState<boolean>(false);

  const iconClasses = 'w-4 h-4 hover:stroke-accent active:stroke-accent';
  const minQty = 0;
  const maxQty = 99;

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

  useLayoutEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isChangingQty) {
      if (qty === 0) {
        timer = setTimeout(() => {
          void removeCartItem(productVariant.id);
          setIsChangingQty(false);
        }, 200);
      } else {
        timer = setTimeout(() => {
          void updateQty(productVariant, qty);
          setIsChangingQty(false);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [isChangingQty, productVariant, qty, removeCartItem, updateQty]);

  const QtyControllerComponent = () => {
    return (
      <>
        <button onClick={decreaseQty}>
          <MinusIcon strokeWidth={1} className={`${iconClasses}`} />
          <span className="sr-only">Decrease product quantity</span>
        </button>
        <CustomInput
          className="text-center outline-none"
          min={minQty}
          max={maxQty}
          name="quantity"
          type="number"
          placeholder={qty.toString()}
          value={qty.toString()}
          onChange={handleOnChange}
        />
        <button onClick={increaseQty}>
          <PlusIcon strokeWidth={1} className={`${iconClasses}`} />
          <span className="sr-only">Increase product quantity</span>
        </button>
      </>
    );
  };
  return [QtyControllerComponent];
};
