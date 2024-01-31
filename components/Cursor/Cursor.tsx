import React, { useEffect, useRef, forwardRef } from 'react';
import styles from './Cursor.module.scss';
import gsap from 'gsap';

interface Props {
	title: string;
	isFinished: boolean;
}

const Cursor = forwardRef(
	(
		{ title, isFinished }: Props,
		ref: React.ForwardedRef<HTMLHeadingElement>,
	) => {
		const cursorRef = useRef(null);
		return (
			<h2
				ref={ref}
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
	},
);

Cursor.displayName = 'Cursor';

export default Cursor;
