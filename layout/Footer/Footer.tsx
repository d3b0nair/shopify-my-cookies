// import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer className="bottom-0 z-20overflow-hidden">
      <p className="text-center text-offGrey">
        Copyright © {new Date().getFullYear()} d3b0anir{' '}
      </p>
    </footer>
  );
};

export default Footer;
