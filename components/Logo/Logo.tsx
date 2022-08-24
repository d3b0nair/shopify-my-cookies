import Link from 'next/link';
import LogoSVG from '../../assets/svg/Logo.svg';
export const Logo = ({ ...props }): JSX.Element => {
  return (
    <div {...props}>
      <Link href="/" passHref>
        <span className="cursor-pointer grid grid-cols-[34px_1fr] justify-items-center sm:grid-cols-[54px_1fr] gap-x-3 items-center">
          <LogoSVG className='w-[46px] h-[46px] sm:w-[54px] sm:h-[54px]' />
          <h1 className="font-semibold text-xl">
            Shopify My Cookies
          </h1>
        </span>
      </Link>
    </div>
  );
};
export default Logo;
