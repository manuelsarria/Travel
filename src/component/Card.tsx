import * as React from 'react';
import Image from 'next/image';
import { CardInfo } from '../types/global';
import useContext from '../context/useAppContext';

const Card = (props: CardInfo) => {

  const { index, title, subtitle, image } = props;

  const { state } = useContext();

  const cardsBgTheme = index % 2 === 0 ? 'bg-secondary dark:bg-gray-700' : 'bg-white dark:bg-gray-800';
  const cardsFontTheme = index % 2 === 0 ? 'text-white' : 'text-tertiary';
  const cardHoverBehavior = state.touchDevice ? 'active:translate-y-4 active:scale-105' : 'hover:translate-y-4 hover:scale-105 active:scale-95';

  return (
    <div className={`min-w-[15.4rem] relative first:ml-8 hover:cursor-pointer min-h-[18.7rem] mx-4 shadow-md mb-8 my-2 sm:min-h-[25.7rem] sm:min-w-[22.4rem] transition-all ${cardHoverBehavior}`}>
      <div className='relative w-full h-1/2 rounded-2xl '>
        <Image src={image} alt={`${title} image`} layout='fill' className='object-cover object-[50%_60%] rounded-t-xl' />
      </div>
      <div className={`flex flex-col items-left justify-center ${cardsBgTheme} rounded-b-xl h-1/2`}>
        <h1 className={`font-semibold text-1xl ml-4 ${cardsFontTheme} dark:text-white`}>{title}</h1>
        <p className={`text-lg ml-4 ${cardsFontTheme} dark:text-gray-300`}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
