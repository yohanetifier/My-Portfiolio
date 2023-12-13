import React, { useEffect, useRef, useState, useContext } from 'react';
import styles from './Header.module.scss';
import Description from '../Description/Description';
import Logo from '../Logo/Logo';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';
import Button from '../Button/Button';

interface Props {}

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
			<Button />
		</header>
	);
};

export default Header;
