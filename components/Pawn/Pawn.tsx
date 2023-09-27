import React, { useRef } from 'react';
import { useGLTF, TransformControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

type Props = {
	positionX: number;
	positionY: number;
	positionZ: number;
};

const Pawn = ({ positionX, positionY, positionZ }: Props) => {
	const { nodes, materials } = useGLTF('./checkboard.glb');
	const pawnRef = useRef();
	return (
		<>
			<TransformControls object={pawnRef} />
			<mesh
				ref={pawnRef}
				castShadow
				receiveShadow
				geometry={nodes.Pawn.geometry}
				material={materials['pawn white']}
				position={[positionX, positionY, positionZ]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
		</>
	);
};

export default Pawn;
