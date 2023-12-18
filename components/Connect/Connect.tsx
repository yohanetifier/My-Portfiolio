import React, { useEffect, useRef } from 'react';
import styles from './Connect.module.scss';
import gsap from 'gsap';
import { shuffledLetters } from '../../lib/utils';

interface Props {
	// letters: string;
}

const Connect = (props: Props) => {
	const titleRef = useRef(null);
	const overlapWrapperRef = useRef(null);
	// const arrayOfLetters = letters.split('');
	const togetherRef = useRef(null);
	useEffect(() => {
		// !old method
		const timeline = gsap.timeline({ repeat: -1 });
		// const letter = Array.from(titleRef.current.children);
		// const shuffledTitle = shuffledLetters(letter as Array<string>);
		// gsap.set(shuffledTitle, { opacity: 0 });
		// timeline.to(shuffledTitle, {
		// 	opacity: 1,
		// 	stagger: 0.5,
		// 	duration: 1,
		// });

		//* New Inspiration
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
			ref={titleRef}
			className={styles.alignTitle}
		>
			<h2>LET&#39;S</h2>
			{/* {arrayOfLetters.map((letter, index) => (
				<h2
					className={styles.tranformFont}
					key={index}
				>
					{letter}
				</h2>
			))} */}
			<div
				className={styles.overlapWrapper}
				ref={overlapWrapperRef}
			>
				<p className={styles.overlapMessage}> WORK</p>
				<p className={styles.overlapMessage}>BUILD</p>
				<p className={styles.overlapMessage}>TALK</p>
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
