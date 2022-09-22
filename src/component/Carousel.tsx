import * as React from 'react';
import { CardInfo } from '../types/global';
import Card from '../component/Card';
import useContext from '../context/useAppContext';

type Props = {
  cardsInfo: CardInfo[];
  useCarouselRef: React.RefObject<HTMLDivElement>;
}

const Carousel = (props: Props) => {

  const { state, changeState } = useContext();
  const { carouselEndScroll, carouselStartScroll } = state;

  const { cardsInfo, useCarouselRef } = props;

  const handleScroll = () => {
    if (useCarouselRef.current && !navigator.maxTouchPoints) {

      const { scrollLeft, scrollWidth, offsetWidth } = useCarouselRef.current;
      // console.log('scrollLeft', Math.ceil(scrollLeft), 'offsetWidth', offsetWidth, 'scrollWidth', scrollWidth);
      scrollLeft > 0 && !carouselStartScroll ?
        changeState({
          ...state,
          carouselStartScroll: true,
        }) :
      scrollLeft === 0 && carouselStartScroll ?
        changeState({
          ...state,
          carouselStartScroll: false,
        }) :
      Math.ceil(scrollLeft) + offsetWidth >= scrollWidth && carouselEndScroll ?
        changeState({
          ...state,
          carouselEndScroll: false
          }) :
      Math.ceil(scrollLeft) + offsetWidth < scrollWidth && !carouselEndScroll ?
        changeState({
          ...state,
          carouselEndScroll: true
          }) :
          false;
    }
  };

  const carouselScrollBehavior = state.touchDevice ? 'overflow-x-auto' : 'overflow-x-auto xs:overflow-hidden';

  const buildCarousel = (): JSX.Element[] => cardsInfo.map((cardsInfo, index) => <Card index={index} key={index} title={cardsInfo.title} subtitle={cardsInfo.subtitle} image={cardsInfo.image}/>);

  return (
    <div className={`relative flex w-full mt-4 justify-left translate-all scroll-smooth ${carouselScrollBehavior}`} ref={useCarouselRef} onScroll={handleScroll}>
      {buildCarousel()}
    </div>
  );
};

export default Carousel;
