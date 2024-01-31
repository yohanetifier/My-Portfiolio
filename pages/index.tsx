import { isDevEnv } from '../lib/constants';
import styles from '../styles/index.module.scss';
import Introduction from '../components/Introduction/Introduction';
import { useContext, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from '../components/Scene/Scene';
import { Leva } from 'leva';
import { ScrollControls } from '@react-three/drei';
import { ThemeContext } from '../components/Context/ThemeContext';

interface Images {
	src: string;
	alt: string;
}

export default function Index({ introduction }) {
	const { isClosed } = useContext(ThemeContext);
	const [animationSecondComplete, setAnimationSecondComplete] =
		useState<boolean>(false);
	const words: String[] = ['H', 'E', 'L', 'L', 'O'];
	const bannerPhrase: String[] = ["LET'S BUILD", 'THE SITE', 'OF THE FUTURE'];
	const images: Images[] = [
		{
			src: '',
			alt: '',
		},
		{
			src: '',
			alt: '',
		},
		{
			src: '',
			alt: '',
		},
		{
			src: '',
			alt: '',
		},
		{
			src: '',
			alt: '',
		},
	];

	let showMenu = styles.showMenu;
	let showCanvas = styles.hideMenu;
	let finalClass;
	let value = useRef(null);
	useEffect(() => {
		value.current = localStorage.getItem('playOnce');
		console.log(value.current);
	}, [value]);
	return (
		<div className={styles.wrapper}>
			{!value ? (
				<Introduction
					words={words}
					images={images}
					setAnimationSecondComplete={setAnimationSecondComplete}
					counter={counter}
				/>
			) : (
				<>
					{isDevEnv && <Leva collapsed />}
					<Canvas camera={{ position: [40, 15, 30], fov: 50 }}>
						<ScrollControls>
							<Scene bannerPhrase={bannerPhrase} />
						</ScrollControls>
					</Canvas>
				</>
			)}
		</div>
	);
}
