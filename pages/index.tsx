import { isDevEnv } from '../lib/constants';
import styles from '../styles/index.module.scss';
import Introduction from '../components/Introduction/Introduction';
import { useContext, useState } from 'react';
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
	// useEffect(() => {
	// 	!isClosed ? (finalClass = showMenu) : (finalClass = showCanvas);
	// }, [isClosed]);

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
					{/* <ThemeContextProvider> */}
					{/* <PageTransition /> */}
					{/* <Header /> */}
					{/* <Menu /> */}
					<Canvas camera={{ position: [40, 15, 30], fov: 50 }}>
						<ScrollControls>
							<Scene bannerPhrase={bannerPhrase} />
						</ScrollControls>
					</Canvas>
					{/* </PageTransition> */}
					{/* </ThemeContextProvider> */}
				</>
			)}
		</div>
		// </StrictMode>
	);
}

// export const getStaticProps: GetStaticProps = async () => {
// 	const introduction = await getHomePage();
// 	return {
// 		props: { introduction },
// 		revalidate: 10,
// 	};
// };
