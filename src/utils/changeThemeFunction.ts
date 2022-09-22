import { AuthTypeContext } from '../types/global';

export const toggleDarkMode = (globalState: AuthTypeContext) => {
  const { state, changeState } = globalState;

  if (state.theme === '') {
    changeState({
      ...state,
      theme: 'dark'
    });
    document.body.classList.add('dark');
  } else {
    changeState({
      ...state,
      theme: ''
    });
    document.body.classList.remove('dark');
  }
};
