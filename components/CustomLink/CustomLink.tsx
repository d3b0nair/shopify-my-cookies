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
          }  font-semibold leading-loose cursor-pointer hover:text-accent text-lg xs:text-2xl mr-2 xs:mr-8 min-w-[0px] sm:min-w-[100px]`}
        >
          {children}
        </span>
      </a>
    </Link>
  );
};
