import React, { useEffect, useRef, useState } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { animate, MotionValue } from 'framer-motion';
interface Props {
	activeTexture: number;
	setArrayLengthOfTexture: (arg: number) => void;
	testUpdatedValue: MotionValue<number>;
	testUpdatedValueSecond: MotionValue<number>;
	hasClickedOn: string;
	setHasClickedOn: (arg: string) => void;
}

const Work = ({
	activeTexture,
	setArrayLengthOfTexture,
	testUpdatedValue,
	testUpdatedValueSecond,
	hasClickedOn,
	setHasClickedOn,
}: Props) => {
	const ref = useRef<THREE.ShaderMaterial>(null);
	const [countClick, setCountClick] = useState(0);
	const { camera } = useThree();
	const urlTexture = './the-buyer.png';
	const theBuyerImage = useTexture(urlTexture);
	const tolefiTexture = useTexture('/tolefi.png');
	let arrayOfTexture = [
		theBuyerImage,
		tolefiTexture,
		theBuyerImage,
		tolefiTexture,
	];

	// Initialize length of the Array
	setArrayLengthOfTexture(arrayOfTexture.length - 1);

	// Initialize the texture for the current and the next image
	let currentImage;
	let nextImage;

	// Reset State
	const resetState = () => {
		ref.current.uniforms.uTime.value = 0.0;
		ref.current.uniforms.currentImage.value = arrayOfTexture[activeTexture];
		ref.current.uniforms.nextImage.value = arrayOfTexture[activeTexture + 1];
		countClick === 0 && setCountClick(countClick + 1);
		setHasClickedOn('');
		animate(testUpdatedValue, 0.0);
	};

	useFrame(() => {
		if (hasClickedOn === 'next') {
			if (ref.current.uniforms.uTime.value < 1) {
				animate(testUpdatedValue, 1.0, {
					duration: 0.3,
					onComplete: () => {
						resetState();
					},
				});
				ref.current.uniforms.uTime.value += testUpdatedValue.get();
			}
		} else if (hasClickedOn === 'prev') {
			ref.current.uniforms.uTime.value = 1.0;
			if (ref.current.uniforms.uTime.value > 0.0) {
				animate(testUpdatedValueSecond, 0.0, {
					duration: 0.3,
					onComplete: () => {
						console.log('animation completed');
					},
				});
				ref.current.uniforms.uTime.value -= testUpdatedValueSecond.get();
				console.log(ref.current.uniforms.uTime.value);
			}
		} else {
			// Initialize the texture at the beginning
			if (countClick === 0) {
				ref.current.uniforms.currentImage.value = arrayOfTexture[activeTexture];
				ref.current.uniforms.nextImage.value =
					arrayOfTexture[activeTexture + 1];
			}
		}
	});

	const uniforms = {
		currentImage,
		nextImage,
		uTime: 0.0,
	};
	const fragmentShader = `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform float uTime;
        uniform float testUdpateValue;
        uniform sampler2D tolefiTexture;
        uniform sampler2D theBuyerImage;
        vec4 _currentImage;
        vec4 _nextImage;

        void main () {
            vec4 originTexture  = texture2D(currentImage, vUv);
            vec4 originNextTexture = texture2D(nextImage, vUv);
            vec4 testOriginTexture = texture(theBuyerImage, vUv);
            vec4 testOriginTexture2 = texture(tolefiTexture, vUv);
            _currentImage = texture2D(currentImage, vec2(vUv.x, vUv.y + uTime * (originNextTexture * 0.3) ));
            _nextImage = texture2D(nextImage, vec2(vUv.x, vUv.y + (1.0 - uTime) * (originTexture * 0.3)));
            gl_FragColor = vec4(mix(_currentImage  , _nextImage , uTime ));
            //gl_FragColor = vec4(mix(testOriginTexture.xyz , testOriginTexture2.xyz, uTime), 1.0);
            //gl_FragColor = vec4(mix(originTexture.xyz, originNextTexture.xyz, uTime ), 1.0);
        }
        
        `;

	const vertexShader = `
        varying vec2 vUv;
        uniform float uTime; 
        varying vec3 vPosition;

        void main () {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        }
        `;

	const DistortionShaderMaterial = shaderMaterial(
		uniforms,
		vertexShader,
		fragmentShader,
	);
	extend({ DistortionShaderMaterial });

	const distanceToPlane = camera.position.z;
	const degToRad = (camera.fov * Math.PI) / 180;
	const fovY = distanceToPlane * Math.tan(degToRad / 2) * 2;

	return (
		<mesh>
			<planeGeometry args={[fovY * camera.aspect, fovY, 10, 10]} />
			<distortionShaderMaterial ref={ref} />
		</mesh>
	);
};

export default Work;
