import * as React from 'react';
import AppContext from './appContext';
import { globalStateType } from '../types/global';

type Props = {
  children: React.ReactNode
}

const AppContextProvider = (props: Props) => {

  const [state, setState] = React.useState<globalStateType>({
    theme: '',
    carouselEndScroll: true,
    carouselStartScroll: false,
    carouselScroll: false,
    touchDevice: false
  });

  React.useEffect(() => {

    if (typeof window !== 'undefined') {
      navigator.maxTouchPoints > 0 ? setState({ ...state, touchDevice: true }) : false;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeState(state: globalStateType) {
    setState(state);
  }

  return (
    <AppContext.Provider value={{ state, changeState }}>
      {props.children}
    </AppContext.Provider>
    );
};

export default AppContextProvider;
