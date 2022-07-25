import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="grid mt-[100px] grid-cols-[1fr_1fr] text-secondary">
      <div>
        <h1 className="text-6xl">Enjoy Your Morning Cookies</h1>
        <h2 className="mt-[50px] text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum
          et sollicitudin ac orci phasellus. Scelerisque varius morbi enim nunc
          faucibus a. Eget velit aliquet sagittis id consectetur purus ut
          faucibus pulvinar. Sit amet luctus venenatis lectus magna fringilla
          urna porttitor rhoncus. Turpis egestas integer eget aliquet nibh
          praesent tristique magna sit. Sit amet mauris commodo quis imperdiet
          massa tincidunt nunc. Vitae congue eu consequat ac felis donec et.
        </h2>
      </div>
      <Image
        className="absolute"
        src="/Hero.png"
        alt="Cookie stack"
        layout="responsive"
        width={944}
        height={1564}
        quality={100}
      />
    </div>
  );
};

export default Home;
