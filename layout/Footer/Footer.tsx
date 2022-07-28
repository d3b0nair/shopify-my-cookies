// import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer className="bottom-0 z-20 overflow-hidden mt-[50px] lg:mt-[0px]">
      <p className="text-center text-offGrey">
        Copyright © {new Date().getFullYear()} Arsen Krochak
      </p>
    </footer>
  );
};

export default Footer;
