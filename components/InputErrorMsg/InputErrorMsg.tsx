import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { FieldError } from 'react-hook-form';

export const InputErrorMsg = ({
  error,
}: {
  error?: FieldError;
}): JSX.Element => {
  return (
    <>
      {error && (
        <span
          className="text-red-800 flex justify-center md:justify-start"
          role="alert"
        >
          <ExclamationCircleIcon
            className="self-center"
            width={22}
            height={22}
          />
          &nbsp;
          <span>{error.message}</span>
        </span>
      )}
    </>
  );
};
