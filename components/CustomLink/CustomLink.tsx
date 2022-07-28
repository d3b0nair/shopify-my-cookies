import Link from 'next/link';
import { CustomLinkProps } from './CustomLink.props';

export const CustomLink = ({
  children,
  href,
  ...props
}: CustomLinkProps): JSX.Element => {
  return (
    <Link href={href} {...props}>
      <a className="mr-[5px] xs:mr-[10px] sm:mr-[20px] lg:mr-[45px]">
        <span className="font-semibold leading-loose cursor-pointer w-1/3 hover:text-accent text-lg xs:text-2xl mr-2 xs:mr-8 min-w-[0px] sm:min-w-[100px]">
          {children}
        </span>
      </a>
    </Link>
  );
};
