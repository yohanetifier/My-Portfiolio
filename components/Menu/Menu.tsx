import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './Menu.module.scss';
import { ThemeContext } from '../Context/ThemeContext';
import gsap from 'gsap';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import SlidingWrapper from '../SlidingWrapper/SlidingWrapper';

const Menu = () => {
	const { menu, setEndLoading } = useContext(ThemeContext);
	const containerRef = useRef(null);
	// const floatingWrapper = useRef(null);
	const [showFloatingWrapper, setShowFloatingWrapper] = useState(false);
	const height = useRef(0);
	useEffect(() => {
		height.current = window.innerHeight;
	}, [height]);

	useEffect(() => {
		const childrenArray = Array.from(containerRef.current.children);
		menu
			? gsap.to(childrenArray, {
					x: 0,
					stagger: 0.2,
					duration: 1,
					onUpdate: () => {
						if (containerRef.current && containerRef.current.style) {
							containerRef.current.style.zIndex = 100;
						}
					},
					onComplete: () => {
						setEndLoading(true);
					},
			  })
			: gsap.to(childrenArray, {
					x: '100%',
					stagger: 0.2,
					duration: 1,
					onUpdate: () => {
						setEndLoading(false);
					},
					onComplete: () => {
						containerRef.current.style.zIndex = 0;
					},
			  });
	}, [menu, containerRef, showFloatingWrapper]);

	const route = [
		{
			href: 'work',
			label: 'work',
			className: styles.work,
		},
		{
			href: 'about',
			label: 'about',
			className: styles.about,
		},
		{
			href: 'contact',
			label: 'contact',
			className: styles.contact,
		},
	];
	// const handleMove = e => {
	// 	if (showFloatingWrapper) {
	// 		floatingWrapper.current.style.opacity = 1;
	// 	} else {
	// 		floatingWrapper.current.style.opacity = 0;
	// 	}
	// 	floatingWrapper.current.style.top = e.clientY + 'px';
	// 	floatingWrapper.current.style.left = e.clientX + 'px';
	// };

	return (
		<div
			ref={containerRef}
			className={`${styles.menu}`}
			// style={{ height: height.current }}
		>
			<div className={styles.slidingWrapper}></div>
			{route.map(({ href, label, className }, i) => (
				<SlidingWrapper
					href={href}
					label={label}
					key={i}
					setShowFloatingWrapper={setShowFloatingWrapper}
					className={className}
				/>
			))}

			<div className={`${styles.slidingWrapper} ${styles.socialNetwork}`}>
				<SocialNetwork isAnimated={true} />
			</div>
		</div>
	);
};
export default Menu;
