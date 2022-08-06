import { RippleEffect } from '..';
import { ButtonProps } from './Button.props';

export const Button = ({
  standart,
  ripple,
  primary,
  transparent,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const standartStyleRules = standart
    ? `mt-6 rounded-lg px-2 py-3 text-xl hover:shadow-lg focus:shadow-lg active:shadow-lg focus:outline-none focus:ring-0`
    : '';
  const primaryStyleRules = primary
    ? `text-white bg-red-400 hover:bg-orange-red-700 focus:bg-red-700 active:bg-red-900`
    : '';
  const transparentStyleRules = transparent
    ? `font-bold text-primary bg-transparent text-primary hover:text-accent`
    : '';
  return (
    <button
      className={`${standartStyleRules} ${primaryStyleRules} ${transparentStyleRules} ${
        className ? className : ''
      } overflow-hidden transition-colors outline-none relative`}
      {...props}
    >
      {children}
      {ripple && <RippleEffect duration={800} bgColor={'bg-accent'} />}
    </button>
  );
};
