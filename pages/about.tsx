import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Avatar } from '../components/Avatar/Avatar';
import {
	Float,
	OrbitControls,
	Text3D,
	ScrollControls,
	Scroll,
} from '@react-three/drei';
import { useControls } from 'leva';

interface Props {}
let mobileM;
if (typeof window !== 'undefined') {
	mobileM = window.matchMedia('(max-width: 375px)');
}
const about = () => {
	const { react, mongo, nodeJs, expressJs, docker, typescript } = useControls(
		'position',
		{
			react: {
				value: {
					x: mobileM ? -2 : 1,
					y: 1,
					z: mobileM ? 0 : -5,
				},
			},
			mongo: {
				value: {
					x: mobileM ? -2 : -5,
					y: mobileM ? 0 : 1,
					z: mobileM ? 0 : 3,
				},
			},
			nodeJs: {
				value: {
					x: mobileM ? -2 : -1,
					y: mobileM ? -1 : 2,
					z: mobileM ? 0 : 1,
				},
			},
			expressJs: {
				value: {
					x: mobileM ? -2 : 3,
					y: mobileM ? -2 : 1,
					z: mobileM ? 0 : 2,
				},
			},
			docker: {
				value: {
					x: mobileM ? -2 : -4,
					y: mobileM ? -3 : -1,
					z: mobileM ? 0 : 1,
				},
			},
			typescript: {
				value: {
					x: mobileM ? -2 : -6,
					y: mobileM ? -4 : 3,
					z: mobileM ? 0 : -1,
				},
			},
		},
	);
	const props = {
		font: '/fonts/helvetiker_regular.typeface.json',
		size: 0.5,
	};
	return (
		<section>
			<Canvas>
				{/* <OrbitControls /> */}
				<ambientLight />
				<Avatar />
				{/* <Float> */}
				<ScrollControls>
					<Scroll>
						<Text3D
							// font='/fonts/helvetiker_regular.typeface.json'
							position={[react.x, react.y, react.z]}
							size={0.5}
							{...props}
						>
							React
						</Text3D>
					</Scroll>
					{/* </Float> */}
					{/* <Float> */}
					<Text3D
						// font='/fonts/helvetiker_regular.typeface.json'
						position={[mongo.x, mongo.y, mongo.z]}
						// size={0.5}
						{...props}
					>
						Mongo
					</Text3D>
					{/* </Float> */}
					<Text3D
						// font='/fonts/helvetiker_regular.typeface.json'
						position={[nodeJs.x, nodeJs.y, nodeJs.z]}
						// size={0.5}
						{...props}
					>
						NodeJs
					</Text3D>
					<Text3D
						position={[expressJs.x, expressJs.y, expressJs.z]}
						{...props}
					>
						ExpressJS
					</Text3D>
					<Text3D
						position={[docker.x, docker.y, docker.z]}
						{...props}
					>
						Docker
					</Text3D>
					<Text3D
						position={[typescript.x, typescript.y, typescript.z]}
						{...props}
					>
						Typescript
					</Text3D>
					<Text3D
						position={[4, -1, -1]}
						{...props}
					>
						NextJs
					</Text3D>
					<Text3D
						position={[4, 2, 1]}
						{...props}
					>
						Git
					</Text3D>
					<Text3D
						position={[0, 2, 1]}
						{...props}
					>
						CI/CD
					</Text3D>
					<Text3D
						position={[3, -2, 0.5]}
						{...props}
					>
						GraphQL
					</Text3D>
					<Text3D
						position={[-0.5, -1, 0.5]}
						{...props}
					>
						3D
					</Text3D>
				</ScrollControls>
			</Canvas>
		</section>
	);
};

export default about;
