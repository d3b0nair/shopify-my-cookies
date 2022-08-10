import type { NextPage } from 'next';
import UnderConstructionSVG from '../assets/svg/underConstruction.svg';

const Contact: NextPage = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center w-[320px] h-[520px] mx-auto">
      <UnderConstructionSVG className="w-[340px] h-[320px] stroke-accent fill-accent my-5" />
      <h2 className="text-center text-xl">Under Construction</h2>
    </div>
  );
};
export default Contact;
