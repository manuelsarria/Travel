import * as React from 'react';
import { HiMoon, HiSearch, HiUser } from 'react-icons/hi';
import { BsFillSunFill } from 'react-icons/bs';
import Link from 'next/link';
import useContext from '../context/useAppContext';
import { toggleDarkMode } from '../utils/changeThemeFunction';

const Header = (): JSX.Element => {

  const { state, changeState } = useContext();
  const changeTheme = () => {
    toggleDarkMode({ state, changeState });
  };

  const navHoverBehavior = state.touchDevice ? 'active:border-b-2 active:border-red-500 dark:active:border-white' : 'hover:border-b-2 hover:border-red-500 dark:hover:border-white active:scale-95';

  return (
    <header className={'fixed top-0 z-20 hidden w-full h-16 text-xl bg-white dark:bg-gray-900 transition md:text-2xl sm:flex md:items-center sm:flex-column dark:text-white'}>
      <nav className='flex items-center justify-between w-full h-full mx-8 dark:text-white '>
        <div>
          <Link href='/'><a className={`font-semibold transition-all text-primary ${navHoverBehavior} dark:text-white`}>Platzi Travel</a></Link>
        </div>
        <div className='flex items-center justify-center dark:text-white'>
          <Link href='#recomendations'><a className={`mx-8 font-semibold transition-all sm:mx-4 text-primary ${navHoverBehavior} dark:text-white`}>Locations</a></Link>
          <Link href='#trending'><a className={`mx-8 font-semibold transition-all sm:mx-4 text-primary ${navHoverBehavior} dark:text-white`}>Stays</a></Link>
          <Link href='#faqs'><a className={`mx-8 font-semibold transition-all sm:mx-4 text-primary ${navHoverBehavior} dark:text-white`}>FAQs</a></Link>
          <Link href='#footer'><a className={`mx-8 font-semibold transition-all sm:mx-4 text-primary ${navHoverBehavior} dark:text-white`}>About us</a></Link>
        </div>
          <div className='flex justify-center'>
            <div className={`w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 transition-all ${navHoverBehavior} dark:text-white`}>
              <Link href='/'>
                <a>
                  <HiSearch className='w-full h-full'/>
                </a>
              </Link>
            </div>
          {
            state.theme === '' ?
            <div className={`w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 transition-all ${navHoverBehavior} dark:text-white`} >
              <HiMoon className='w-full h-full cursor-pointer' onClick={changeTheme}/>
            </div> :
            <div className={`w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 transition-all ${navHoverBehavior} dark:text-white`} >
              <BsFillSunFill className='w-full h-full cursor-pointer' onClick={changeTheme} />
            </div>
          }
              <div className={`w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 transition-all ${navHoverBehavior} dark:text-white`}>
                <Link href='/'>
                  <a>
                    <HiUser className='w-full h-full'/>
                  </a>
                </Link>
              </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
