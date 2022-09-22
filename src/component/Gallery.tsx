import * as React from 'react';
import { Picture } from '../types/global';
import GalleryPicture from './Picture';

type Props = {
  picturesInfo: Picture[];
}

const Gallery = (props: Props): JSX.Element => {

  const { picturesInfo } = props;

  const buildGallery = (): JSX.Element[] => {
    return picturesInfo.map((picture, index) => {
      return (
        <GalleryPicture
          key={index}
          title={picture.title}
          subtitle={picture.subtitle}
          image={picture.image}
          index={index}
        />);
      });
    };

  return (

    <div className='mx-8 mt-4 grid gap-5 sm:grid-cols-3 sm:grid-rows-[repeat(18,4rem)] lg:grid-rows-[repeat(8,9rem)] lg:grid-cols-4'>
      {buildGallery()}
    </div>
  );
};

export default Gallery;

