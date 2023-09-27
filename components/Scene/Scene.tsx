import { isDevEnv } from '../../lib/constants';
import React, { useEffect, useRef } from 'react';
import { OrbitControls, useHelper } from '@react-three/drei';
import Chess from '../Chess/Chess';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';
import { useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';

type Props = {
	cameraPositionX: number;
	cameraPositionY: number;
	cameraPositionZ: number;
};

const Scene = ({ cameraPositionX, cameraPositionY, cameraPositionZ }: Props) => {
	const { intensity } = useControls('Light', {
		intensity: {
			value: 1,
			step: 1,
		},
	});

	const { camera } = useThree();
	useEffect(() => {
		camera.position.set(cameraPositionX, cameraPositionY, cameraPositionZ);
		camera.lookAt(cameraPositionX, cameraPositionY, cameraPositionZ);
	}, [cameraPositionX, cameraPositionY, cameraPositionZ]);

	return (
		<>
			{/* isDevEnv && <Perf /> */}
			{/* <OrbitControls makeDefault /> */}
			<ambientLight intensity={intensity} />

			{/* <primitive object={model.scene} /> */}
			<Chess />
		</>
	);
};

export default Scene;
