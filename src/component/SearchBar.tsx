import * as React from 'react';
import { HiSearch } from 'react-icons/hi';

const SearchBar = (): JSX.Element => {
  return (
    <div id='search' className='absolute left-0 right-0 flex items-center justify-center w-4/5 h-20 mx-auto bg-white rounded-full mt-36 sm:hidden dark:bg-gray-800'>
      <HiSearch
        className='text-red-700 dark:text-white'
        size={20}
      />
      <input
        type='text'
        placeholder='San Francisco'
        className={
          `items-center w-3/4 px-1 text-lg text-center rounded-lg 
          outline-none focus:ml-4 transition-all xs:w-2/5 focus:text-left 
          xs:text-xl focus:w-4/5 h-3/4 focus:placeholder:opacity-0 dark:bg-gray-800`
      }
      />
    </div>
  );
};

export default SearchBar;
