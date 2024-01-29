import React, { useEffect, useRef, useState, useContext } from 'react';
import styles from './Header.module.scss';
import Description from '../Description/Description';
import Logo from '../Logo/Logo';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';
import Button from '../Button/Button';
import Link from 'next/link';

interface Props {}

const Header = (props: Props) => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.header}>
				<Link href='/'>
					<Logo
						src='/logo.png'
						alt='logo'
					/>
				</Link>
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
