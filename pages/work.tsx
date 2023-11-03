import { Canvas, useThree } from '@react-three/fiber';
import React from 'react';
import styles from '../components/Work/Work.module.scss';
import Work from '../components/Work/Work';

interface Props { }

const work = ( props: Props ) => {
    return (
        <main className={ styles.wrapper } >
            <Canvas
                className={ styles.canvas }
            >
                <Work />
            </Canvas>
            <div className={ styles.pagination } >
                <span className={ styles.firstBar } ></span>
                <span className={ styles.secondBar } ></span>
                <span className={ styles.thirdBar } ></span>
            </div>
        </main>
    );
};

export default work;