import React from 'react';
import Header from '../Header/Header';

interface Props {}

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;
