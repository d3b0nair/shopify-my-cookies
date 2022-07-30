import { IconWithStyleProps } from './IconWithStyle.props';

export const IconWithStyle = ({
  children,
  className,
  ...props
}: IconWithStyleProps): JSX.Element => {
  return (
    <div
      className={`${
        className ? className : ''
      } hover:fill-accent hover:stroke-accent fill-primary  stroke-primary font-semibold leading-loose cursor-pointer hover:text-accent text-lg flex items-center`}
      {...props}
    >
      {children}
    </div>
  );
};
