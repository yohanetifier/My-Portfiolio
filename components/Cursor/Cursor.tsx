import React, { useRef, forwardRef, useEffect, useContext } from 'react';
import styles from './Cursor.module.scss';
import { useRouter } from 'next/router';
import { ThemeContext } from '../Context/ThemeContext';

interface Props {
	title?: string;
	isFinished?: boolean;
}

const Cursor = ({ title, isFinished }: Props) => {
	const { menu } = useContext(ThemeContext);
	const cursorRef = useRef(null);
	// useEffect(() => {
	// 	window.addEventListener('mousemove', e => {
	// 		cursorRef.current.style.top = e.clientY + 'px';
	// 		cursorRef.current.style.left = e.clientX + 'px';
	// 	});
	// }, [title]);
	return (
		<h2
			ref={cursorRef}
			className={
				// title ? `${styles.title} ${styles.animateTitle}` : styles.cursor
				isFinished && title
					? `${styles.cursor} ${styles.animatedCursor}`
					: styles.cursor
				// styles.cursor
			}
		>
			<span
				className={
					isFinished && title
						? `${styles.test} ${styles.animatedTest}`
						: styles.test
				}
			>
				{title}
			</span>
		</h2>
	);
};
Cursor.displayName = 'Cursor';

export default Cursor;
