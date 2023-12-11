import React, { useEffect, useRef } from 'react';
import styles from './AnimatedWords.module.scss';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
type Props = {
	arrayOfLetter: string[];
	setAnimationComplete: (arg: boolean) => void;
};

export const container: Variants = {
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const letterVariants: Variants = {
	hidden: { opacity: 0, x: -100, transition: { duration: 0.3 } },
	show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const AnimatedWords = ({ arrayOfLetter, setAnimationComplete }: Props) => {
	const wrapperRef = useRef(null);
	useEffect(() => {
		const children = Array.from(wrapperRef.current.children);
		console.log(children);
		gsap.fromTo(
			children,
			{ x: -100, opacity: 0 },
			{
				x: 0,
				stagger: 0.2,
				opacity: 1,
				onComplete: () => {
					setAnimationComplete(true);
				},
			},
		);
	}, []);

	return (
		<div
			// variants={container}
			ref={wrapperRef}
			className={styles.title}
			// initial='hidden'
			// animate='show'
			// onAnimationComplete={() => setAnimationComplete(true)}
		>
			{arrayOfLetter.map((letter, i) => (
				<span
					// variants={letterVariants}
					key={i}
					className={styles.letter}
				>
					{letter}
				</span>
			))}
		</div>
	);
};

export default AnimatedWords;
