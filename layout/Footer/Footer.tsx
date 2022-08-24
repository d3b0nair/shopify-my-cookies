import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { menuList } from '../../utils/menuBuilder';
import FacebookSVG from '../../assets/svg/Facebook.svg';
import InstagramSVG from '../../assets/svg/Instagram.svg';
import TwitterSVG from '../../assets/svg/Twitter.svg';
import { CustomLink, SubscriptionForm } from '../../components';
import { useFetchOS } from '../../hooks/useFetchOS';

const Footer = (): JSX.Element => {
  const [isAndroidOrIPhone] = useFetchOS();
  const Section = ({
    title,
    className,
    children,
  }: ISimpleDivComponent): JSX.Element => {
    return (
      <div className={`${className ? className : ''} flex flex-col`}>
        <h2 className="text-xl mb-8 font-bold text-acce">
          {title?.toUpperCase()}:
        </h2>
        <div className="text-base leading-loose">{children}</div>
      </div>
    );
  };

  const IconContainer = ({ children }: ISimpleDivComponent): JSX.Element => {
    return (
      <div className="w-[44px] h-[44px] transition-all hover:scale-110 active:scale-100 hover:cursor-pointer ml-4">
        {children}
      </div>
    );
  };

  const contactInfoClasses =
    'block !font-normal text-base hover:text-accent active:text-accentLighter';

  return (
    <footer className="z-20 overflow-hidden mt-[50px] relative mx-auto bg-darkestGrey border-t-4 border-primary text-white p-12 lg:p-0 lg:py-14">
      <div className="flex flex-col max-w-[1000px] mx-auto">
        <div className="grid xl:grid-cols-4 xl:grid-rows-none sm:grid-rows-2 sm:grid-cols-2 grid-cols-1 gap-y-8 xl:gap-y-0 gap-x-0 xl:gap-x-8 sm:justify-between">
          <Section title="navigation">
            <nav className="flex flex-col">
              {menuList.map(({ url, title }) => {
                return (
                  <CustomLink
                    className="font-normal hover:text-accent active:text-accentLighter"
                    key={`headerLink-${url}`}
                    href={url}
                  >
                    {title}
                  </CustomLink>
                );
              })}
            </nav>
          </Section>
          <Section title="business hours">
            <p>
              <span className="font-semibold">Mon - Fri</span>: 7am - 10pm
            </p>
            <p>
              <span className="font-semibold">Saturday</span>: 8am - 10pm
            </p>
            <p>
              <span className="font-semibold">Sunday</span>: 8am - 11pm
            </p>
          </Section>
          <Section title="address">
            <CustomLink
              href={`${
                isAndroidOrIPhone
                  ? 'geo:38.897876222583534,-77.03657390000001'
                  : 'https://goo.gl/maps/ti2oreJBbUpZwMxr7'
              }`}
              className={`${contactInfoClasses} `}
            >
              <span>1600 Pennsylvania Avenue NW, Washington, DC 20500</span>
            </CustomLink>
            <CustomLink
              href="tel:+11234567890"
              className={`${contactInfoClasses}`}
            >
              Tel: +1 123-456-7890
            </CustomLink>
          </Section>
          <Section title="get it fresh" className="!mr-0">
            <p className="pb-8">
              Signup to our email newsletter for limited time offers!
            </p>
            <SubscriptionForm />
          </Section>
        </div>
        <div className="flex flex-col-reverse items-center md:flex-row mt-8 md:justify-between md:items-start">
          <span className="md:self-end">
            Copyright © {new Date().getFullYear()} Arsen Krochak
          </span>
          <div className="flex flex-row mb-4 sm:mb-0">
            <IconContainer>
              <FacebookSVG />
            </IconContainer>
            <IconContainer>
              <InstagramSVG />
            </IconContainer>
            <IconContainer>
              <TwitterSVG />
            </IconContainer>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface ISimpleDivComponent
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  title?: string;
}

export default Footer;
