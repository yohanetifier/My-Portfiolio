import React from 'react';
import styles from './Header.module.scss';
import Description from '../Description/Description';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Header = () => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.header}>
				<Logo
					src='/assets/images/logo.png'
					alt='log'
				/>
				<Description
					name='Yohan Etifier'
					subtitle='Creative web developer'
				/>
				<Button />
			</div>
		</header>
	);
};

export default Header;
