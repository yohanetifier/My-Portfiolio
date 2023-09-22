import React, { useEffect, useRef } from 'react';
import {
  useGLTF,
  TransformControls,
  PivotControls,
  Html,
} from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

type Props = {
  positionX: number;
  positionY: number;
  positionZ: number;
};

const Queen = ({ positionX, positionY, positionZ }: Props) => {
  const { nodes, materials } = useGLTF('./checkboard.glb');
  const queenRef = useRef<THREE.Mesh>();

  return (
    <>
      {/* <TransformControls object={queenRef} /> */}
      <PivotControls anchor={[0, 1, 0]} depthTest={false}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Queen_1.geometry}
          material={nodes.Queen_1.material}
          position={[positionX, positionY, positionZ]}
          ref={queenRef}
        />
      </PivotControls>
    </>
  );
};

export default Queen;
