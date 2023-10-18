import React, { useState, useContext, useEffect, useLayoutEffect, useRef } from 'react';
import styles from './PageTransition.module.scss';
import { motion, useMotionValue, Variants } from 'framer-motion';
import { ThemeContext } from '../Context/ThemeContext';

interface Props {
    numberOfRows?: number;
    // loading: boolean;
}

const PageTransition = ( { numberOfRows = 3, /* loading */ }: Props ) => {
    const { loading, setLoading } = useContext( ThemeContext );
    const [ changeDirection, setChangeDirection ] = useState( '' );
    const ref = useRef();
    const x = useMotionValue( 100 );

    setTimeout( () => {
        setLoading( true );
        setChangeDirection( 'right' );
    }, 3000 );



    const container: Variants = {
        initial: { x: 0 },
        animate:
        {
            x: 0,
            transition: { staggerChildren: 0.2 }
        },
        reverseAnimate:
        {
            x: 0,
            transition: { staggerChildren: 0.2 }
        },

    };

    const slideFromTheRight = {
        initial: { x: ( loading && changeDirection === 'right' ) ? '100vw' : ( loading && changeDirection === 'left' ) ? '0px' : '100vw' },
        animate:
        {
            x: ( loading && changeDirection === 'right' ) ? '0px' : ( loading && changeDirection === 'left' ) ? '100vw' : '0px',
            transition: { duration: 1 }
        },
    };

    // const slideFromTheLeft = {
    //     initial: { x: '0px' },
    //     animate:
    //     {
    //         x: '100vw',
    //         transition: { duration: 1 }
    //     }
    // };

    return (
        <motion.div
            initial={ 'initial' }
            animate={ loading && changeDirection === 'right' ? 'animate' : !loading && changeDirection === 'left' ? 'animate' : '' }
            variants={ container }
            className={ styles.wrapper }>
            { Array.from( { length: numberOfRows } ).map( ( index ) => (
                <motion.div
                    ref={ ref }
                    variants={ slideFromTheRight }
                    key={ index }
                    className={ styles.rows }></motion.div>
            ) ) }
        </motion.div>
    );
};

export default PageTransition;