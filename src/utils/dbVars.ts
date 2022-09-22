import { CardInfo, Picture } from '../types/global';
import norway from '../public/img/norway.jpg';
import newyork from '../public/img/new_york.jpg';
import yosemite from '../public/img/yosemite.jpg';
import chicago from '../public/img/chicago.jpg';
import la from '../public/img/LA.jpg';
import miami from '../public/img/miami.jpg';
import bali from '../public/img/bali.jpg';
import sidney from '../public/img/sydney.jpg';
import switzerland from '../public/img/switzerland.jpg';

export const cardInfoArray: CardInfo[] = [
  {
    index: 0,
    title: 'Norway',
    subtitle: 'Beautiful places',
    image: norway
  },
  {
    index: 0,
    title: 'New York',
    subtitle: 'Concrete jungle',
    image: newyork
  },
  {
    index: 0,
    title: 'Yosemite',
    subtitle: 'A break from the world',
    image: yosemite
  },
  {
    index: 0,
    title: 'Sidney',
    subtitle: 'Big city',
    image: sidney
  },
  {
    index: 0,
    title: 'Switzerland',
    subtitle: 'Big and beautiful country',
    image: switzerland
  },
];

export const pictureInfoArray: Picture[] = [
  {
    index: 0,
    title: 'Chicago',
    subtitle: '2 rooms, bathroom and kitchen',
    image: chicago
  },
  {
    index: 0,
    title: 'Los Angeles',
    subtitle: '4 rooms, 3 bathrroms, kitchen and private pool.',
    image: la
  },
  {
    index: 0,
    title: 'Miami',
    subtitle: '3 rooms, 2 bathrroms, kitchen and amazing sea view.',
    image: miami
  },
  {
    index: 0,
    title: 'Bali',
    subtitle: '2 rooms, 2 bathrroms, kitchen and private pool.',
    image: bali
  }
];
