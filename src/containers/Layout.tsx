import * as React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

type Props = {
	children: React.ReactChild[]
}

const Layout = (props: Props): JSX.Element => {
	return (
		<>
			<Header />
			{ props.children }
			<Footer />
		</>
	);
};

export default Layout;
