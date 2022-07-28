import { CustomLink, Logo, MiniCartIcon } from '..';
import { NavBarProps } from './NavBar.props';

export const NavBar = ({
  cartOpen,
  setCartOpen,
  cartQuantity,
  menu,
  ...props
}: NavBarProps): JSX.Element => (
  <div
    className="grid grid-cols-[1fr_4fr_1fr] md:grid-cols-[100px_1fr_44px] items-center justify-between"
    {...props}
  >
    <Logo />
    <div className="ml-[5px] sm:ml-[20px] md:ml-[45px]">
      {menu.map(({ url, title }, index) => {
        return (
          <CustomLink key={`key-link-${index}`} href={url}>
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
  </div>
);
