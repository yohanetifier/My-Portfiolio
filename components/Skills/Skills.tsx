'use client';
import React, { useEffect, useRef } from 'react';
import styles from './Skills.module.scss';
import gsap from 'gsap';

const Skills = () => {
	const jobRef = useRef(null);
	const angleBracketLeftRef = useRef(null);
	const angleBracketRightRef = useRef(null);
	let tabletM;
	let tabletS;
	let mobileL;
	let tabletXs;
	let nestHubMax;
	let mobileS;
	if (typeof window !== 'undefined') {
		tabletM = window.matchMedia('(max-width: 900px)').matches;
		tabletS = window.matchMedia('(max-width: 768px)').matches;
		mobileL = window.matchMedia('(max-width: 500px)').matches;
		tabletXs = window.matchMedia('(max-width: 540px)').matches;
		mobileS = window.matchMedia('(max-width: 280px)').matches;
		nestHubMax = window.matchMedia(
			'(min-width: 1280px) and (max-width: 1440px) and (min-height: 800px) and (max-height: 900px)',
		).matches;
	}
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
			x: mobileS
				? '40'
				: mobileL
				? '60'
				: tabletXs
				? '70'
				: tabletS
				? '120'
				: tabletM
				? '140'
				: nestHubMax
				? '110'
				: '180',
		}).to(
			angleBracketRightRef.current,
			{ x: nestHubMax ? '-350%' : '-420%', duration: 0.5 },
			'<',
		);
		animate(children[2] as HTMLElement, 0, 1, '100%', '0%', '<');
		animate(children[2] as HTMLElement, 1, 0, '0%', '-100%');
		tl.to(angleBracketLeftRef.current, { x: '0' }).to(
			angleBracketRightRef.current,
			{ x: '0' },
			'<',
		);
	}, [jobRef, tabletM, tabletS, mobileL, tabletXs, nestHubMax, mobileS]);
	return (
		<div className={styles.jobProfile}>
			<span
				ref={angleBracketLeftRef}
				className={styles.angleBracketLeft}
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
