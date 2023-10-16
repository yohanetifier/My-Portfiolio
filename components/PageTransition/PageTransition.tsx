import React, { useState } from 'react';
import styles from './PageTransition.module.scss';
import { motion } from 'framer-motion';

interface Props { }

const PageTransition = ( props: Props ) => {
    const [ loading, setLoading ] = useState( false );

    setTimeout( () => {
        setLoading( true );
    }, 3000 );

    new Array( 3 ).map( ( items ) => {
        console.log( 'items', items );
    } );
    return (
        <div className={ styles.wrapper }>
            <motion.div
                initial={ { x: '100vw' } }
                animate={ { x: loading ? '0px' : '100vw' } }
                transition={ { duration: 3 } }
                className={ styles.firstChildren }>First Container</motion.div>
            <div className={ styles.secondChildren }>Second Container</div>
            <div className={ styles.thirdChildren }>Third Container</div>
        </div>
    );
};

export default PageTransition;