import React from 'react';
import styles from './BannerPhrase.module.scss';
import { motion } from 'framer-motion';

type Props = {
	bannerPhrase: String[];
	scrollingDown: boolean;
};

const BannerPhrase = ({ bannerPhrase, scrollingDown }: Props) => {
	const container = {
		animate: {
			y: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.2,
			},
		},
	};

	const slidingFromTheTop = {
		initial: {
			y: 0,
			transition: { duration: 0.3, staggerChildren: 0.2 },
		},
		animate: {
			y: 120,
			transition: { duration: 0.3 },
		},
	};

	const slidingFromTheBottom = {
		initial: { y: 120, transition: { duration: 0.3 } },
		animate: { y: 0, transition: { duration: 0.3 } },
	};

	return (
		<motion.div
			className={styles.title}
			variants={container}
			initial={scrollingDown ? 'reverseInitial' : 'initial'}
			animate={scrollingDown ? 'reverseAnimate' : 'animate'}
		>
			{bannerPhrase.map((phrase, index) => (
				<div
					className={styles.overflowHidden}
					key={index}
				>
					<motion.h2
						variants={scrollingDown ? slidingFromTheTop : slidingFromTheBottom}
						animate={'animate'}
					>
						{phrase}
					</motion.h2>
				</div>
			))}
		</motion.div>
		// </Scroll>
	);
};

export default BannerPhrase;
