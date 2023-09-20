import React, { useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type Props = {};

const Scene = (props: Props) => {
  // const modelRef = useRef();
  // // const gltf = useLoader(GLTFLoader, "./checkboard.glb");
  // const dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath(
  //   "https://www.gstatic.com/draco/versioned/decoders/1.5.5/"
  // );
  // dracoLoader.setDecoderConfig({ type: "js" });

  // const loader = new GLTFLoader();
  // loader.setDRACOLoader(dracoLoader);

  // loader.load("./checkboard.glb", (gltf) => {
  //   const model = gltf.scene;
  //   console.log("model", model);
  //   modelRef.current.add(model);
  // });

  // const checkboard = useLoader(GLTFLoader, "./checkboard.glb", (loader) => {
  //   console.log(loader);
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath(
  //     "https://www.gstatic.com/draco/versioned/decoders/1.5.5/"
  //   );
  //   loader.setDRACOLoader(dracoLoader);
  // });

  const model = useGLTF("/checkboard.glb");
  console.log("model", model.scenes[0].children[0].position.x);
  // model.scenes[0].children[0].position.x = 5;

  return (
    <>
      {/* <ambientLight />
      <mesh>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh position-x={3}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[2, 2, 1, 1]} />
        <meshBasicMaterial color="green" />
      </mesh> */}
      <OrbitControls />
      <pointLight />
      {/* <ambientLight /> */}
      <primitive object={model.scene} />
      {/* <group ref={modelRef} /> */}
    </>
  );
};

export default Scene;
