import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import Description from '../Description/Description';
import Logo from '../Logo/Logo';
import gsap from 'gsap';

type Props = {};

const Header = (props: Props) => {
	const [menu, setMenu] = useState<boolean>(false);
	const containerRef = useRef(null);
	// const childrenArray = Array.from(containerRef.current.children);
	console.log(containerRef);
	useEffect(() => {
		const childrenArray = Array.from(containerRef.current.children);
		console.log(childrenArray);
		menu
			? gsap.to([containerRef.current, childrenArray], {
					x: 0,
					stagger: 0.2,
					duration: 1,
			  })
			: gsap.to(childrenArray, {
					x: '100%',
					stagger: 0.2,
					duration: 1,
			  });
	}, [menu]);

	// gsap.to('.slidingWrapper', {
	// 	x: 50,
	// 	stagger: 0.1,
	// });
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
			<div
				ref={containerRef}
				className={styles.menu}
			>
				<div className={styles.slidingWrapper}></div>
				<div className={styles.slidingWrapper}></div>
				<div className={styles.slidingWrapper}></div>
				<div className={styles.slidingWrapper}></div>
				<div className={styles.slidingWrapper}></div>
			</div>
		</header>
	);
};

export default Header;
