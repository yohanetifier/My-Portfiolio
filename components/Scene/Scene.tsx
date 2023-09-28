import { isDevEnv } from '../../lib/constants';
import React, { useEffect, useRef } from 'react';
import { OrbitControls, useHelper, ScrollControls } from '@react-three/drei';
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

	return (
		<>
			{/* isDevEnv && <Perf /> */}
			<ambientLight intensity={intensity} />
			{/* <OrbitControls
				makeDefault
				enableZoom={false}
			/> */}

			{/* <primitive object={model.scene} /> */}
			<ScrollControls>
				<Chess />
			</ScrollControls>
		</>
	);
};

export default Scene;
