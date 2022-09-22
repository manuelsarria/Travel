import * as React from 'react';
import { AuthTypeContext } from '../types/global';

export const defaultValue: AuthTypeContext = {
  state: {
    theme: '',
    carouselEndScroll: false,
    carouselStartScroll: true,
    carouselScroll: true,
    touchDevice: false
  },
  changeState: () => {}
};

const appContext = React.createContext(defaultValue);

export default appContext;
