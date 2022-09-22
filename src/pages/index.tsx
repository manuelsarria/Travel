import type { NextPage } from 'next';
import * as React from 'react';
import Layout from '../containers/Layout';
import SearchBar from '../component/SearchBar';
import { HiMoon } from 'react-icons/hi';
import { BsFillSunFill } from 'react-icons/bs';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import PrimaryButton from '../component/PrimaryButton';
import Carousel from '../component/Carousel';
import Gallery from '../component/Gallery';
import heroImage from '../public/img/sanFranciscoDesktop.jpg';
import Image from 'next/image';
import { cardInfoArray, pictureInfoArray } from '../utils/dbVars';
import useContext from '../context/useAppContext';
import { toggleDarkMode } from '../utils/changeThemeFunction';

const Home: NextPage = () => {

  // CAROUSEL BUTTONS NAVIGATION CONFIGURATION
    // maybe this is not the best practice, at the moment is the only way I know though

    //calling Context
  const globalAppState = useContext(); const { state, changeState } = globalAppState;

    //creating ref for carousel
  const useCarouselRef: React.RefObject<HTMLDivElement> = React.useRef <HTMLDivElement>(null);

    //Setting a conditional class for left and right Carousel buttons
  const leftButtonCondClass = state.carouselScroll && state.carouselStartScroll && !state.touchDevice ?
    'inline-block' :
    'hidden';
  const rightButtonCondClass = state.carouselScroll && state.carouselEndScroll && !state.touchDevice ?
    'inline-block' :
    'hidden';
  const buttonsContainerCondClass = state.carouselScroll && state.carouselEndScroll && state.touchDevice ?
    'hidden' :
    'xs:flex';

    //Carousel Section button behavior functions
  const scrollRight = () => {
    if (useCarouselRef.current) {
      useCarouselRef.current.scrollLeft += 200;
    }
  };

  const scrollLeft = () => {
    if (useCarouselRef.current) {
      useCarouselRef.current.scrollLeft -= 200;
    }
  };

  const changeTheme = () => {
    toggleDarkMode({ state, changeState });
  };

    //Setting behavior when resizing screen
  function handleResize() {
    if (useCarouselRef.current && !navigator.maxTouchPoints) {
      const { offsetWidth, scrollWidth } = useCarouselRef.current;
      if (offsetWidth === scrollWidth) {
        if (document.body.classList.contains('dark')) {
          changeState({
            ...state,
            carouselScroll: false,
            theme: 'dark'
          });
        } else {
          changeState({
            ...state,
            carouselScroll: false,
          });
        }
        useCarouselRef.current.scrollLeft = 0;
      } else {
        if (document.body.classList.contains('dark')) {
          changeState({
            ...state,
            carouselScroll: true,
            theme: 'dark'
          });
        } else {
          changeState({
            ...state,
            carouselScroll: true,
          });
        }
        useCarouselRef.current.scrollLeft = 0;
      }
    }

  }

    //useEffect for setting an event listener on resize screen for showing or hidding left and right carousel buttons
  React.useEffect(() => {
    if (useCarouselRef.current && !navigator.maxTouchPoints) {

      const { offsetWidth, scrollWidth } = useCarouselRef.current;

      if (offsetWidth === scrollWidth) {
        changeState({
          ...state,
          carouselScroll: false
        });
      } else {
        changeState({
          ...state,
          carouselScroll: true
        });
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
     window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <Layout>
				<section id='home' className='flex justify-center sm:mt-16 h-[50rem] md:h-[55rem] bg-cover relative w-full dark:text-white'>
          <div className={'w-full h-full relative'}>
            <Image src={heroImage} alt={'san Francisco hero image'} layout='fill' objectFit='cover' priority/>
          </div>
					<div className='absolute flex items-center justify-center w-24 h-12 transition-all bg-white rounded-3xl top-10 right-5 sm:hidden dark:bg-gray-800'>
          {state.theme === '' ?
						<HiMoon className='text-primary' size={24} onClick={changeTheme}/> :
						<BsFillSunFill className='text-primary dark:text-white' size={24} onClick={changeTheme}/>
          }
					</div>
					<SearchBar />
          <h1 className='absolute hidden text-5xl font-bold text-black w-[32rem] sm:inline top-60 left-24'>Find more locations like this</h1>
          <PrimaryButton content='Explore more' />
				</section>
				<section className={'w-full mt-8  dark:text-white'} id='recomendations'>
          <div className='flex justify-between'>
            <h1 className={'mx-8 text-3xl font-bold text-primary dark:text-white'}>Our Recomendations</h1>
            <div className={`justify-center transition w-auto ${buttonsContainerCondClass}`}>
              <button className={`w-10 mx-8 active:scale-75 transition-all ${leftButtonCondClass}`} onClick={scrollLeft} >
                  <MdOutlineArrowBackIos className='w-8 h-8 text-gray-500'/>
              </button>
              <button className={`w-10 mx-8 active:scale-75 transition-all ${rightButtonCondClass}`} onClick={scrollRight} >
                  <MdOutlineArrowForwardIos className='w-8 h-8 text-gray-500'/>
              </button>
            </div>
          </div>
          <Carousel cardsInfo={cardInfoArray} useCarouselRef={useCarouselRef} />
        </section>
				<section className={'w-full mt-8  dark:text-white'} id='trending'>
          <h1 className='mx-8 text-3xl font-bold text-primary dark:text-blue dark:text-white'>Trending stays</h1>
          <Gallery picturesInfo={pictureInfoArray} />
        </section>
				<section className={'w-full mt-4 font-semibold  dark:text-white'} id='faqs'>
          <h1 className={'mx-8 my-4 text-3xl font-bold text-primary dark:text-white'}> FAQs</h1>
          <h2 className={'mx-8 my-4 text-2xl text-primary dark:text-white'}>How can I pay?</h2>
          <p className={'mx-8 my-4 dark:text-gray-400'}>We accept VISA, Mastercard, American Express, Paypal and Binance</p>
          <h2 className={'mx-8 my-4 text-2xl text-primary dark:text-white'}>How much time before may I cancel reservation?</h2>
          <p className={'mx-8 my-4 dark:text-gray-400'}>Cancellation 24h before reservation has not any charges</p>
          <h2 className={'mx-8 my-4 text-2xl text-primary dark:text-white'}>Are there special discounts?</h2>
          <p className={'mx-8 my-4 dark:text-gray-400'}>Yes, we provide special discounts to our customers who visit us every year</p>
        </section>
    </Layout>
  );
};

export default Home;
