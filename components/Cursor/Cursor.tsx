import React, { useRef } from 'react';
import styles from './Cursor.module.scss';
interface Props {
	title?: string;
	isFinished?: boolean;
}

const Cursor = ({ title, isFinished }: Props) => {
	const cursorRef = useRef(null);
	return (
		<h2
			ref={cursorRef}
			className={
				isFinished && title
					? `${styles.cursor} ${styles.animatedCursor}`
					: styles.cursor
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
