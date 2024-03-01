import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './IconLink.module.scss';

interface Props {
	icon: IconDefinition;
	className?: string;
	link: string;
	text?: string;
}

const IconLink = ({ icon, className, link, text }: Props) => {
	return (
		<a
			href={link}
			className={text && `${styles.mainWrapper}`}
		>
			<FontAwesomeIcon
				icon={icon}
				className={`${styles.icon} ${className}`}
			/>
			{text && <p>{text}</p>}
		</a>
	);
};

export default IconLink;
