import React, { useEffect, useRef } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, useMotionValue, animate } from 'framer-motion';
import { motion } from 'framer-motion-3d';

interface Props { }


const Work = ( props: Props ) => {

    const ref = useRef<THREE.ShaderMaterial>( null );
    const { gl, size, camera } = useThree();
    const urlTexture = './the-buyer.png';
    const theBuyerImage = useTexture( urlTexture );
    const urlTexture2 = './tolefi.png';
    const tolefiTexture = useTexture( '/tolefi.png' );
    let uTime = 0.0;
    let uFadeIn = 0.0;

    useFrame( ( { clock } ) => {
        ref.current.uniforms.uTime.value = clock.getElapsedTime();
        // ref.current.uniforms.uFadeIn.value;
    } );

    const uniforms =
    {
        currentImage: theBuyerImage,
        nextImage: tolefiTexture,
        uTime: uTime,
        uFadeIn: uFadeIn,
    };

    const fragmentShader =
        `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform float uTime;
        vec4 _currentImage;
        vec4 _nextImage;

        void main () {
            vec4 originTexture  = texture(currentImage, vUv);
            vec4 originNextTexture = texture(nextImage, vUv);
            _currentImage = texture(currentImage, vec2(vUv.x, vUv.y + abs(sin(uTime)) * (originNextTexture) ));
            
            //gl_FragColor = vec4(mix(_currentImage.xyz  ,originNextTexture.xyz ,0.0 ), 1.0);
            gl_FragColor = vec4(originTexture.xyz, 1.0);
        }
        
        `;

    const vertexShader =
        `
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
        fragmentShader
    );
    extend( { DistortionShaderMaterial } );

    const distanceToPlane = camera.position.z;
    const degToRad = camera.fov * Math.PI / 180;
    const fovY = distanceToPlane * Math.tan( degToRad / 2 ) * 2;

    return (
        <mesh >
            <planeGeometry args={ [ fovY * camera.aspect, fovY, 10, 10 ] } />
            <distortionShaderMaterial ref={ ref } />
        </mesh>
    );
};

export default Work;