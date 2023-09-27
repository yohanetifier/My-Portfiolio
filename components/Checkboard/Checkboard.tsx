import React, { useEffect, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

type Props = {};

const Checkboard = (props: Props) => {
	const { nodes, materials } = useGLTF('./queen-and-checkboard-test4.glb');

	const boardSize = 8;
	const tileSize = 3;
	const chessboardArray = [];

	for (let x = 0; x < boardSize; x++) {
		for (let y = 0; y < boardSize; y++) {
			for (let z = 0; z < boardSize; z++) {
				const isEven = (x + y) % 2 === 0;
				const color = isEven ? 'black' : 'white';
				chessboardArray.push(
					<mesh
						// key={`${x}-${y}`}
						position={[x * tileSize, 0, y * tileSize]}
					>
						<boxGeometry args={[tileSize, 0.5, tileSize]} />
						<meshStandardMaterial color={color} />
					</mesh>,
				);
			}
		}
	}

	return <group>{chessboardArray}</group>;

	// const checkboardRef = useRef(null);
	// const { nodes, materials } = useGLTF('./queen-and-checkboard-test4.glb');
	// const texture = useTexture('./lastbaked.jpg');
	// // texture.flipY = false;

	// return (
	// 	<group
	// 		position={[-9.14, 0, 3.88]}
	// 		rotation={[0, 1.56, 0]}
	// 	>
	// 		<mesh
	// 			castShadow
	// 			receiveShadow
	// 			geometry={nodes.Cube003.geometry}
	// 			// material={texture}
	// 			// map={materials.Checker}
	// 		>
	// 			<meshBasicMaterial
	// 				map={generateChessboardTexture()}
	// 				// map-flipY={false}
	// 			/>
	// 		</mesh>
	// 		<mesh
	// 			castShadow
	// 			receiveShadow
	// 			geometry={nodes.Cube003_1.geometry}
	// 			material={materials.Material}
	// 		/>
	// 	</group>
	// );
};

export default Checkboard;
