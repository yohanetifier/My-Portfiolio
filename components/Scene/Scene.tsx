import { isDevEnv } from '../../lib/constants';
import React, { useEffect, useRef } from 'react';
import { OrbitControls, useHelper } from '@react-three/drei';
import Chess from '../Chess/Chess';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';
import { useControls } from 'leva';

type Props = {};

const Scene = (props: Props) => {
	const { intensity } = useControls('Light', {
		intensity: {
			value: 1,
			step: 1,
		},
	});

	return (
		<>
			{/* isDevEnv && <Perf /> */}
			<OrbitControls makeDefault />
			<ambientLight intensity={intensity} />

			{/* <primitive object={model.scene} /> */}
			<Chess />
		</>
	);
};

export default Scene;
