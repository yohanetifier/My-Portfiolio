import React, { useRef } from "react";
import {
  useGLTF,
  TransformControls,
  PivotControls,
  Html,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";

type Props = {};

const Queen = (props: Props) => {
  const { nodes, materials } = useGLTF("./checkboard.glb");
  const queenRef = useRef();
  return (
    <>
      {/* <TransformControls object={queenRef} /> */}
      <PivotControls anchor={[0, 1, 0]} depthTest={false}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Queen_1.geometry}
          material={nodes.Queen_1.material}
          position={[-0.44, 0.18, 5.18]}
          ref={queenRef}
        />
      </PivotControls>
    </>
  );
};

export default Queen;
