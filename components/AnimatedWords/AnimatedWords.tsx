import { useEffect, useRef } from 'react';
import styles from './AnimatedWords.module.scss';
import gsap from 'gsap';

type Props = {
	arrayOfLetter: string[];
	setAnimationComplete: (arg: boolean) => void;
};

const AnimatedWords = ({ arrayOfLetter, setAnimationComplete }: Props) => {
	const wrapperRef = useRef(null);
	useEffect(() => {
		const children = Array.from(wrapperRef.current.children);
		gsap.fromTo(
			children,
			{ x: -100, opacity: 0 },
			{
				x: 0,
				stagger: 0.5,
				opacity: 1,
				onComplete: () => {
					setAnimationComplete(true);
				},
			},
		);
	}, []);

	return (
		<div
			ref={wrapperRef}
			className={styles.title}
		>
			{arrayOfLetter.map((letter, i) => (
				<span
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
