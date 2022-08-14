import Link from 'next/link';
import LogoSVG from '../../assets/svg/Logo.svg';
export const Logo = ({ ...props }): JSX.Element => {
  return (
    <div {...props}>
      <Link href="/" passHref>
        <span className="cursor-pointer grid grid-cols-[54px_1fr] gap-x-3 items-center">
            <LogoSVG width={54} height={54} />
          <h1 className="font-semibold text-xl">Shopify My Cookies</h1>
        </span>
      </Link>
    </div>
  );
};
export default Logo;
