import { TextWithMiniIconProps } from './TextWithMiniIcon.props';

export const TextWithMiniIcon = ({
  children,
  className,
  ...props
}: TextWithMiniIconProps): JSX.Element => {
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
