import React, { useEffect, useRef } from 'react';
import styles from './Cursor.module.scss';
import gsap from 'gsap';

interface Props {}

const Cursor = (props: Props) => {
	const cursorRef = useRef(null);
	const intensity = 2;
	//HANDLE MOVE
	const handleMove = e => {
		const intensityX = e.clientX;
		const intensityY = e.clientY;
		// gsap.to(cursorRef.current, {
		// 	top: e.clientY,
		// 	duration: 0.2,
		// 	ease: 'power2.out',
		// });
		// gsap.to(cursorRef.current, {
		// 	left: intensityX,
		// 	duration: 0.2,
		// 	ease: 'power2.out',
		// });
		cursorRef.current.style.top = intensityY + 'px';
		cursorRef.current.style.left = intensityX + 'px';
		// cursorRef.current.style.transition = 'top left 300ms 50ms ease';
	};

	// HANDLE MOVE
	window.addEventListener('mousemove', handleMove);
	// window.addEventListener('mousemove', e => {
	// 	cursorRef.current.style.top = e.clientY + 'px';
	// 	cursorRef.current.style.left = e.clientX + 'px';
	// });

	return (
		<span
			ref={cursorRef}
			className={styles.cursor}
		>
			<div className={styles.circularWrapper}></div>
			<span className={styles.firstLetter}>W</span>
			<span className={styles.secondLetter}>O</span>
			{/* <span className={styles.thirdLetter}>R</span> */}
			{/* <span className={styles.fourthLetter}>K</span> */}
		</span>
	);
};

export default Cursor;
