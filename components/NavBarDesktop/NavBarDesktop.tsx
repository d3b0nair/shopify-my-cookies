import { CustomLink, Logo, MiniCartIcon } from '..';
import { menuList } from '../../utils/menuBuilder';
import { NavBarProps } from '../NavBar/NavBar.props';

export const NavBarDesktop = ({
  setCartOpen,
  cartOpen,
  cartQuantity,
  currentPage,
}: NavBarProps) => {
  return (
    <>
      <Logo
        styles={{ transitionProperty: 'color' }}
        className={`hidden md:block hover:fill-accent hover:text-accent active:fill-primary active:text-primary ${
          currentPage === '/' ? 'text-darkestGrey' : 'fill-white text-white'
        }`}
      />
      <div className="hidden md:flex justify-center">
        <div className="ml-[5px] sm:ml-[20px] md:ml-[45px]">
          {currentPage &&
            menuList.map(({ url, title }, index) => {
              return (
                <CustomLink
                  className={`text-white ${
                    currentPage === '/'
                      ? 'hover:text-secondary active:text-offSecondary'
                      : 'hover:text-accent active:text-accentLighter'
                  } text-2xl mr-[5px] sm:mr-[20px] lg:mr-[45px]`}
                  key={`key-link-${index}`}
                  href={url}
                >
                  {title}
                </CustomLink>
              );
            })}
        </div>
        <span
          className="cursor-pointer hover:text-primary hidden md:block"
          onClick={() => setCartOpen(!cartOpen)}
        >
          {currentPage === '/' ? null : (
            <MiniCartIcon cartQuantity={cartQuantity} />
          )}
        </span>
      </div>
      {currentPage === '/' ? <span></span> : null}
    </>
  );
};
