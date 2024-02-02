import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './IconLink.module.scss';

interface Props {
	icon: IconDefinition;
	className?: string;
	link: string;
}

const IconLink = ({ icon, className, link }: Props) => {
	return (
		<a href={link}>
			<FontAwesomeIcon
				icon={icon}
				className={`${styles.icon} ${className}`}
			/>
		</a>
	);
};

export default IconLink;
