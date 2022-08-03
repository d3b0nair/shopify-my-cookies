import { DetailedHTMLProps, HTMLAttributes } from 'react';
import useRipple from '../../hooks/useRipple';

export const RippleEffect = ({
  duration,
  bgColor,
  rippleSize,
}: RippleEffectProps) => {
  const [createRipple, ripples] = useRipple(duration, rippleSize);
  return (
    <div
      className="absolute top-[0] right-[0] left-[0] bottom-[0]"
      onClick={createRipple}
    >
      {ripples.map(({ x, y, size }, index) => {
        return (
          <span
            className={`absolute opacity-0 rounded-full animate-ripple ${bgColor}`}
            key={'span' + index.toString()}
            style={{
              animationDuration: `${duration}ms`,
              top: y,
              left: x,
              width: size,
              height: size,
            }}
          />
        );
      })}
    </div>
  );
};

interface RippleEffectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bgColor: string;
  duration: number;
  rippleSize?: number;
}
