import { useEffect, useState } from 'react';

export const useFetchOS = () => {
  const [isAndroidOrIPhone, setIsAndroidOrIPhone] = useState(false);
  useEffect(() => {
    setIsAndroidOrIPhone(
      navigator.userAgent.indexOf('Android') !== -1 ||
        navigator.userAgent.indexOf('like Mac') !== -1
    );
  }, []);

  return [isAndroidOrIPhone];
};
