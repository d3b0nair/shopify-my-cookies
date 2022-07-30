import { CustomLink, Logo, MiniCartIcon, IconWithStyle } from '..';
import { NavBarProps } from './NavBar.props';
import { menuList, mobileMenuList } from '../../utils/helpers';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XCircleIcon } from '@heroicons/react/outline';

export const NavBar = ({
  cartOpen,
  setCartOpen,
  cartQuantity,
  ...props
}: NavBarProps): JSX.Element => {
  return (
    <nav
      className="bottom-0 flex justify-end sm:grid grid-cols-[1fr_4fr_1fr] md:grid-cols-[100px_1fr_44px] items-center sm:justify-between"
      {...props}
    >
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
      <Popover className="sm:hidden block">
        {({ open }: { open: boolean }) => (
          <>
            <Popover.Button className="bg-background rounded-full border-2 border-accent transition-all hover:border-grey hover:scale-110 ease-out duration-100">
              {open ? (
                <XCircleIcon
                  className="stroke-grey hover:stroke-accent"
                  width={44}
                  height={44}
                />
              ) : (
                <MenuIcon
                  className="stroke-grey hover:stroke-accent"
                  width={44}
                  height={44}
                />
              )}
            </Popover.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              as={Fragment}
            >
              <Popover.Panel
                static
                className="flex border sm:border-0 border-accent fixed left-0 bottom-0 bg-background w-full text-center rounded-full mb-6 pt-2"
              >
                {mobileMenuList.map(({ url, title, Icon }, index) => {
                  const centerOfList = Math.round(menuList.length / 2);
                  const assignOrder =
                    centerOfList - (index + 1) >= 0
                      ? index
                      : centerOfList + index;
                  const homepage = title === 'Home';
                  const order = homepage ? centerOfList : assignOrder;
                  const size = homepage
                    ? menuList.length % 2 === 0
                      ? '25%'
                      : '50%'
                    : '50%';
                  const children = (
                    <>
                      {Icon}
                      <span>{title}</span>
                    </>
                  );
                  const linkStyle =
                    'flex flex-col items-center mr-0 hover:text-accent text-offGrey';
                  return (
                    <IconWithStyle
                      style={{ order: order, width: size }}
                      key={`key-link-${index}`}
                      className={'justify-center'}
                    >
                      {url === '' ? (
                        <a
                          className={linkStyle}
                          onClick={() => setCartOpen(!cartOpen)}
                        >
                          {children}
                        </a>
                      ) : (
                        <CustomLink className={linkStyle} href={url}>
                          {children}
                        </CustomLink>
                      )}
                    </IconWithStyle>
                  );
                })}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </nav>
  );
};
