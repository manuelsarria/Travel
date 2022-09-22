import * as React from 'react';
import { FaHome, FaSearch, FaHeart, FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';
import useContext from '../context/useAppContext';

const TabBar = (): JSX.Element => {

  const { state } = useContext();

  const iconsHoverBehavior = state.touchDevice ? 'active:text-red-500 active:scale-95 dark:active:text-gray-500 dark:text-white' : 'hover:text-red-500 active:scale-95 dark:text-white dark:hover:text-gray-500';

  return (
    <nav className='fixed bottom-0 flex items-center w-full h-24 text-gray-300 bg-white dark:shadow-transparent justify-evenly sm:hidden dark:bg-gray-900 dark:backdrop-blur-3xl dark:opacity-90'>
      <Link href='#home'>
        <a>
          <FaHome className={`transition-all ${iconsHoverBehavior}`} size={24} />
        </a>
      </Link>
      <Link href='#search'>
        <a>
          <FaSearch className={`transition-all ${iconsHoverBehavior}`} size={24} />
        </a>
      </Link>
      <Link href='/'>
        <a>
          <FaHeart className={`transition-all ${iconsHoverBehavior}`} size={24} />
        </a>
      </Link>
      <Link href='/'>
        <a>
          <FaUserAlt className={`transition-all ${iconsHoverBehavior}`} size={24} />
        </a>
      </Link>
    </nav>
  );
};

export default TabBar;
