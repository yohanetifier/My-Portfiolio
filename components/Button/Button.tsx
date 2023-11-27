import React, { useContext } from 'react';
import styles from './Button.module.scss';
import { ThemeContext } from '../Context/ThemeContext';
interface Props {}

const Button = (props: Props) => {
	const { menu, setMenu } = useContext(ThemeContext);
	return (
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
	);
};

export default Button;
