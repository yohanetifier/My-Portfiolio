import { isDevEnv } from '../lib/constants';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPostsForHome, getHomePage } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import AnimatedWords from '../components/AnimatedWords/AnimatedWords';
import styles from '../styles/index.module.scss';
import Introduction from '../components/Introduction/Introduction';
import { useState, StrictMode, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import Scene from '../components/Scene/Scene';
import { Leva, useControls } from 'leva';
import Header from '../components/Header/Header';
import { useScroll } from 'framer-motion';

export default function Index({ introduction }) {
	const [animationSecondComplete, setAnimationSecondComplete] = useState<boolean>(false);
	const words = ['H', 'E', 'L', 'L', 'O'];
	const images = [
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

	const { cameraSettings } = useControls('camera', {
		cameraSettings: {
			value: { x: 34, y: 100, z: 2 },
			step: 1,
		},
	});

	return (
		<StrictMode>
			<div className={styles.wrapper}>
				{!animationSecondComplete ? (
					<Introduction
						words={words}
						images={images}
						setAnimationSecondComplete={setAnimationSecondComplete}
					/>
				) : (
					<>
						{isDevEnv && <Leva collapsed />}
						<Header />
						<div className={styles.title}>
							<h2>LET'S BUILD</h2>
							<h2>THE SITE OF THE FUTURE </h2>
						</div>

						<Canvas camera={{ position: [34, 100, 2] }}>
							<Scene
								cameraPositionX={cameraSettings.x}
								cameraPositionY={cameraSettings.y}
								cameraPositionZ={cameraSettings.z}
							/>
						</Canvas>
					</>
				)}
			</div>
		</StrictMode>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const introduction = await getHomePage();
	return {
		props: { introduction },
		revalidate: 10,
	};
};
function usecControls(arg0: string, arg1: {}): { camera: any } {
	throw new Error('Function not implemented.');
}
