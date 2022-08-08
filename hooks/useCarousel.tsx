import { MouseEvent, useState } from 'react';

export default function useCarousel(
  length: number,
  transitionDuration: number
) {
  const [index, setIndex] = useState<number>(2);
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);

  const handleEventFunction = (
    evt: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    function isMouseEvent(
      e: React.MouseEvent | React.TouchEvent
    ): e is React.MouseEvent<HTMLDivElement> {
      return e.type === 'mousedown';
    }

    const card = evt.currentTarget as HTMLElement;
    const initialX = isMouseEvent(evt) ? evt.clientX : evt.touches[0].clientX;

    let offset = 0;

    document.onmousemove = onPointerMove as () => void;
    document.onmouseup = onPointerEnd;
    document.ontouchmove = onPointerMove;
    document.ontouchend = onPointerEnd;

    const preventOnClickEvent = () => {
      setIsGrabbing(true);
      setTimeout(() => setIsGrabbing(false), transitionDuration);
    };

    function onPointerMove(e: MouseEvent | TouchEvent) {
      function isMouseEvent(e: MouseEvent | TouchEvent): e is MouseEvent {
        return e.type === 'mousemove';
      }
      const clientX = isMouseEvent(e) ? e.clientX : e.touches[0].clientX;
      offset = clientX - initialX;
      if (offset <= -50) {
        slideRight();
        if (index === length - 1) {
          card.style.left = '0';
        } else {
          setTimeout(() => {
            card.style.left = '0';
          }, 100);
        }
        onPointerEnd();
        return;
      }
      if (offset >= 50) {
        slideLeft();
        setIsGrabbing(true);
        if (index === 0) {
          card.style.left = '0';
        } else {
          setTimeout(() => {
            card.style.left = '0';
          }, 100);
        }
        onPointerEnd();
        return;
      }
      card.style.left = `${offset}px`;
    }
    function onPointerEnd() {
      preventOnClickEvent();
      const quickReleaseLeft = offset < 0 && offset > -50;
      const quickReleaseRight = offset > 0 && offset < 50;
      if (quickReleaseLeft || quickReleaseRight) {
        card.style.left = 'unset';
      }

      document.onmousemove = null;
      document.onmouseup = null;
      document.ontouchmove = null;
      document.ontouchend = null;
    }
  };

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= length - 1) {
      setIndex(index + 1);
    }
  };

  const slideTo = (direction: 'left' | 'right') => {
    direction === 'left' ? slideLeft() : slideRight();
  };

  const selectedElement = {
    index,
    setIndex,
  };

  return [isGrabbing, handleEventFunction, selectedElement, slideTo] as const;
}
