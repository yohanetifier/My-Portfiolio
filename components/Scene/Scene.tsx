import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import Chess from '../Chess/Chess';
import { Perf } from 'r3f-perf';

type Props = {};

const Scene = (props: Props) => {
  return (
    <>
      {/* {process.env.NODE_ENV === 'development' && <Perf />} */}
      <OrbitControls makeDefault />
      <ambientLight position={[0, 0, 0]} />
      {/* <primitive object={model.scene} /> */}
      <Chess />
    </>
  );
};

export default Scene;
