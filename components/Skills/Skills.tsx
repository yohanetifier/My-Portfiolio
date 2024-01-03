'use client';
import React, { useEffect, useRef } from 'react';
import styles from './Skills.module.scss';
import gsap from 'gsap';

interface Props {}

const Skills = (props: Props) => {
	// const desktopS = window.matchMedia('(max-width: 1024px)');
	const jobRef = useRef(null);
	const angleBracketLeftRef = useRef(null);
	const angleBracketRightRef = useRef(null);

	useEffect(() => {
		const children = Array.from(jobRef.current.children);
		const tl = gsap.timeline({ repeat: -1 });
		const animate = (
			item,
			opacityStartValue,
			opacityEndValue,
			yStartValue,
			yEndValue,
			duration?,
		) => {
			tl.fromTo(
				item,
				{ y: yStartValue, opacity: opacityStartValue },
				{ y: yEndValue, opacity: opacityEndValue },
				duration,
			);
		};
		tl.set(children, { opacity: 0 });
		animate(children[0] as HTMLElement, 0, 1, '100%', '0%');
		animate(children[0] as HTMLElement, 1, 0, '0%', '-100%');
		animate(children[1] as HTMLElement, 0, 1, '100%', '0%');
		animate(children[1] as HTMLElement, 1, 0, '0%', '-100%');
		tl.to(angleBracketLeftRef.current, {
			x: '180',
		}).to(angleBracketRightRef.current, { x: '-420%', duration: 0.5 }, '<');
		animate(children[2] as HTMLElement, 0, 1, '100%', '0%', '<');
		animate(children[2] as HTMLElement, 1, 0, '0%', '-100%');
		tl.to(angleBracketLeftRef.current, { x: '0' }).to(
			angleBracketRightRef.current,
			{ x: '0' },
			'<',
		);
	}, [jobRef]);
	return (
		<div className={styles.jobProfile}>
			<span
				ref={angleBracketLeftRef}
				className={styles.angleBracketLeft}
				// className={styles.dissaperLetter}
			>
				&lt;
			</span>
			<div
				ref={jobRef}
				className={styles.job}
			>
				<p className={styles.profile}>CREATIVE DEVELOPER</p>
				<p className={styles.profile}>FULLSTACK DEVELOPER</p>
				<p className={styles.profile}>DEVOPS</p>
			</div>
			<span
				className={styles.angleBracketRight}
				ref={angleBracketRightRef}
			>
				/&gt;
			</span>
		</div>
	);
};

export default Skills;
