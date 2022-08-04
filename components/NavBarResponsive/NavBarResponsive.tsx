import { Popover, Transition } from '@headlessui/react';
import {
  XCircleIcon as CloseIcon,
  MenuIcon as OpenIcon,
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
          'justify-center opacity-0 text-grey hover:text-accent stroke-grey hover:stroke-accent animate-bounceWithOpacity'
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

  const buttonStyle = `bg-zinc-50 rounded-full border-2 border-accent transition-all hover:border-grey hover:scale-110 ease-in-out duration-300 text-grey hover:text-accent`;

  const OpenButton = () => (
    <Popover.Button className={buttonStyle}>
      <OpenIcon width={44} height={44} />
    </Popover.Button>
  );

  const CloseButton = ({ open }: { open: boolean }) => (
    <button
      className={`${
        open ? 'opacity-1' : 'opacity-0'
      }  ${buttonStyle} absolute bottom-[20%] right-1/2 translate-x-1/2`}
    >
      <CloseIcon width={44} height={44} />
    </button>
  );

  return (
    <Popover className="sm:hidden block">
      {({ open }: { open: boolean }) => (
        <>
          <OpenButton />

          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-grey bg-opacity-75 transition-opacity">
              <CloseButton open={open} />
            </div>
          </Transition.Child>
          <Transition
            show={open}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-1000 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            as={Fragment}
          >
            <Popover.Panel
              static
              className="flex  fixed left-0 bottom-0 bg-zinc-50 text-center rounded-full mb-6 pt-2 w-[90%] ml-[5%]"
            >
              {MenuList}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
