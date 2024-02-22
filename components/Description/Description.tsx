import React from 'react';
import styles from './Description.module.scss';

interface Props {
	name: string;
	subtitle: string;
}

const Description = ({ name, subtitle }: Props) => {
	return (
		<div className={styles.personInfo}>
			<h2 className={styles.font}> {name}</h2>
			<h2 className={styles.font}> {subtitle}</h2>
		</div>
	);
};

export default Description;
