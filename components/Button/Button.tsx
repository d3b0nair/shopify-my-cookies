import { ButtonProps } from './Button.props';

export const Button = ({
  primary,
  transparent,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const standartStyleRules = `bg-primary mt-6 rounded-lg px-2 py-3 text-xl`;
  const primaryStyleRules = primary
    ? `text-background hover:bg-accent hover:text-primary`
    : '';
  const transparentStyleRules = transparent
    ? `font-bold text-primary bg-transparent text-primary hover:text-accent`
    : '';
  return (
    <button
      className={`${standartStyleRules} ${primaryStyleRules} ${transparentStyleRules} ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
