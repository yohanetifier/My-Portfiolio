import React, { useRef } from "react";
import { useGLTF, TransformControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";

type Props = {};

const Pawn = (props: Props) => {
  const { nodes, materials } = useGLTF("./checkboard.glb");
  const pawnRef = useRef();
  return (
    <>
      <TransformControls object={pawnRef} />
      <mesh
        ref={pawnRef}
        castShadow
        receiveShadow
        geometry={nodes.Pawn.geometry}
        material={materials["pawn white"]}
        position={[-3.28, 0.42, 4.93]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </>
  );
};

export default Pawn;
