import React, { useContext, useEffect, useRef } from 'react';
import styles from './Menu.module.scss';
import { ThemeContext } from '../Context/ThemeContext';
import gsap from 'gsap';
import Link from 'next/link';
import SocialNetwork from '../SocialNetwork/SocialNetwork';

interface Props {}
const Menu = (props: Props) => {
	const { menu, setMenu } = useContext(ThemeContext);
	const containerRef = useRef(null);
	useEffect(() => {
		const childrenArray = Array.from(containerRef.current.children);
		menu
			? gsap.to(childrenArray, {
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

	return (
		<div
			ref={containerRef}
			className={menu ? `${styles.menu}` : `${styles.menu} ${styles.hideMenu}`}
		>
			<div className={styles.slidingWrapper}></div>
			<div className={styles.slidingWrapper}>
				<Link href='/work'>work</Link>
			</div>
			<div className={styles.slidingWrapper}>
				<Link href='/about'>about</Link>
			</div>
			<div className={styles.slidingWrapper}>
				<Link href='/contact'>contact</Link>
			</div>
			<div className={`${styles.slidingWrapper} ${styles.socialNetwork}`}>
				<SocialNetwork />
			</div>
		</div>
	);
};
export default Menu;
