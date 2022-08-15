import type { NextPage } from 'next';
import { ContactForm, ContactPageMap } from '../components';

const Contact: NextPage = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-x-0 md:grid-cols-2 md:gap-x-5 lg:gap-x-20 xl:gap-x-32 2xl:gap-x-40 min-h-[100vh] lg:min-h-[calc(100vh-62px)] justify-items-center items-center my-[62px] sm:my-5">
      <ContactForm />
      <ContactPageMap />
    </div>
  );
};
export default Contact;
