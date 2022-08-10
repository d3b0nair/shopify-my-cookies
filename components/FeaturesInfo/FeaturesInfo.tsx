import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { ShoppingBagIcon, TruckIcon, GiftIcon } from '@heroicons/react/outline';

export const FeaturesInfo = ({
  className,
}: DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element => {
  const FeatureContainer = ({
    className,
    children,
    ...props
  }: ISimpleDivComponent): JSX.Element => {
    return (
      <div
        className={`${
          className ? className : ''
        } border-gray-200 text-center p-5`}
        {...props}
      >
        {children}
      </div>
    );
  };

  const IconContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-[61px] h-[68px] mx-auto text-accent">{children}</div>
    );
  };
  const Title = ({ children }: { children: React.ReactNode }) => {
    return (
      <h3 className="mt-2 text-lg xl:text-2xl font-light text-darkestGrey">
        {children}
      </h3>
    );
  };
  const Description = ({ children }: { children: React.ReactNode }) => {
    return (
      <span className="mt-2 text-sm xl:text-base text-grey">{children}</span>
    );
  };
  return (
    <div
      className={`${
        className ? className : ''
      } hidden md:flex flex-row w-full justify-around max-w-[980px] mx-auto bg-white rounded-full shadow-inner`}
    >
      <FeatureContainer className="border-r-2">
        <IconContainer>
          <ShoppingBagIcon strokeWidth={1} />
        </IconContainer>
        <Title>NEW PICK UP SERVICE</Title>
        <Description>Get it fresh</Description>
      </FeatureContainer>
      <FeatureContainer>
        <IconContainer>
          <TruckIcon strokeWidth={1} />
        </IconContainer>
        <Title>FREE DELIVERY</Title>
        <Description>Delivered to your door step</Description>
      </FeatureContainer>
      <FeatureContainer className="border-l-2">
        <IconContainer>
          <GiftIcon strokeWidth={1} />
        </IconContainer>
        <Title>SPECIAL GIFT WRAPS</Title>
        <Description>Send a sweet surprise</Description>
      </FeatureContainer>
    </div>
  );
};

interface ISimpleDivComponent
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}
