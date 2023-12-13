import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Avatar } from '../components/Avatar/Avatar';
import { Float, OrbitControls, Text3D } from '@react-three/drei';

interface Props {}

const about = (props: Props) => {
	return (
		<section>
			<Canvas>
				<OrbitControls />
				<ambientLight />
				<Avatar />
				{/* <Float> */}
				<Text3D
					font='/fonts/helvetiker_regular.typeface.json'
					position={[1, 1, -5]}
					size={0.5}
				>
					React
				</Text3D>
				{/* </Float> */}
				{/* <Float> */}
				<Text3D
					font='/fonts/helvetiker_regular.typeface.json'
					position={[-5, 1, -2]}
					size={0.5}
				>
					Mongo
				</Text3D>
				{/* </Float> */}
				<Text3D
					font='/fonts/helvetiker_regular.typeface.json'
					position={[-1, -2, 1]}
					size={0.5}
				>
					NodeJs
				</Text3D>
				<Text3D
					font='/fonts/helvetiker_regular.typeface.json'
					position={[2, 1, -1]}
					size={0.5}
				>
					ExpressJS
				</Text3D>
				<Text3D
					font='/fonts/helvetiker_regular.typeface.json'
					position={[-4, -1, 1]}
					size={0.5}
				>
					Docker
				</Text3D>
				<Text3D
					font='/fonts/helvetiker_regular.typeface.json'
					position={[-6, 3, -1]}
					size={0.5}
				>
					Typescript
				</Text3D>
				<Text3D
					font='/fonts/helvetiker_regular.typeface.json'
					position={[4, -1, -1]}
					size={0.5}
				>
					NextJs
				</Text3D>
				<Text3D
					font='/fonts/helvetiker_regular.typeface.json'
					position={[4, 2, 1]}
					size={0.5}
				>
					Git
				</Text3D>
				<Text3D
					font='/fonts/helvetiker_regular.typeface.json'
					position={[0, 2, 1]}
					size={0.5}
				>
					CI/CD
				</Text3D>
			</Canvas>
		</section>
	);
};

export default about;
