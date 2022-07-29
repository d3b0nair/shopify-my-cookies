import {
  DetailedHTMLProps,
  HTMLAttributes,
  useState,
  KeyboardEvent,
  useRef,
} from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
    useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);
  };
  return (
    <>
      <div className="scroll-smooth grid 2xl:mx-auto max-w-none max-h-max	 lg:max-w-[1600px] lg:max-h-[1000px] grid-cols-[1fr] mx-4 sm:mx-20  px-0 2xl:px-20 font-sans">
        <a
          className={`${
            isSkipLinkDisplayed
              ? 'h-auto'
              : 'block fixed top-[0] left-[100px] h-0 overflow-hidden'
          }`}
          onKeyDown={skipContentAction}
          onFocus={() => setIsSkipLinkDisplayed(true)}
          tabIndex={0}
        >
          Skip to main content
        </a>
        <div className="min-h-screen" {...props}>
          <Header />
          <main
            className="focus:outline-8 md:mt-8 mx-2 md:mx-auto"
            ref={bodyRef}
            tabIndex={0}
            role="main"
          >
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}
