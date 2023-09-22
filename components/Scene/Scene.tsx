import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import Chess from "../Chess/Chess";

type Props = {};

const Scene = (props: Props) => {
  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight position={[0, 0, 0]} />
      {/* <primitive object={model.scene} /> */}
      <Chess />
    </>
  );
};

export default Scene;
