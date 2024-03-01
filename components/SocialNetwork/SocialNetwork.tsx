'use client';
import React, { useContext, useEffect, useRef } from 'react';
import styles from './SocialNetwork.module.scss';
import IconLink from '../IconLink/IconLink';
import { ThemeContext } from '../Context/ThemeContext';
import gsap from 'gsap';
import { contact } from '../Contact/Contact';
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
			{contact.map(({ href, icon }, index) => (
				<IconLink
					key={index}
					link={href}
					icon={icon}
				/>
			))}
		</div>
	);
};

export default SocialNetwork;
