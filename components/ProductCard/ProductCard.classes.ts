export const createProductCardClasses = (
  cardClasses: 'activeCard' | 'prevCard' | 'nextCard' | 'hidden',
  selectedCard: number,
  cardsLength: number,
  currentIndex: number,
  directionOfHiddenCard: 'left' | 'right',
  isSmallSize?: boolean
) => {
  const middleOfCards = Math.round(cardsLength / 2);
  const removeNextCardOnSmallScreen =
    selectedCard === 0 || selectedCard === cardsLength - 1
      ? 'hidden sm:block'
      : '';

  const removePreviousCardOnSmallScreen =
    selectedCard === cardsLength || selectedCard === 1 ? 'hidden sm:block' : '';

  const scalePreviousCardOnSmallScree =
    middleOfCards > currentIndex
      ? 'scale-[105%]'
      : middleOfCards === currentIndex
      ? 'scale-[105%]'
      : 'scale-[110%]';

  const scaleNextCardOnSmallScree =
    middleOfCards > currentIndex
      ? 'scale-[105%]'
      : middleOfCards === currentIndex
      ? 'scale-[105%]'
      : 'scale-[110%]';

  const centerCardOnSmallScreen = `left-[50%] translate-x-[-50%]`;

  const globalSideCardClasses = `top-0 cursor-zoom-in sm:opacity-[0.4] hover:opacity-[1] sm:scale-[80%] hover:scale-[90%]`;

  const positionCardOnRight = ` ${
    isSmallSize
      ? `${centerCardOnSmallScreen} sm:left-[80%] sm:translate-x-[-80%]`
      : 'sm:left-[100%] sm:translate-x-[-100%] xl:left-[90%] xl:translate-x-[-90%] 2xl:left-[80%] 2xl:translate-x-[-80%]'
  }`;

  const positionCardOnLeft = ` ${
    isSmallSize
      ? `${centerCardOnSmallScreen} sm:left-[20%] sm:translate-x-[-20%]`
      : 'sm:left-[0%] sm:translate-x-[0%] lg:left-[0%] lg:translate-x-[0%] xl:left-[10%] xl:translate-x-[-10%] 2xl:left-[20%] 2xl:translate-x-[-20%]'
  }`;

  const nextCardClasses = `${removeNextCardOnSmallScreen} ${centerCardOnSmallScreen} ${globalSideCardClasses} z-[1] sm:z-[2] ${scaleNextCardOnSmallScree} ${positionCardOnRight}`;

  const prevCardClasses = `${removePreviousCardOnSmallScreen} ${centerCardOnSmallScreen} ${globalSideCardClasses} z-[2] sm:z-[1] ${scalePreviousCardOnSmallScree} ${positionCardOnLeft}`;

  const activeCardClasses = `${centerCardOnSmallScreen} z-[3] scale-100 top-0 translate-y-[0] sm:top-[50px] cursor-grab active:cursor-grabbing`;

  const cardHiddenClasses = `z-[3] pointer-events-none scale-[80%] opacity-[0]	${
    directionOfHiddenCard === 'right'
      ? `left-[200%] sm:left-[150%]`
      : `left-[-100%] sm:left-[-50%] transition-none`
  }`;

  const titleClasses = `${
    isSmallSize ? 'text-md mt-2' : 'text-xl mt-4'
  } text-accent hover:text-accentLighter active:text-primary font-bold transition-colors`;

  const cardSizeClasses = `${
    isSmallSize
      ? 'mt-2 sm:mt-0 h-[300px] w-[200px]'
      : 'h-[400px] sm:h-[450px] w-[250px] lg:h-[500px] lg:w-[300px]'
  }`;

  const imageSize = `${
    isSmallSize
      ? 'min-h-[200px] sm:min-h-[250px]'
      : 'min-h-[200px] sm:min-h-[250px]'
  }`;

  const cardType =
    cardClasses === 'hidden'
      ? cardHiddenClasses
      : cardClasses === 'prevCard'
      ? prevCardClasses
      : cardClasses === 'nextCard'
      ? nextCardClasses
      : activeCardClasses;

  return {
    selectCardTypeClass: cardType,
    setImageSizeClass: imageSize,
    setCardSizeClass: cardSizeClasses,
    titleClass: titleClasses,
  };
};
