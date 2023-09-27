import React from 'react';
import styles from './Header.module.scss';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className={styles.header}>
			<div>
				<h1>LOGO</h1>
			</div>
			<div className={styles.personInfo}>
				<h2> YOHAN ETIFIER</h2>
				<h2> CREATIVE WEB DEVELOPER</h2>
			</div>
			<div>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</header>
	);
};

export default Header;
