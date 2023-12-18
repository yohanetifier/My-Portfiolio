import React, { useEffect, useRef } from 'react';
import styles from './Skills.module.scss';
import gsap from 'gsap';

interface Props {}

const Skills = (props: Props) => {
	const jobRef = useRef(null);
	const angleBracketLeftRef = useRef(null);
	const angleBracketRightRef = useRef(null);

	useEffect(() => {
		const children = Array.from(jobRef.current.children);
		const tl = gsap.timeline({ repeat: -1 });
		tl.set(children, { opacity: 0 });
		tl.fromTo(
			children[0] as HTMLElement,
			{ y: '100%', opacity: 0 },
			{ y: '0%', opacity: 1 },
		)
			.fromTo(
				children[0] as HTMLElement,
				{ y: '0%', opacity: 1 },
				{ y: '-100%', opacity: 0 },
			)
			.to(angleBracketLeftRef.current, { x: '70%' })
			.to(angleBracketRightRef.current, { x: '-70%', duration: 0.5 }, '<')
			.fromTo(
				children[1] as HTMLElement,
				{ y: '100%', opacity: 0 },
				{ y: '0%', opacity: 1 },
				'<',
			)
			.fromTo(
				children[1] as HTMLElement,
				{ y: '0%', opacity: 1 },
				{ y: '-100%', opacity: 0 },
			)
			.to(
				angleBracketLeftRef.current,
				// { x: '0%', duration: 0.5 },
				{ x: '700%' },
			)
			.to(angleBracketRightRef.current, { x: '-500%', duration: 0.5 }, '<')
			.fromTo(
				children[2] as HTMLElement,
				{ y: '100%', opacity: 0 },
				{ y: '0%', opacity: 1 },
				'<',
			)
			.fromTo(
				children[2] as HTMLElement,
				{ y: '0%', opacity: 1 },
				{ y: '-100%', opacity: 0 },
			);
	}, [jobRef]);
	return (
		<div className={styles.jobProfile}>
			<span
				ref={angleBracketLeftRef}
				// className={styles.dissaperLetter}
			>
				&lt;
			</span>
			<div
				ref={jobRef}
				className={styles.job}
			>
				<p className={styles.profile}>CREATIVE WEB DEVELOPER</p>
				<p className={styles.profile}>FULLSTACK DEVELOPER</p>
				<p className={styles.profile}>DEVOPS</p>
			</div>
			<span ref={angleBracketRightRef}>/&gt;</span>
		</div>
	);
};

export default Skills;
