import React, { useEffect, useRef } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface Props { }


const Work = ( props: Props ) => {

    const ref = useRef<THREE.ShaderMaterial>( null );
    const { gl, size, camera } = useThree();
    // const distanceToGeometry = camera.position.z;
    const canvasWidth = size.width;
    const canvasHeight = size.height;
    const cameraAspect = camera.aspect;
    const cameraFov = camera.fov;

    // useEffect( () => {
    //     ref.current.needUpdate = true;
    //     gl.domElement.addEventListener( 'click', ( e ) => {
    //         console.log( e );
    //         mouseX = e.clientX / window.innerWidth;
    //         mouseY = 1 - ( e.clientY / window.innerHeight );
    //     } );
    // }, [ mouseX, mouseY, ref.current ] );

    // useFrame( () => {
    //     ref.current.uniforms.uMouse.x = mouseX;
    //     ref.current.uniforms.uMouse.y = mouseY;
    // } );

    // gl.domElement.addEventListener( 'mousemove', ( e ) => {
    //     mouseX = e.clientX / window.innerWidth;
    //     mouseY = 1 - ( e.clientY / window.innerHeight );
    // } );

    const urlTexture = './the-buyer.png';
    const theBuyerImage = useTexture( urlTexture );

    const uniforms =
    {
        uTexture: theBuyerImage
    };

    const fragmentShader =
        `
        varying vec2 vUv;
        uniform sampler2D uTexture;
       

        void main () {
            vec4 color = texture2D(uTexture, vUv);
            gl_FragColor = vec4(color.xyz, 1.0);
        }
        
        `;

    const vertexShader =
        `
        varying vec2 vUv;

        void main () {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `;

    const DistortionShaderMaterial = shaderMaterial(
        uniforms,
        vertexShader,
        fragmentShader
    );
    extend( { DistortionShaderMaterial } );

    const distanceToPlane = Math.abs( camera.position.z );
    const cameraDegToRadians = camera.fov * ( Math.PI / 360 );
    // const cameraRadians = THREE.MathUtils.degToRad( camera.fov );
    // console.log( cameraDegToRadians, cameraRadians );
    const halfWidth = distanceToPlane * Math.tan( camera.aspect * cameraDegToRadians );
    const halfHeight = distanceToPlane * Math.tan( cameraDegToRadians );
    return (
        <mesh >
            <planeGeometry args={ [ halfWidth * 1.5, halfHeight * 2, 30, 30 ] } />
            <distortionShaderMaterial ref={ ref } />
        </mesh>
    );
};

export default Work;