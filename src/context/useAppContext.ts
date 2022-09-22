import * as React from 'react';
import appContext from './appContext';

function useContext() {
  return React.useContext(appContext);
}

export default useContext;

