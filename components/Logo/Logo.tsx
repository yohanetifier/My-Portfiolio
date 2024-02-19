import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './Logo.module.scss';
import { ThemeContext } from '../Context/ThemeContext';

interface Props {
	src: string;
	alt: string;
}

const Logo = ({ src, alt }: Props) => {
	const handleClick = () => {
		setMenu(false);
		setLoading(true);
	};
	const { setMenu, setLoading } = useContext(ThemeContext);
	return (
		<div onClick={() => handleClick()}>
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
