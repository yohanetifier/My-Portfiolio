import { Canvas, useThree } from '@react-three/fiber';
import React from 'react';
import styles from '../components/Work/Work.module.scss';
import Work from '../components/Work/Work';

interface Props { }



const work = ( props: Props ) => {
    return (
        <Canvas
            className={ styles.canvas }
        >
            <Work />
        </Canvas>
    );
};

export default work;