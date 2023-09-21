import React from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

type Props = {};

const Queen = (props: Props) => {
  const { nodes, materials } = useGLTF("./checkboard.glb");
  return (
    <motion.group
      initial={{ z: 5.18 }}
      animate={{ z: 2 }}
      transition={{ duration: 2 }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Queen_1.geometry}
        material={nodes.Queen_1.material}
        position={[-0.44, 0.18, 5.18]}
      />
    </motion.group>
  );
};

export default Queen;
