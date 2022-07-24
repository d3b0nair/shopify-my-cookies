import { useState } from 'react';
import { ProductOption } from '..';
import { OptionsModel } from '../../interfaces/products.interface';
import { floatToUSDCurrency } from '../../utils/helpers';
import { ProductFormProps } from './ProductForm.props';

export const ProductForm = ({ product }: ProductFormProps): JSX.Element => {
  const allVariantOptions =
    product.variants.edges &&
    product.variants.edges.map(({ node }) => {
      const variant = node;
      const allOptions: { [key: string]: string } = {};

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

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  const setOptions = (name: string, value: string): void => {
    setSelectedOptions((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="rounded-2xl p-4 shadow-2xl flex flex-col w-full md:w-1/3">
      <h2 className="text-3xl font-bold">{product.title}</h2>
      <span className="pb-6">
        {floatToUSDCurrency(product.variants.edges[0].node.priceV2.amount)}
      </span>
      <div>
        {product.options.map(({ id, name, values }: OptionsModel) => {
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
      <button className="bg-black rounded-lg text-white px-2 py-3 hover:bg-gray-800">
        Add To Cart
      </button>
    </div>
  );
};
