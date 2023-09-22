import React, { useRef } from 'react';
import { useGLTF, TransformControls } from '@react-three/drei';

type Props = {};

const Rook = (props: Props) => {
  const { nodes, materials } = useGLTF('./checkboard.glb');
  const rookRef = useRef();
  return (
    <>
      <TransformControls object={rookRef} />
      <mesh
        ref={rookRef}
        castShadow
        receiveShadow
        geometry={nodes.rook.geometry}
        material={nodes.rook.material}
        position={[0.02, 0.25, -4.82]}
        scale={0.64}
      />
    </>
  );
};

export default Rook;
