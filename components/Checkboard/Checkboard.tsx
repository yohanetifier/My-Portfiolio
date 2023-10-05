import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useCursor, CycleRaycast, Html } from '@react-three/drei';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';
import styles from './Checkboard.module.scss';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';
import { animate, useMotionValue } from 'framer-motion';

type Props = {
	scrollingDown: boolean;
};

const Checkboard = ({ scrollingDown }: Props) => {
	const { position, rotation } = useControls('chessboard', {
		position: {
			value: {
				x: 0,
				y: 3,
				z: -12,
			},
			step: 1,
		},
		rotation: {
			value: { x: 0, y: -0.63, z: 0 },
			step: 0.01,
		},
	});

	const meshRef = useRef();
	const groupArray = useRef();
	const newRef = useRef();
	const actionCase = useRef();
	const { nodes, materials } = useGLTF('./queen-and-checkboard-test4.glb');
	const boardSize = 8;
	const tileSize = 3;
	const chessboardArray = [];
	const [color, setColor] = useState<string>('white');
	const [hovered, set] = useState<boolean>(false);

	useCursor(hovered);
	for (let x = 0; x < boardSize; x++) {
		for (let y = 0; y < boardSize; y++) {
			for (let z = 0; z < boardSize; z++) {
				const isEven = (x + y) % 2 === 0;
				const color = isEven ? 'black' : 'white';

				chessboardArray.push(
					(x === 5 && y === 2) || (x === 4 && y === 3) || (x === 4 && y === 5) ? (
						<mesh
							// key={`${x}-${y}`}
							ref={actionCase}
							position={[x * tileSize, 0, y * tileSize]}
							onClick={e => {
								e.stopPropagation();
							}}
							onPointerOver={() => set(true)}
							onPointerOut={() => {
								set(false);
							}}
						>
							<boxGeometry args={[tileSize, 0.5, tileSize]} />
							<meshStandardMaterial
								transparent
								color={scrollingDown ? 'purple' : 'white'}
							/>
						</mesh>
					) : (
						<mesh
							// key={`${x}-${y}`}
							ref={meshRef}
							position={[x * tileSize, 0, y * tileSize]}
						>
							<boxGeometry args={[tileSize, 0.5, tileSize]} />
							<meshStandardMaterial
								transparent
								color={color}
							/>
						</mesh>
					),
				);
			}
		}
	}

	const generateFlashingColor = () => {
		const currentTime = Date.now();
		const frequency = 0.01; // Vitesse du clignotement
		const amplitude = 0.5; // Amplitude du clignotement
		const flicker = Math.sin(currentTime);

		const baseColor = new THREE.Color('purple');
		baseColor.addScalar(flicker); // Ajoutez le clignotement à la couleur de base

		return baseColor;
	};

	useFrame(({ clock }) => {
		// const currentTime = Date.now();
		// const frequency = 0.01; // Vitesse du clignotement
		// const amplitude = 0.5; // Amplitude du clignotement
		// const flicker = Math.sin(currentTime * frequency) * amplitude;

		// console.log('flicker', flicker);

		const generateFlashingLights = () => {
			const time = clock.elapsedTime;
			const flashLights = Math.sin(time * 2);
			const baseColor = new THREE.Color(0.5, 0.5, 0.5);
			// baseColor.addScalar(flashLights);

			return baseColor;
		};

		actionCase.current.material.color = generateFlashingLights();
	});

	// useEffect(() => {
	// 	console.log('scrollingDown', scrollingDown);
	// }, [scrollingDown]);
	// useFrame(({ clock }) => {
	// 	colorPurpleRgba = new THREE.Color(0.5, 0, 0.5, Math.abs(Math.sin(clock.elapsedTime)));

	// 	setColor(new THREE.Color(0.5, 0, 1, Math.abs(Math.sin(clock.elapsedTime))));
	// });

	// useEffect(() => {
	// 	let allCase = [];
	// 	groupArray.current.traverse(child => allCase.push(child));

	// 	let rowFourth = allCase.filter(e => e.position.x === 12);
	// 	let rowThird = allCase.filter(e => e.position.x === 15);
	// 	let columnC = allCase.filter(e => e.position.z === 15);
	// 	let columnF = allCase.filter(e => e.position.z === 6);
	// 	let columnE = allCase.filter(e => e.position.z === 9);

	// 	let xCase = allCase.filter(e => e.position.x === 15);
	// 	let pawnCase = allCase.filter(e => e.position.z === 9 && e.position.x === 12);
	// 	let knightCase = allCase.filter(e => e.position.z === 6 && e.position.x === 15);
	// 	let bishopCase = allCase.filter(e => e.position.z === 15 && e.position.x === 12);

	// 	for (let i = 0; i < pawnCase.length; i++) {
	// 		pawnCase[i].material.color = scrollingDown ? color : new THREE.Color('white');
	// 		// pawnCase[i].material.transparent = true;
	// 		setPawnCase(pawnCase[i]);
	// 		// pawnCase.current = pawnCase[i];
	// 		// pawnCase[i].material.opacity = 1;
	// 		knightCase[i].material.color = scrollingDown ? color : new THREE.Color('white');
	// 		bishopCase[i].material.color = scrollingDown ? color : new THREE.Color('white');
	// 	}
	// }, [changeColor, scrollingDown]);

	return (
		<>
			<group
				position={[position.x, position.y, position.z]}
				rotation={[rotation.x, rotation.y, rotation.z]}
				ref={groupArray}
			>
				{chessboardArray}
			</group>
			{/* <CycleRaycast
				preventDefault={true} // Call event.preventDefault() (default: true)
				scroll={true} // Wheel events (default: true)
				keyCode={9} // Keyboard events (default: 9 [Tab])
				onChanged={(objects, cycle) => console.log(objects, cycle)} // Optional onChanged event
				// onClick={() => setChangeColor('pink')}
			/> */}
		</>
	);

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
