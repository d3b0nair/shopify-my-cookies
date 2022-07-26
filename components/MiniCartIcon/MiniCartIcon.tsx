import { useRouter } from 'next/router';

export const MiniCartIcon = ({
  cartQuantity,
}: {
  cartQuantity: number;
}): JSX.Element => {
  const currentPage = useRouter().asPath;
  const homepage = '/';

  return (
    <>
      {currentPage === homepage ? null : (
        <div
          tabIndex={0}
          className="relative flex justify-center	items-center stroke-secondary hover:stroke-primary text-md"
        >
          <span className="absolute top-1">
            {cartQuantity < 9 ? cartQuantity : '>9'}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M 20.009 6.005 L 20.474 6.056 L 19.474 13.056 L 6.474 13.056" />
          </svg>
        </div>
      )}
    </>
  );
};
