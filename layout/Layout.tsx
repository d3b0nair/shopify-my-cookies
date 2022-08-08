import {
  DetailedHTMLProps,
  HTMLAttributes,
  useState,
  KeyboardEvent,
  useRef,
} from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }: LayoutProps): JSX.Element => {
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
      <div className="scroll-smooth 2xl:mx-auto max-w-none max-h-max px-6 md:px-14 xl:px-24 font-sans overflow-hidden">
        <span
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
        </span>
        <div className="min-h-screen">
          <Header />
          <main
            className="focus:outline-8 md:mt-8 max-w-[1600px] mx-auto"
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
