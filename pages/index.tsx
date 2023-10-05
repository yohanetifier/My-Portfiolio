import { isDevEnv } from '../lib/constants';
import { GetStaticProps } from 'next';
import { getHomePage } from '../lib/api';
import styles from '../styles/index.module.scss';
import Introduction from '../components/Introduction/Introduction';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from '../components/Scene/Scene';
import { Leva } from 'leva';
import Header from '../components/Header/Header';
import { ScrollControls } from '@react-three/drei';

export default function Index({ introduction }) {
	const [animationSecondComplete, setAnimationSecondComplete] = useState<boolean>(false);
	const words = ['H', 'E', 'L', 'L', 'O'];
	const bannerPhrase = ["LET'S BUILD", 'THE SITE', 'OF THE FUTURE'];
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

	return (
		// <StrictMode>
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
					<Canvas camera={{ position: [40, 15, 30], fov: 50 }}>
						<ScrollControls>
							<Scene bannerPhrase={bannerPhrase} />
						</ScrollControls>
					</Canvas>
				</>
			)}
		</div>
		// </StrictMode>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const introduction = await getHomePage();
	return {
		props: { introduction },
		revalidate: 10,
	};
};
