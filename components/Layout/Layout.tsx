import React from 'react';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<>
			<main className={styles.mainWrapper}>{children}</main>
		</>
	);
};

export default Layout;
