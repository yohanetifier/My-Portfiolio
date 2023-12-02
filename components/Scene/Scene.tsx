import { isDevEnv } from '../../lib/constants';
import React, { useEffect, useRef } from 'react';
import {
	OrbitControls,
	useHelper,
	ScrollControls,
	Scroll,
	Text3D,
} from '@react-three/drei';
import Chess from '../Chess/Chess';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';
import { useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';
import BannerPhrase from '../BannerPhrase/BannerPhrase';

type Props = {
	bannerPhrase: String[];
};

const Scene = ({ bannerPhrase }: Props) => {
	// const bannerPhrase = ["LET'S BUILD", 'THE SITE', 'OF THE FUTURE'];
	const { intensity } = useControls('light', {
		intensity: {
			value: 0,
			step: 1,
		},
	});

	const { cameraPosition, cameraLookAt, cameraFov, cameraRotation } =
		useControls('camera', {
			cameraPosition: {
				value: { x: 40, y: 15, z: 30 },
				step: 1,
			},
			cameraLookAt: {
				value: { x: 0, y: 0, z: 0 },
				step: 1,
			},
			cameraFov: {
				value: 50,
				step: 1,
			},
			cameraRotation: {
				value: { x: -0.46, y: 0.87, z: 0.36 },
				step: 0.1,
			},
		});

	const moveCameraPosition =
		cameraPosition.x !== 40 ||
		cameraPosition.y !== 15 ||
		cameraPosition.z !== 30;

	useFrame(state => {
		// const { camera } = state;
		// camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
		// camera.lookAt(cameraLookAt.x, cameraLookAt.y, cameraLookAt.z);
		// camera.fov = cameraFov;
		// camera.rotation.x = cameraRotation.x;
		// camera.rotation.y = cameraRotation.y;
		// camera.rotation.z = cameraRotation.z;
		// camera.updateProjectionMatrix();
	});

	const { camera } = useThree();
	const cameraRef = useRef();
	cameraRef.current = camera;
	isDevEnv && useHelper(cameraRef, THREE.CameraHelper, 'red');

	return (
		<>
			<Chess ref={cameraRef} />
		</>
	);
};

export default Scene;
