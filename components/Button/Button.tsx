import { ButtonProps } from './Button.props';

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className="bg-primary mt-6 rounded-lg text-white px-2 py-3 hover:bg-secondary text-lg"
      {...props}
    >
      {children}
    </button>
  );
};
