import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Avatar } from '../components/Avatar/Avatar';
import { Float, OrbitControls, Text3D } from '@react-three/drei';

interface Props {}

const about = () => {
	const props = {
		font: '/fonts/helvetiker_regular.typeface.json',
		size: 0.5,
	};
	return (
		<section>
			<Canvas>
				<OrbitControls />
				<ambientLight />
				<Avatar />
				{/* <Float> */}
				<Text3D
					// font='/fonts/helvetiker_regular.typeface.json'
					position={[1, 1, -5]}
					// size={0.5}
					{...props}
				>
					React
				</Text3D>
				{/* </Float> */}
				{/* <Float> */}
				<Text3D
					// font='/fonts/helvetiker_regular.typeface.json'
					position={[-5, 1, -3]}
					// size={0.5}
					{...props}
				>
					Mongo
				</Text3D>
				{/* </Float> */}
				<Text3D
					// font='/fonts/helvetiker_regular.typeface.json'
					position={[-1, -2, 1]}
					// size={0.5}
					{...props}
				>
					NodeJs
				</Text3D>
				<Text3D
					position={[3, 1, -2]}
					{...props}
				>
					ExpressJS
				</Text3D>
				<Text3D
					position={[-4, -1, 1]}
					{...props}
				>
					Docker
				</Text3D>
				<Text3D
					position={[-6, 3, -1]}
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
			</Canvas>
		</section>
	);
};

export default about;
