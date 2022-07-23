import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl lg:px-8">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">The Cookie Creations</span>
          </a>
        </Link>
        <a className="font-bold cursor-pointer">cart</a>
      </div>
    </header>
  );
};

export default Header;
