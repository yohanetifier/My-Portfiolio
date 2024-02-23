'use client';
import React, { useContext, useEffect, useRef } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialNetwork.module.scss';
import IconLink from '../IconLink/IconLink';
import { ThemeContext } from '../Context/ThemeContext';
import gsap from 'gsap';

interface Props {
	isAnimated?: boolean;
}

const SocialNetwork = ({ isAnimated = false }: Props) => {
	const wrapperRef = useRef(null);
	const { endLoading } = useContext(ThemeContext);
	useEffect(() => {
		const children = Array.from(wrapperRef.current.children);
		const tl = gsap.timeline({});
		gsap.set(children, { opacity: isAnimated ? 0 : 1 });
		if (endLoading) {
			tl.to(
				children,
				{
					opacity: 1,
					duration: 0.5,
					stagger: 0.2,
				},
				'+=1',
			);
		}
	}, [endLoading, isAnimated]);
	return (
		<div
			ref={wrapperRef}
			className={styles.mainWrapper}
		>
			<IconLink
				link='https://github.com/yohanetifier'
				icon={faGithub}
			/>
			<IconLink
				link='https://www.linkedin.com/in/yohan-etifier-7a486a166/'
				icon={faLinkedin}
			/>
		</div>
	);
};

export default SocialNetwork;
