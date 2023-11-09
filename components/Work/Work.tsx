import React, { useEffect, useRef } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, useMotionValue, animate } from 'framer-motion';
import { motion } from 'framer-motion-3d';
interface Props {
	activeTexture: number;
	clickTest: boolean;
}

const Work = ({ activeTexture, clickTest }: Props) => {
	const ref = useRef<THREE.ShaderMaterial>(null);
	const { gl, size, camera } = useThree();
	const urlTexture = './the-buyer.png';
	const theBuyerImage = useTexture(urlTexture);
	const tolefiTexture = useTexture('/tolefi.png');
	let uTime = 0.0;
	let testUdpateValue = useMotionValue(0.0);
	let arrayOfTexture = [
		theBuyerImage,
		tolefiTexture,
		theBuyerImage,
		tolefiTexture,
	];

	// Set the base Texture
	// let currentImage = arrayOfTexture[activeTexture];
	// let nextImage = arrayOfTexture[activeTexture - 1];
	let currentImage;
	let nextImage;
	useFrame(({ clock }) => {
		if (clickTest) {
			animate(testUdpateValue, 1.0, { duration: 0.1 });
			ref.current.uniforms.uTime.value = testUdpateValue.get();
		}
		ref.current.uniforms.currentImage.value = arrayOfTexture[activeTexture];
		ref.current.uniforms.nextImage.value = arrayOfTexture[activeTexture + 1];
		ref.current.uniforms.currentImage.needsUpdate = true;
	});

	const uniforms = {
		testUdpateValue,
		currentImage,
		nextImage,
		uTime,
		theBuyerImage,
		tolefiTexture,
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
            vec4 originTexture  = texture(currentImage, vUv);
            vec4 originNextTexture = texture(nextImage, vUv);
            vec4 testOriginTexture = texture(theBuyerImage, vUv);
            vec4 testOriginTexture2 = texture(tolefiTexture, vUv);
            _currentImage = texture(currentImage, vec2(vUv.x, vUv.y + abs(sin(uTime)) * (originTexture * 0.5) ));
            _nextImage = texture(nextImage, vec2(vUv.x, vUv.y * (originNextTexture * 0.5)));
            //gl_FragColor = vec4(mix(_currentImage.xyz  , _nextImage.xyz , testUdpateValue ), 1.0);
            gl_FragColor = vec4(mix(testOriginTexture.xyz , testOriginTexture2.xyz, uTime), 1.0);
            //gl_FragColor = vec4(originTexture.xyz, 1.0);
        }
        
        `;

	const vertexShader = `
        varying vec2 vUv;
        uniform float uTime; 
        varying vec3 vPosition;

        void main () {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, position.z , 1.);
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
