import { HomeIcon as HomePageIcon } from '@heroicons/react/outline';
import { ShoppingBagIcon as StorePageIcon } from '@heroicons/react/outline';
import { ChatAlt2Icon as ContactIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon as CartIcon } from '@heroicons/react/outline';

export const floatToUSDCurrency = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);

const iconStyle = 'hover:stroke-accent stroke-grey hover:scale-110 ease-out duration-100';

export const menuList: Array<{
  url: string;
  title: string;
  Icon: JSX.Element;
}> = [
  {
    url: '/',
    title: 'Home',
    Icon: <HomePageIcon className={iconStyle} height={32} width={32} />,
  },
  {
    url: '/store',
    title: 'Store',
    Icon: <StorePageIcon className={iconStyle} height={32} width={32} />,
  },
  {
    url: '/contact',
    title: 'Contact',
    Icon: <ContactIcon className={iconStyle} height={32} width={32} />,
  },
];

export const mobileMenuList = [
  ...menuList,
  {
    url: '',
    title: 'Cart',
    Icon: <CartIcon className={iconStyle} height={32} width={32} />,
  },
];
