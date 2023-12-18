import React, { useEffect, useRef } from 'react';
import styles from './Connect.module.scss';
import gsap from 'gsap';
import { shuffledLetters } from '../../lib/utils';

interface Props {
	letters: string;
}

const Connect = ({ letters }: Props) => {
	const titleRef = useRef(null);
	const arrayOfLetters = letters.split('');
	useEffect(() => {
		// !old method
		const timeline = gsap.timeline({});
		const letter = Array.from(titleRef.current.children);
		const shuffledTitle = shuffledLetters(letter as Array<string>);
		gsap.set(shuffledTitle, { opacity: 0 });
		timeline.to(shuffledTitle, {
			opacity: 1,
			stagger: 0.5,
			duration: 1,
		});
	}, [titleRef]);

	return (
		<div
			ref={titleRef}
			className={styles.alignTitle}
		>
			{arrayOfLetters.map((letter, index) => (
				<h2
					className={styles.tranformFont}
					key={index}
				>
					{letter}
				</h2>
			))}
		</div>
	);
};

export default Connect;
