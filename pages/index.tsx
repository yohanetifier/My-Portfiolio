'use client';
import { isDevEnv } from '../lib/constants';
import styles from '../styles/index.module.scss';
import Introduction from '../components/Introduction/Introduction';
import { useContext, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from '../components/Scene/Scene';
import { Leva } from 'leva';
import { ScrollControls } from '@react-three/drei';
import { ThemeContext } from '../components/Context/ThemeContext';

interface Images {
	src: string;
	alt: string;
}

export default function Index() {
	const { hideIntro, setHideIntro } = useContext(ThemeContext);
	const words: string[] = ['H', 'E', 'L', 'L', 'O'];
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

	useEffect(() => {
		window.addEventListener('unload', () => {
			setHideIntro(false);
		});
	});
	return (
		<div className={styles.wrapper}>
			{!hideIntro ? (
				<Introduction
					words={words}
					images={images}
					setHideIntro={setHideIntro}
				/>
			) : (
				<>
					{isDevEnv && (
						<Leva
							collapsed
							hidden
						/>
					)}
					<Canvas camera={{ position: [40, 15, 30], fov: 50 }}>
						<ScrollControls>
							<Scene />
						</ScrollControls>
					</Canvas>
				</>
			)}
		</div>
	);
}
