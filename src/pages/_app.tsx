import '../styles/globals.css';
import * as React from 'react';
import { AppProps } from 'next/app';
import AppContextProvider from '../context/appContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='dark:bg-gray-900'>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </div>
  );
}

export default MyApp;
