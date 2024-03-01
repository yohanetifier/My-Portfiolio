import React from 'react';
import IconLink from '../IconLink/IconLink';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconWithText.module.scss';

interface Props {
	icon: IconDefinition;
	text: string;
	href?: string;
}

const IconWithText = ({ icon, text, href }: Props) => {
	return (
		<a
			href={href}
			className={styles.mainWrapper}
		>
			<FontAwesomeIcon
				className={styles.icon}
				icon={icon}
			/>
			<p className={styles.text}>{text}</p>
		</a>
	);
};

export default IconWithText;
