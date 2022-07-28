import Link from 'next/link';
import LogoSVG from '../../assets/svg/Logo.svg';
export const Logo = (): JSX.Element => {
  return (
    <div>
      <Link href="/" passHref>
        <a className="cursor-pointer">
          <LogoSVG
            className="hover:fill-accent fill-primary "
            width={100}
            height={100}
          />
        </a>
      </Link>
    </div>
  );
};
