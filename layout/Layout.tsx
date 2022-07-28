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
      <div className="grid 2xl:mx-auto max-w-[1600px] max-h-[1000] grid-cols-[1fr] mx-4 sm:mx-[10%] font-sans">
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
            className="focus:outline-8 mt-8 mx-2"
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
