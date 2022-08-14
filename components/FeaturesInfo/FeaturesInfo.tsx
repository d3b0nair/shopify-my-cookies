import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { featuresList } from '../../utils/featuresList';

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

  const Feature = ({
    title,
    description,
    icon,
    className,
  }: IFeatureComponent) => {
    return (
      <FeatureContainer className={`${className ? className : ''}`}>
        <IconContainer>{icon}</IconContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </FeatureContainer>
    );
  };
  return (
    <div
      className={`${
        className ? className : ''
      } hidden md:flex flex-row w-full justify-around max-w-[980px] mx-auto bg-white rounded-full shadow-inner`}
    >
      {featuresList.map(({ title, description, icon }, i) => {
        return (
          <Feature
            key={`feature-${title}`}
            className={`${
              i === 0
                ? 'border-r-2'
                : i === featuresList.length - 1
                ? 'border-l-2'
                : ''
            }`}
            title={title}
            description={description}
            icon={icon}
          />
        );
      })}
    </div>
  );
};

interface ISimpleDivComponent
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}

interface IFeatureComponent extends ISimpleDivComponent {
  title: string;
  description: string;
  icon: JSX.Element;
}
