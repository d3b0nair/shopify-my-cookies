import Link from 'next/link';
import { CustomLinkProps } from './CustomLink.props';

export const CustomLink = ({
  className,
  children,
  href,
  ...props
}: CustomLinkProps): JSX.Element => {
  return (
    <Link href={href} {...props}>
      <a>
        <span
          className={`${
            className ? className : ''
          }  font-semibold leading-loose transition-colors hover:text-secondary active:text-offSecondary cursor-pointer text-lg mr-2 min-w-[0px] sm:min-w-[100px]`}
        >
          {children}
        </span>
      </a>
    </Link>
  );
};
