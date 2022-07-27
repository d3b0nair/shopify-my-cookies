import { useState, useContext } from 'react';
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
        variantQuantity: 1,
      };
    });

  const defaultValues: { [key: string]: string } = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

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
        setSelectedVariant(item);
      }
    });
  };

  return (
    <div
      className="rounded-2xl p-5 shadow-2xl flex flex-col w-full min-h-[24rem] md:w-1/3 justify-between	"
      {...props}
    >
      <div>
        <h2 className="text-3xl font-bold mt-1">{product.title}</h2>
        <span>
          {floatToUSDCurrency(product.variants.edges[0].node.priceV2.amount)}
        </span>
        <div className="mt-5">
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
      </div>
      <Button
        onClick={() => {
          void addToCart(selectedVariant);
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};
