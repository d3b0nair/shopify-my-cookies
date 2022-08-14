import { InView } from 'react-intersection-observer';
import { AnimateWithInViewProps } from './AnimateWithInView.props';

export const AnimateWithInView = ({
  children,
  animation,
  defaultState,
  threshold,
  ...props
}: AnimateWithInViewProps) => (
  <InView threshold={threshold ? threshold : 0}>
    {({ inView, ref }) => {
      return (
        <div
          style={{ animationPlayState: inView ? 'running' : 'paused' }}
          className={`${inView ? animation : ''} ${defaultState}`}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }}
  </InView>
);
