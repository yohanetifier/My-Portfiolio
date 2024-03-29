/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: brendan wood (https://sketchfab.com/brendanwood872)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-set-a2664ea4fcaa4a64ad077667d9d0c7fb
Title: Chess set
*/

import React, { useContext, useRef, useState } from 'react';
import { Text3D, useCursor, useGLTF } from '@react-three/drei';
import { useControls, Leva } from 'leva';
import { ThemeContext } from '../Context/ThemeContext';

export function ChessSet(props) {
	const [hovered, set]: any = useState();
	useCursor(hovered);
	const { nodes, materials }: any = useGLTF('/chess_set.glb');
	const { setTitle, setLoading } = useContext(ThemeContext);
	const isTouchDevice =
		'ontouchstart' in window || navigator.maxTouchPoints > 0;
	const contactRef = useRef(null);
	const [hover, setHover] = useState({
		contact: false,
		about: false,
		work: false,
	});

	const {
		position,
		rotation,
		contactPosition,
		contactRotation,
		contactScale,
		aboutPosition,
		aboutRotation,
		aboutScale,
		workPosition,
		workRotation,
		workScale,
	} = useControls('Chessset', {
		position: {
			value: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
		rotation: {
			value: {
				x: 0,
				y: 0.94,
				z: 0,
			},
		},
		contactPosition: {
			value: {
				x: -4.3,
				y: 1.3,
				z: 1.0,
			},
			step: 0.01,
		},
		contactRotation: {
			value: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
		contactScale: 0.5,
		aboutPosition: {
			value: {
				x: 0.0,
				y: 1.3,
				z: 1.0,
			},
			step: 0.01,
		},
		aboutRotation: {
			value: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
		aboutScale: 0.5,
		workPosition: {
			value: {
				x: 2.0,
				y: 1.3,
				z: 3.0,
			},
			step: 0.01,
		},
		workRotation: {
			value: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
		workScale: 0.5,
	});

	/* Handle click */
	const handleClick = (e, title) => {
		// e.stopPropagation();
		setLoading(true);
		setTitle(title);
	};

	/* Handle Text Hover  */
	// const handleTextHover = text => {
	// 	setHover(prevState => ({ ...prevState, [text]: true }));
	// };

	/* Handle Text leave */
	// const handleTextLeave = text => {
	// 	setHover(prevState => ({ ...prevState, [text]: false }));
	// };

	return (
		<group
			dispose={null}
			position={[position.x, position.y, position.z]}
			rotation={[rotation.x, rotation.y, rotation.z]}
		>
			<Leva hidden />
			{!isTouchDevice && (
				<>
					<Text3D
						font='/fonts/helvetiker_regular.typeface.json'
						ref={contactRef}
						scale={hover.contact ? 0.9 : contactScale}
						position={[contactPosition.x, contactPosition.y, contactPosition.z]}
						rotation={[contactRotation.x, contactRotation.y, contactRotation.z]}
						onClick={e => handleClick(e, 'contact')}
						onPointerOver={() => set(true)}
						onPointerLeave={() => set(false)}
					>
						Contact
						<meshBasicMaterial color='black' />
					</Text3D>
					<Text3D
						font='/fonts/helvetiker_regular.typeface.json'
						scale={hover.about ? 0.9 : aboutScale}
						position={[aboutPosition.x, aboutPosition.y, aboutPosition.z]}
						rotation={[aboutRotation.x, aboutRotation.y, aboutRotation.z]}
						onClick={e => handleClick(e, 'about')}
						onPointerOver={() => set(true)}
						onPointerLeave={() => set(false)}
						// onPointerOver={e => {
						// 	handleTextHover('about');
						// }}
						// onPointerLeave={() => handleTextLeave('about')}
					>
						About
						<meshBasicMaterial color='black' />
					</Text3D>
					<Text3D
						font='/fonts/helvetiker_regular.typeface.json'
						scale={hover.work ? 0.9 : workScale}
						position={[workPosition.x, workPosition.y, workPosition.z]}
						rotation={[workRotation.x, workRotation.y, workRotation.z]}
						onClick={e => handleClick(e, 'work')}
						onPointerOver={() => set(true)}
						onPointerLeave={() => set(false)}
						// onPointerOver={e => {
						// 	handleTextHover('work');
						// }}
						// onPointerLeave={() => handleTextLeave('work')}
					>
						Work
						<meshBasicMaterial color='black' />
					</Text3D>
				</>
			)}
			<group
				position={[0, 0.01, 0]}
				scale={[7.939, 46.607, 7.939]}
			>
				<mesh
					{...props}
					castShadow
					receiveShadow
					geometry={nodes.Object_6.geometry}
					material={materials['Material.002']}
				/>
				<mesh
					{...props}
					castShadow
					receiveShadow
					geometry={nodes.Object_7.geometry}
					material={materials['Material.003']}
				/>
			</group>
			<group position={[0, -0.417, 0]}>
				<mesh
					{...props}
					castShadow
					receiveShadow
					geometry={nodes.Object_9.geometry}
					material={materials['Material.004']}
				/>
				<mesh
					{...props}
					castShadow
					receiveShadow
					geometry={nodes.Object_10.geometry}
					material={materials['Material.006']}
				/>
				<mesh
					{...props}
					castShadow
					receiveShadow
					geometry={nodes.Object_11.geometry}
					material={materials['Material.007']}
				/>
			</group>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_4.geometry}
				material={materials.Chess_White}
				position={[0.953, 1.034, 5.039]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_13.geometry}
				material={materials['Material.005']}
				position={[6.978, 1.034, -5.147]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_15.geometry}
				material={materials.Chess_White}
				position={[0.952, 2.177, 6.956]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.224}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_17.geometry}
				material={materials.Chess_White}
				position={[-0.994, 1.978, 6.92]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_19.geometry}
				material={materials['Material.005']}
				position={[0.952, 2.177, -6.857]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.224}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_21.geometry}
				material={materials.Chess_White}
				position={[-3.006, 1.483, 6.941]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_23.geometry}
				material={materials.Chess_White}
				position={[-7.07, 1.034, 5.039]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_25.geometry}
				material={materials.Chess_White}
				position={[-5.065, 1.034, 5.039]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_27.geometry}
				material={materials.Chess_White}
				position={[-3.059, 1.034, 5.039]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_29.geometry}
				material={materials.Chess_White}
				position={[-1.053, 1.034, 5.039]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_31.geometry}
				material={materials.Chess_White}
				position={[2.958, 1.034, 5.039]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_33.geometry}
				material={materials.Chess_White}
				position={[4.964, 1.034, 5.039]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_35.geometry}
				material={materials.Chess_White}
				position={[6.97, 1.034, 5.039]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_37.geometry}
				material={materials.Chess_White}
				position={[6.984, 1.1, 6.944]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_39.geometry}
				material={materials.Chess_White}
				position={[-7.075, 1.135, 6.944]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_41.geometry}
				material={materials['Material.005']}
				position={[-1.044, 1.509, -7.028]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_43.geometry}
				material={materials['Material.005']}
				position={[-1.044, 2.826, -7.028]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_45.geometry}
				material={materials['Material.005']}
				position={[-1.044, 3.012, -7.028]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_47.geometry}
				material={materials['Material.005']}
				position={[-1.044, 2.824, -7.028]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_49.geometry}
				material={materials['Material.005']}
				position={[-1.044, 2.824, -7.028]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_51.geometry}
				material={materials['Material.005']}
				position={[-1.044, 3.043, -7.028]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_53.geometry}
				material={materials['Material.005']}
				position={[4.972, 1.034, -5.147]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_55.geometry}
				material={materials['Material.005']}
				position={[2.966, 1.034, -5.147]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_57.geometry}
				material={materials['Material.005']}
				position={[0.96, 1.034, -5.147]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_59.geometry}
				material={materials['Material.005']}
				position={[-1.045, 1.034, -5.147]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_61.geometry}
				material={materials['Material.005']}
				position={[-3.051, 1.034, -5.147]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_63.geometry}
				material={materials['Material.005']}
				position={[-5.057, 1.034, -5.147]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_65.geometry}
				material={materials['Material.005']}
				position={[-7.062, 1.034, -5.147]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_67.geometry}
				material={materials['Material.005']}
				position={[-7.077, 1.1, -7.052]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_69.geometry}
				material={materials['Material.005']}
				position={[6.982, 1.135, -7.052]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_71.geometry}
				material={materials.Chess_White}
				position={[2.917, 1.483, 6.941]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_73.geometry}
				material={materials['Material.005']}
				position={[-3.006, 1.483, -6.988]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_75.geometry}
				material={materials['Material.005']}
				position={[2.917, 1.483, -6.988]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={0.151}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_77.geometry}
				material={materials.Chess_White}
				position={[4.903, 1.504, 7.019]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={1.3}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_79.geometry}
				material={materials.Chess_White}
				position={[-4.903, 1.504, 7.019]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={1.3}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_81.geometry}
				material={materials['Material.005']}
				position={[-4.903, 1.504, -6.997]}
				rotation={[Math.PI / 2, 0, Math.PI]}
				scale={1.3}
			/>
			<mesh
				{...props}
				castShadow
				receiveShadow
				geometry={nodes.Object_83.geometry}
				material={materials['Material.005']}
				position={[-4.903, 1.504, -6.997]}
				rotation={[Math.PI / 2, 0, Math.PI]}
				scale={1.3}
			/>
		</group>
	);
}

useGLTF.preload('/chess_set.glb');
