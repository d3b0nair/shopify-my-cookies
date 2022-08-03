import { Popover, Transition } from '@headlessui/react';
import {
  XCircleIcon as OpenIcon,
  MenuIcon as CloseIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { CustomLink, IconWithStyle } from '..';
import { mobileMenuList, menuList } from '../../utils/menuBuilder';
import { NavBarProps } from '../NavBar/NavBar.props';

export const NavBarResponsive = ({
  setCartOpen,
  cartOpen,
}: Omit<NavBarProps, 'cartQuantity'>) => {
  const router = useRouter();

  const MenuList = mobileMenuList.map(({ url, title, Icon }, index) => {
    const centerOfList = Math.round(menuList.length / 2);
    const assignOrder =
      centerOfList - (index + 1) >= 0 ? index : centerOfList + index;
    const homepage = title === 'Home';
    const order = homepage ? centerOfList : assignOrder;
    const size = homepage ? (menuList.length % 2 === 0 ? '25%' : '50%') : '50%';
    const children = (
      <>
        {Icon}
        <span>{title}</span>
      </>
    );
    const linkStyle = `flex flex-col items-center mr-0 hover:text-accent ${
      router.asPath === url ? 'text-accent stroke-accent' : ''
    }`;
    return (
      <IconWithStyle
        style={{
          order: order,
          width: size,
          animationDelay: `${100 * order}ms`,
        }}
        key={`key-link-${index}`}
        className={
          'justify-center opacity-0 hover:text-accent hover:stroke-accent text-offGrey stroke-grey animate-bounceWithOpacity'
        }
      >
        {url === '#cart' ? (
          <a className={linkStyle} onClick={() => setCartOpen(!cartOpen)}>
            {children}
          </a>
        ) : (
          <CustomLink className={linkStyle} href={url}>
            {children}
          </CustomLink>
        )}
      </IconWithStyle>
    );
  });

  const ToggleButton = ({ open }: { open: boolean }) => (
    <Popover.Button className="bg-background rounded-full border-2 border-accent transition-all hover:border-grey hover:scale-110 ease-in-out duration-300 text-grey hover:text-accent">
      <OpenIcon className={`${open ? '' : 'hidden'}`} width={44} height={44} />
      <CloseIcon className={`${open ? 'hidden' : ''}`} width={44} height={44} />
    </Popover.Button>
  );
  return (
    <Popover className="sm:hidden block">
      {({ open }: { open: boolean }) => (
        <>
          <ToggleButton open={open} />
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
              className="flex border sm:border-0 border-accent fixed left-0 bottom-0 bg-background text-center rounded-full mb-6 pt-2 w-[90%] ml-[5%]"
            >
              {MenuList}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
