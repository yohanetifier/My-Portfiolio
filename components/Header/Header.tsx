import React, { useEffect, useRef, useState, useContext } from 'react';
import styles from './Header.module.scss';
import Description from '../Description/Description';
import Logo from '../Logo/Logo';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';

interface Props {}

const Header = (props: Props) => {
	// const [menu, setMenu] = useState<boolean>(false);
	const containerRef = useRef(null);
	const { menu, setMenu } = useContext(ThemeContext);
	// const childrenArray = Array.from(containerRef.current.children);
	// useEffect(() => {
	// 	const childrenArray = Array.from(containerRef.current.children);
	// 	menu
	// 		? gsap.to([containerRef.current, childrenArray], {
	// 				x: 0,
	// 				stagger: 0.2,
	// 				duration: 1,
	// 		  })
	// 		: gsap.to(childrenArray, {
	// 				x: '100%',
	// 				stagger: 0.2,
	// 				duration: 1,
	// 		  });
	// }, [menu]);

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
			<button
				onClick={() => setMenu(!menu)}
				className={styles.button}
			>
				<span
					className={
						!menu
							? styles.firstBar
							: `${styles.firstBar} ${styles.rotateFirstBar}`
					}
				></span>
				<span
					className={
						!menu
							? styles.secondBar
							: `${styles.secondBar} ${styles.rotateSecondBar}`
					}
				></span>
			</button>
			{/* <div
				ref={containerRef}
				className={styles.menu}
			>
				<div className={styles.slidingWrapper}></div>
				<div className={styles.slidingWrapper}></div>
				<div className={styles.slidingWrapper}></div>
				<div className={styles.slidingWrapper}></div>
				<div className={styles.slidingWrapper}></div>
			</div> */}
		</header>
	);
};

export default Header;
