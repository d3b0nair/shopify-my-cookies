import { useState, useContext, useEffect } from 'react';
import { Button, ProductOption } from '..';
import { floatToUSDCurrency } from '../../utils/helpers';
import {
  allOptionsType,
  ProductFormProps,
  IVariant,
} from './ProductForm.props';
import { CartContext } from '../../context/shopContext';
import { IOptionModel } from '../../interfaces/products.interface';

export const ProductForm = ({
  product,
  ...props
}: ProductFormProps): JSX.Element => {
  const { addToCart } = useContext(CartContext);

  const [variantQuantity, setVariantQuantity] = useState<number>(0);
  const [isAddingItemToCart, setIsAddingItemToCart] = useState<boolean>(false);

  const allVariantOptions: Array<IVariant> =
    product.variants.edges &&
    product.variants.edges.map(({ node }) => {
      const variant = node;
      const allOptions: allOptionsType = {};

      variant.selectedOptions.map((option) => {
        allOptions[option.name] = option.value;
      });

      return {
        id: variant.id,
        title: product.title,
        handle: product.handle,
        image: variant.image ? variant.image.url : '',
        options: allOptions,
        variantTitle: variant.title,
        variantPrice: variant.priceV2.amount,
        quantity: 1,
      };
    });

  const defaultValues: { [key: string]: string } = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isAddingItemToCart && variantQuantity > 0) {
      timer = setTimeout(() => {
        void addToCart({
          ...selectedVariant,
          quantity: variantQuantity,
        });
        setVariantQuantity(0);
        setIsAddingItemToCart(false);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [addToCart, isAddingItemToCart, selectedVariant, variantQuantity]);

  const setOptions = (name: string, value: string): void => {
    setSelectedOptions((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setVariantQuantity(0);
        setSelectedVariant(item);
      }
    });
  };

  return (
    <div
      className="rounded-2xl p-5 shadow-2xl flex flex-col w-full justify-between	bg-violet-50"
      {...props}
    >
      <div>
        <h2 className="text-3xl font-bold my-1 text-accent">{product.title}</h2>
        <span className="text-2xl">
          {floatToUSDCurrency(product.variants.edges[0].node.priceV2.amount)}
        </span>
      </div>
      <div className="my-5">
        {product.options.map(({ id, name, values }: IOptionModel) => {
          return name === 'Title' ? null : (
            <ProductOption
              key={`option-${id}`}
              id={id}
              name={name}
              values={values}
              selectedOptions={selectedOptions}
              setOptions={setOptions}
            />
          );
        })}
      </div>
      <Button
        standart
        primary
        ripple
        className="bg-primary hover:bg-accent"
        onClick={() => {
          setVariantQuantity(variantQuantity + 1);
          setIsAddingItemToCart(true);
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};
export default ProductForm;
