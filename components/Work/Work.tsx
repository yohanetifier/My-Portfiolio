import React, { useRef, useState } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface Props {
	activeTexture: number;
	setArrayLengthOfTexture: (arg: number) => void;
	hasClickedOn: string;
	setHasClickedOn: (arg: string) => void;
}

const Work = ({
	activeTexture,
	setArrayLengthOfTexture,
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
		countClick === 0 && setCountClick(countClick + 1);
		ref.current.uniforms.uTime.value = 0.0;
		setHasClickedOn('');
	};

	// Animate Texture
	const animateTexture = () => {
		gsap.to(ref.current.uniforms.uTime, {
			value: 1,
			duration: 1,
			onComplete: () => {
				resetState();
			},
		});
	};

	useFrame(() => {
		if (hasClickedOn === 'next') {
			ref.current.uniforms.currentImage.value =
				arrayOfTexture[activeTexture - 1];
			ref.current.uniforms.nextImage.value = arrayOfTexture[activeTexture];
			animateTexture();
		} else if (hasClickedOn === 'prev') {
			ref.current.uniforms.nextImage.value = arrayOfTexture[activeTexture];
			animateTexture();
		} else {
			ref.current.uniforms.currentImage.value = arrayOfTexture[activeTexture];
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
        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform float uTime;
        vec4 _currentImage;
        vec4 _nextImage;

        void main () {
            vec4 originTexture  = texture2D(currentImage, vUv);
            vec4 originNextTexture = texture2D(nextImage, vUv);
            _currentImage = texture2D(currentImage, vec2(vUv.x, vUv.y + uTime * (originNextTexture * 0.3)));
            _nextImage = texture2D(nextImage, vec2(vUv.x, vUv.y + (1.0 - uTime) * (originTexture * 0.3)));
            gl_FragColor = vec4(mix(_currentImage  , _nextImage , uTime ));
            //gl_FragColor = vec4(mix(testOriginTexture.xyz , testOriginTexture2.xyz, uTime), 1.0);
            //gl_FragColor = vec4(mix(originTexture.xyz, originNextTexture.xyz, uTime ), 1.0);
        }
        
        `;

	const vertexShader = `
        varying vec2 vUv;
        uniform float uTime; 

        void main () {
            vUv = uv;
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
