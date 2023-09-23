import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

type Props = {};

const Checkboard = (props: Props) => {
	const checkboardRef = useRef(null);
	const { nodes, materials } = useGLTF('./checkboard.glb');
	console.log('materials', materials);

	useEffect(() => {
		console.log('checkboardRef', checkboardRef.current);
	}, []);

	return (
		<group
			position={[-9.14, 0, 3.88]}
			rotation={[0, 1.56, 0]}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube003.geometry}
				// material={materials.Checker}
				map={materials.Checker}
				ref={checkboardRef}
			/>
			{/* <meshStandardMaterial map={materials.Checker} /> */}
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube003_1.geometry}
				material={materials.Material}
			/>
		</group>
	);
};

export default Checkboard;
