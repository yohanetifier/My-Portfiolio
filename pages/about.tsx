import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Avatar } from '../components/Avatar/Avatar';
import { ScrollControls, Scroll } from '@react-three/drei';
import Technos from '../components/Technos/Technos';
import Head from 'next/head';

let desktopS;

if (typeof window !== 'undefined') {
	desktopS = window.matchMedia('(max-width: 1024px)').matches;
}

const about = () => {
	//Setup the prevPath so that the animation on the home page works fine
	// const { setPrevPath } = useContext(ThemeContext);
	// setPrevPath('about');
	return (
		<section>
			<Head>
				<title>About - Yohan Etifier</title>
				<meta
					name='description'
					content='Yohan Etifier is a freelance creative web developer from Paris'
				/>
			</Head>
			<Canvas>
				{/* {!tabletS && <OrbitControls />} */}
				<ambientLight />
				<Avatar />

				{desktopS ? (
					<ScrollControls
						pages={2}
						damping={1}
					>
						<Scroll>
							<Technos />
						</Scroll>
					</ScrollControls>
				) : (
					<Technos />
				)}
			</Canvas>
		</section>
	);
};

export default about;
