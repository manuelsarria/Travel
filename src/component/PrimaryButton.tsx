import * as React from 'react';
import useContext from '../context/useAppContext';

type Props = {
	content: string;
}

const PrimaryButton = (props: Props): JSX.Element => {

  const { state } = useContext();

  const primaryButtonCondClass = state.touchDevice ?
    'active:bg-red-500 active:text-white dark:active:bg-gray-500 dark:active:text-white active:scale-95' :
    'hover:bg-red-500 hover:text-white dark:hover:bg-gray-500 dark:hover:text-white active:scale-95';

	return (
			<button
  className={
        ` ${primaryButtonCondClass} absolute transition-all focus:outline-noneshadow-md dark:text-gray-900 
          sm:top-96 left-0 sm:left-24 sm:right-auto right-0 h-20 mx-auto font-semibold 
          bg-white rounded-full w-80 text-primary top-[40rem] text-2.5xl`
        }
			>
				{props.content}
			</button>
	);
};

export default PrimaryButton;
