import React from 'react';
import styles from './Header.module.scss';
import Description from '../Description/Description';
import Logo from '../Logo/Logo';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className={styles.header}>
			<Logo
				src='/logo.png'
				alt='logo'
			/>
			<Description
				name='Yohan Etifier'
				subtitle='Creative web developer'
			/>
			<div>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</header>
	);
};

export default Header;
