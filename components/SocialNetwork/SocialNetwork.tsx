import React, { useContext, useLayoutEffect, useRef } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialNetwork.module.scss';
import IconLink from '../IconLink/IconLink';
import { ThemeContext } from '../Context/ThemeContext';
import gsap from 'gsap';

interface Props {}

const SocialNetwork = (props: Props) => {
	const wrapperRef = useRef(null);
	const { endLoading } = useContext(ThemeContext);
	useLayoutEffect(() => {
		const children = Array.from(wrapperRef.current.children);
		const tl = gsap.timeline({});
		gsap.set(children, { opacity: 0 });
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
	}, [endLoading]);
	return (
		<div
			ref={wrapperRef}
			className={styles.mainWrapper}
		>
			<IconLink
				link='google.fr'
				icon={faGithub}
			/>
			<IconLink
				link='google.fr'
				icon={faLinkedin}
			/>
		</div>
	);
};

export default SocialNetwork;
