import React, { useEffect, useRef } from 'react';
import styles from './Connect.module.scss';
import gsap from 'gsap';

const Connect = () => {
	const titleRef = useRef(null);
	const overlapWrapperRef = useRef(null);
	const togetherRef = useRef(null);
	useEffect(() => {
		const timeline = gsap.timeline({ repeat: -1 });
		const allMessages = Array.from(overlapWrapperRef.current.children);
		gsap.set(overlapWrapperRef.current.children[1], { opacity: 0 });
		gsap.set(overlapWrapperRef.current.children[2], { opacity: 0 });
		gsap.set(overlapWrapperRef.current.children[0], { opacity: 0 });
		timeline
			.to(allMessages[0] as HTMLElement, { opacity: 1, duration: 1 })
			.to(allMessages[0] as HTMLElement, { opacity: 0 })
			.to(allMessages[1] as HTMLElement, { opacity: 1, duration: 1 }, '<')
			.to(allMessages[1] as HTMLElement, { opacity: 0 })
			.to(allMessages[2] as HTMLElement, { opacity: 1, duration: 1 }, '<');
	}, [titleRef]);

	return (
		<div
			data-testid='parentElement'
			ref={titleRef}
			className={styles.alignTitle}
		>
			<h2>LET&#39;S</h2>
			<div
				className={styles.overlapWrapper}
				ref={overlapWrapperRef}
			>
				<h2 className={styles.overlapMessage}>WORK</h2>
				<h2 className={styles.overlapMessage}>BUILD</h2>
				<h2 className={styles.overlapMessage}>TALK</h2>
			</div>
			<h2
				ref={togetherRef}
				className={styles.together}
			>
				TOGETHER
			</h2>
		</div>
	);
};

export default Connect;
