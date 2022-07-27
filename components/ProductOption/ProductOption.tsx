import { ProductOptionProps } from './ProductOptions.props';

export const ProductOption = ({
  name,
  values,
  selectedOptions,
  setOptions,
  ...props
}: ProductOptionProps): JSX.Element => {
  return (
    <fieldset {...props}>
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex items-center flex-wrap">
        {values.map((value) => {
          const checked = selectedOptions[name] === value;
          const id = `selectedOptions-${value}`;

          return (
            <label key={id} htmlFor={id}>
              <input
                id={id}
                className="sr-only"
                type="radio"
                name={`option-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div
                className={`p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 ${
                  checked
                    ? 'text-white bg-gray-900'
                    : 'text-gray-900 bg-gray-200'
                }`}
              >
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};
