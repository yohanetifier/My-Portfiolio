import React from "react";
import { useGLTF } from "@react-three/drei";

type Props = {};

const Checkboard = (props: Props) => {
  const { nodes, materials } = useGLTF("./checkboard.glb");
  return (
    <group position={[-9.14, 0, 3.88]} rotation={[0, 1.56, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Checker}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        material={materials.Material}
      />
    </group>
  );
};

export default Checkboard;
