import { ButtonProps } from './Button.props';

export const Button = ({
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${
        className ? className : ''
      } bg-primary mt-6 rounded-lg text-background px-2 py-3 hover:bg-accent hover:text-primary text-xl`}
      {...props}
    >
      {children}
    </button>
  );
};
