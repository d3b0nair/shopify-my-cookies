import { useEffect, MouseEvent, useState, useMemo } from 'react';

export default function useRipple(duration: number, customSize?: number) {
  const [rippleArray, setRippleArray] = useState<Array<IRipple>>([]);

  const ripples = useMemo(() => rippleArray.map((item) => item), [rippleArray]);

  const useDebouncedRippleCleanUp = (
    rippleCount: number,
    duration: number,
    cleanUpFunction: () => void
  ) => {
    useEffect(() => {
      let bounce: ReturnType<typeof setTimeout>;
      if (rippleCount > 0) {
        bounce = setTimeout(() => {
          cleanUpFunction();
        }, duration);
        clearTimeout(bounce);
      }

      return () => clearTimeout(bounce);
    }, [rippleCount, duration, cleanUpFunction]);
  };

  useDebouncedRippleCleanUp(ripples.length, duration, () => {
    setRippleArray([]);
  });

  const createRipple = (evt: MouseEvent) => {
    const { left, top } = evt.currentTarget.getBoundingClientRect();
    const size = !customSize
      ? Math.min(evt.currentTarget.clientHeight, evt.currentTarget.clientWidth)
      : customSize;

    const x = evt.clientX - left - size / 2;
    const y = evt.clientY - top - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return [createRipple, ripples] as const;
}

interface IRipple {
  x: number;
  y: number;
  size: number;
}
