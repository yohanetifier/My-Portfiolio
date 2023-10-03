import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
// import { logo } from '/logo.png';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className={styles.header}>
			<div>
				<Image
					src='/logo.png'
					alt='logo'
					width={75}
					height={75}
				/>
			</div>
			<div className={styles.personInfo}>
				<h2 className={styles.font}> YOHAN ETIFIER</h2>
				<h2 className={styles.font}> CREATIVE WEB DEVELOPER</h2>
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
