import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

type LayoutProps = {
  children: React.ReactNode;
};
