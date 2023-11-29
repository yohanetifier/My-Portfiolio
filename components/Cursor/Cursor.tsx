import React, { useEffect, useRef, forwardRef } from 'react';
import styles from './Cursor.module.scss';
import gsap from 'gsap';

interface Props {
	title: string;
}

const Cursor = forwardRef(
	({ title }: Props, ref: React.ForwardedRef<HTMLHeadingElement>) => {
		const cursorRef = useRef(null);
		return (
			<h2
				ref={ref}
				className={
					// title ? `${styles.title} ${styles.animateTitle}` : styles.cursor
					title ? `${styles.cursor} ${styles.animatedCursor}` : styles.cursor
					// styles.cursor
				}
			>
				<span
					className={
						title ? `${styles.test} ${styles.animatedTest}` : styles.test
					}
				>
					{title}
				</span>
			</h2>
		);
	},
);

Cursor.displayName = 'Cursor';

export default Cursor;
