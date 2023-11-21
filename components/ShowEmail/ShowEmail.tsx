import React from 'react';
import styles from './ShowEmail.module.scss';

interface Props {
	className: string;
	show: boolean;
}

const ShowEmail = ({ show, className }: Props) => {
	return (
		<div className={`${styles.mainWrapper} ${className}`}>
			<div className={styles.email}>yohan.etifier@gmail.com</div>
			<div
				className={
					show
						? `${styles.fixWrapper} ${styles.slidingWrapper}`
						: styles.fixWrapper
				}
			></div>
		</div>
	);
};

export default ShowEmail;
