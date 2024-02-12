import React from 'react';
import Image from 'next/image';
import styles from './WorkCard.module.scss';
import Link from 'next/link';

interface Props {
	imageSrc: string;
	imageAlt: string;
	href: string;
}

const WorkCard = ({ imageSrc, imageAlt, href }: Props) => {
	return (
		<Link
			href={href}
			className={styles.wrapper}
		>
			<Image
				src={imageSrc}
				alt={imageAlt}
				className={styles.img}
				width='500'
				height='600'
			/>
		</Link>
	);
};

export default WorkCard;
