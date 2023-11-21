import React from 'react';
import Image from 'next/image';
import styles from './Logo.module.scss';

interface Props {
	src: string;
	alt: string;
}

const Logo = ({ src, alt }: Props) => {
	return (
		<div>
			<Image
				src={src}
				alt={alt}
				width={75}
				height={75}
				className={styles.logo}
			/>
		</div>
	);
};

export default Logo;
