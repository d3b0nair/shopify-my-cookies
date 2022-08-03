import { HomeIcon as HomePageIcon } from '@heroicons/react/outline';
import { ShoppingBagIcon as StorePageIcon } from '@heroicons/react/outline';
import { ChatAlt2Icon as ContactIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon as CartIcon } from '@heroicons/react/outline';

const iconStyle = 'hover:stroke-accent hover:scale-110 ease-out duration-100';
const menuIconColor = '';

export const menuList: Array<{
  url: string;
  title: string;
  Icon: JSX.Element;
}> = [
  {
    url: '/',
    title: 'Home',
    Icon: (
      <HomePageIcon
        stroke={menuIconColor}
        className={iconStyle}
        height={32}
        width={32}
      />
    ),
  },
  {
    url: '/store',
    title: 'Store',
    Icon: (
      <StorePageIcon
        stroke={menuIconColor}
        className={iconStyle}
        height={32}
        width={32}
      />
    ),
  },
  {
    url: '/contact',
    title: 'Contact',
    Icon: (
      <ContactIcon
        stroke={menuIconColor}
        className={iconStyle}
        height={32}
        width={32}
      />
    ),
  },
];

export const mobileMenuList = [
  ...menuList,
  {
    url: '#cart',
    title: 'Cart',
    Icon: (
      <CartIcon
        stroke={menuIconColor}
        className={iconStyle}
        height={32}
        width={32}
      />
    ),
  },
];
