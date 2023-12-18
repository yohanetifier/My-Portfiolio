import React, { useRef } from 'react';
import styles from './Footer.module.scss';
import Skills from '../Skills/Skills';

interface Props {}

const Footer = (props: Props) => {
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
