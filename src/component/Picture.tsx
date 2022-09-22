import * as React from 'react';
import Image from 'next/image';
import useContext from '../context/useAppContext';
import { Picture } from '../types/global';

const GalleryPicture = (props: Picture): JSX.Element => {

  const { state } = useContext();
  const titleCondClass = state.touchDevice ? 'active:cursor-pointer active:scale-105' : 'hover:cursor-pointer hover:scale-105 active:scale-95';

  const { title, subtitle, image, index } = props;

  let imgContCondFormat = '';

  switch (index) {
    case 0:
      imgContCondFormat = 'sm:h-full sm:w-full sm:row-[span_8] sm:col-span-3 lg:row-span-4 lg:col-span-2';
      break;

    case 1:
      imgContCondFormat = 'sm:h-full sm:w-full sm:row-[span_10] sm:col-span-1 lg:row-span-4 lg:col-span-2';
      break;

    case 2:
      imgContCondFormat = 'sm:w-full sm:h-full sm:row-span-5 sm:col-span-2 lg:row-span-4';
      break;

    case 3:
      imgContCondFormat = 'sm:w-full sm:h-full sm:row-span-5 sm:col-span-2 lg:row-span-4';
      break;

    default:
      break;
  }

  return (
    <div className={`relative rounded-lg h-[30rem] ${imgContCondFormat}`}>
      <div className={'w-full h-full rounded-3xl '}>
        <Image src={image} alt={`${title} image`} layout='fill' className='rounded-3xl' objectFit='cover'/>
      </div>
      <h1 className={`${titleCondClass} absolute mx-4 font-sans text-4xl font-bold text-white top-6  transition-all`}>{ title }</h1>
      <p className='absolute mx-4 font-sans text-2xl text-white aabsolute top-16'>{subtitle}</p>
    </div>
  );
};

export default GalleryPicture;
