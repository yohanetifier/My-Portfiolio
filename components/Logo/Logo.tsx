import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './Logo.module.scss';
import { ThemeContext } from '../Context/ThemeContext';

interface Props {
	src: string;
	alt: string;
}

const Logo = ({ src, alt }: Props) => {
	const { setMenu, setLoading, setTitle } = useContext(ThemeContext);
	const handleClick = () => {
		setMenu(false);
		setLoading(true);
		setTitle('/');
	};
	return (
		<div
			data-testid='logo'
			onClick={() => handleClick()}
		>
			<Image
				src={src}
				alt={alt}
				width={100}
				height={300}
				className={styles.logo}
			/>
		</div>
	);
};

export default Logo;
