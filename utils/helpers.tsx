import { HomeIcon as HomePageIcon } from '@heroicons/react/outline';
import { ShoppingBagIcon as StorePageIcon } from '@heroicons/react/outline';
import { ChatAlt2Icon as ContactIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon as CartIcon } from '@heroicons/react/outline';
import heroImage0 from '../public/hero.png';
import heroImage1 from '../public/hero1.png';
import heroImage2 from '../public/hero2.png';
import heroImage3 from '../public/hero3.png';

export const floatToUSDCurrency = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);

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
    url: '',
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

export const heroImages = [heroImage0, heroImage1, heroImage2, heroImage3];
