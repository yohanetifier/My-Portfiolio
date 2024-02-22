import React, { useRef } from 'react';
import Chess from '../Chess/Chess';
import { useThree } from '@react-three/fiber';

const Scene = () => {
	const { camera } = useThree();
	const cameraRef = useRef();
	cameraRef.current = camera;

	return (
		<>
			<Chess ref={cameraRef} />
		</>
	);
};

export default Scene;
