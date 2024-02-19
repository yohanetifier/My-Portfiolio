import { Canvas } from '@react-three/fiber';
import React, { useContext, useRef } from 'react';
import { Avatar } from '../components/Avatar/Avatar';
import {
	OrbitControls,
	Text3D,
	ScrollControls,
	Scroll,
} from '@react-three/drei';
import { useControls } from 'leva';
import { ThemeContext } from '../components/Context/ThemeContext';
import Technos from '../components/Technos/Technos';

interface Props {}
let desktopS;
let tabletS;
let mobileS;
let mobileM;
if (typeof window !== 'undefined') {
	desktopS = window.matchMedia('(max-width: 1024px)').matches;
	tabletS = window.matchMedia('(max-width: 912px)').matches;
	mobileM = window.matchMedia('(max-width: 450px)').matches;
	mobileS = window.matchMedia('(max-width: 280px)').matches;
}
const about = () => {
	//Setup the prevPath so that the animation on the home page works fine
	// const { setPrevPath } = useContext(ThemeContext);
	// setPrevPath('about');
	// const textRef = useRef(null);
	// const {
	// 	react,
	// 	mongo,
	// 	nodeJs,
	// 	expressJs,
	// 	docker,
	// 	typescript,
	// 	nextJs,
	// 	git,
	// 	ciCd,
	// 	graphQl,
	// 	threeD,
	// 	r3F,
	// } = useControls('position', {
	// 	react: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : 1,
	// 			y: tabletS ? 2 : 1,
	// 			z: tabletS ? 0 : -5,
	// 		},
	// 	},
	// 	mongo: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : -5,
	// 			y: tabletS ? 0 : 1,
	// 			z: tabletS ? 0 : -3,
	// 		},
	// 	},
	// 	nodeJs: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : -1,
	// 			y: tabletS ? -1 : 2,
	// 			z: tabletS ? 0 : 1,
	// 		},
	// 	},
	// 	expressJs: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : desktopS ? 2 : 3,
	// 			y: tabletS ? -2 : 1,
	// 			z: tabletS ? 0 : 0,
	// 		},
	// 	},
	// 	docker: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : -1,
	// 			y: tabletS ? -3 : -2,
	// 			z: tabletS ? 0 : 1,
	// 		},
	// 	},
	// 	typescript: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : desktopS ? -5 : -8,
	// 			y: tabletS ? -4 : 3,
	// 			z: tabletS ? 0 : -1,
	// 		},
	// 	},
	// 	nextJs: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : desktopS ? -3 : -5,
	// 			y: tabletS ? 1 : -1,
	// 			z: tabletS ? 0 : 1,
	// 		},
	// 	},
	// 	git: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : desktopS ? 2 : 4,
	// 			y: tabletS ? -6 : 2,
	// 			z: tabletS ? 0 : 1,
	// 		},
	// 	},
	// 	ciCd: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : 3,
	// 			y: tabletS ? -7 : -1,
	// 			z: tabletS ? 0 : -1,
	// 		},
	// 	},
	// 	graphQl: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : desktopS ? 2 : 3,
	// 			y: tabletS ? -8 : -2,
	// 			z: tabletS ? 0 : 0.5,
	// 		},
	// 	},
	// 	threeD: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : -0.5,
	// 			y: tabletS ? -9 : -1,
	// 			z: tabletS ? 0 : 0.5,
	// 		},
	// 	},
	// 	r3F: {
	// 		value: {
	// 			x: mobileM ? -1 : tabletS ? -2 : desktopS ? -0.5 : -6.5,
	// 			y: tabletS ? -5 : 0.5,
	// 			z: tabletS ? 0 : 0.5,
	// 		},
	// 	},
	// });

	// const { expressJsR, typescriptR, r3fR, nextJsR, graphqlR, gitR } =
	// 	useControls('rotation', {
	// 		expressJsR: {
	// 			value: {
	// 				x: 0,
	// 				y: -0.5,
	// 				z: 0,
	// 			},
	// 		},
	// 		typescriptR: {
	// 			value: {
	// 				x: 0,
	// 				y: 0.5,
	// 				z: 0,
	// 			},
	// 		},
	// 		r3fR: {
	// 			value: {
	// 				x: 0,
	// 				y: 0.5,
	// 				z: 0,
	// 			},
	// 		},
	// 		nextJsR: {
	// 			value: {
	// 				x: 0,
	// 				y: 0.5,
	// 				z: 0,
	// 			},
	// 		},
	// 		graphqlR: {
	// 			value: {
	// 				x: 0,
	// 				y: -0.5,
	// 				z: 0,
	// 			},
	// 		},
	// 		gitR: {
	// 			value: {
	// 				x: 0,
	// 				y: -0.5,
	// 				z: 0,
	// 			},
	// 		},
	// 	});

	// const props = {
	// 	font: '/fonts/helvetiker_regular.typeface.json',
	// 	size: mobileS ? 0.3 : mobileM ? 0.4 : 0.4,
	// };
	return (
		<section>
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
