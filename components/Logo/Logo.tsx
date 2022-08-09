import Link from 'next/link';
import LogoSVG from '../../assets/svg/Logo.svg';
export const Logo = ({ ...props }): JSX.Element => {
  return (
    <div {...props}>
      <Link href="/" passHref>
        <span className="cursor-pointer">
          <LogoSVG
            className="hover:fill-accent fill-primary "
            width={100}
            height={100}
          />
        </span>
      </Link>
    </div>
  );
};
export default Logo;
