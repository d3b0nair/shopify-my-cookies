import { Input } from '..';
import { FormInputProps } from './FormInput.props';

export const FormInput = ({
  label,
  placeholder,
  type,
  className,
  ...props
}: FormInputProps): JSX.Element => {
  return (
    <div className={`${className ? '' : 'mb-4'}`} {...props}>
      <label htmlFor="phone" className="text-darkestGrey">
        {label}
      </label>
      <Input
        id={type}
        className="border bg-zinc-50 shadow-inner rounded-2xl w-full"
        name={type}
        placeholder={placeholder}
      />
    </div>
  );
};
