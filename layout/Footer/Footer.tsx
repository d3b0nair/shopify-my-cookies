const Footer = (): JSX.Element => {
  return (
    <footer className="z-20 overflow-hidden mt-[50px] max-w-[1600px] relative mx-auto">
      <p className="text-center text-offGrey">
        Copyright © {new Date().getFullYear()} Arsen Krochak
      </p>
    </footer>
  );
};

export default Footer;
