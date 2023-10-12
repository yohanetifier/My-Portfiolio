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
import { ThemeContextProvider } from '../components/Context/ThemeContext/ThemeContext';

interface Images {
	src: string;
	alt: string;
}

export default function Index ( { introduction } ) {
	const [ animationSecondComplete, setAnimationSecondComplete ] = useState<boolean>( false );
	const words: String[] = [ 'H', 'E', 'L', 'L', 'O' ];
	const bannerPhrase: String[] = [ "LET'S BUILD", 'THE SITE', 'OF THE FUTURE' ];
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

	return (
		// <StrictMode>
		<div className={ styles.wrapper }>
			{ !animationSecondComplete ? (
				<Introduction
					words={ words }
					images={ images }
					setAnimationSecondComplete={ setAnimationSecondComplete }
				/>
			) : (
				<>
					{ isDevEnv && <Leva collapsed /> }
					<ThemeContextProvider>
						<Header />
						<Canvas camera={ { position: [ 40, 15, 30 ], fov: 50 } }>
							<ScrollControls>
								<Scene bannerPhrase={ bannerPhrase } />
							</ScrollControls>
						</Canvas>
					</ThemeContextProvider>
				</>
			) }
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
