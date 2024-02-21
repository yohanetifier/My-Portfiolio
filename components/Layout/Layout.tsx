import React, { useContext, useEffect } from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.scss';
import Menu from '../Menu/Menu';
import { ThemeContext } from '../Context/ThemeContext';

interface Props {}

const Layout = ({ children }) => {
	const { menu, setMenu } = useContext(ThemeContext);

	return (
		<>
			<main className={styles.mainWrapper}>{children}</main>
		</>
	);
};

export default Layout;
