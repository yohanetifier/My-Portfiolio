import React, { useRef } from 'react';
import styles from './Footer.module.scss';
import Skills from '../Skills/Skills';

const Footer = () => {
	const wrapper = useRef(null);
	return (
		<div
			ref={wrapper}
			className={styles.rotatingContainer}
		>
			<Skills />
		</div>
	);
};

export default Footer;
