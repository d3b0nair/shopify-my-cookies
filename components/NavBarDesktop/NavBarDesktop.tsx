import { CustomLink, Logo, MiniCartIcon } from '..';
import { menuList } from '../../utils/menuBuilder';
import { NavBarProps } from '../NavBar/NavBar.props';

export const NavBarDesktop = ({
  setCartOpen,
  cartOpen,
  cartQuantity,
}: NavBarProps) => {
  return (
    <>
      <Logo className="hidden sm:block" />
      <div className="hidden sm:block ml-[5px] sm:ml-[20px] md:ml-[45px]">
        {menuList.map(({ url, title }, index) => {
          return (
            <CustomLink
              className="text-primary mr-[5px] xs:mr-[10px] sm:mr-[20px] lg:mr-[45px]"
              key={`key-link-${index}`}
              href={url}
            >
              {title}
            </CustomLink>
          );
        })}
      </div>
      <div>
        <div>
          <a
            className="cursor-pointer hover:text-primary"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <MiniCartIcon cartQuantity={cartQuantity} />
          </a>
        </div>
      </div>
    </>
  );
};
