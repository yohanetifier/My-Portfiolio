import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import styles from './AnimatedImg.module.scss';
import { container } from '../AnimatedWords/AnimatedWords';

export type ArrayOfImg = {
	src: string;
	alt: string;
	className: string;
};

type Props = {
	arrayOfImg: ArrayOfImg[];
	animationComplete: boolean;
	setAnimationSecondComplete: (arg: boolean) => void;
};

const imageVariants: Variants = {
	hidden: { opacity: 0, transition: { duration: 0.3 } },
	show: { opacity: 1, transition: { duration: 0.3 } },
};

const AnimatedImg = ({
	arrayOfImg,
	animationComplete,
	setAnimationSecondComplete,
}: Props) => {
	return (
		<motion.div
			className={styles.container}
			variants={container}
			initial='hidden'
			animate={animationComplete ? 'show' : ''}
			onAnimationComplete={() => setAnimationSecondComplete(true)}
		>
			{arrayOfImg.map(({ src, alt, className }, i) => (
				<>
					<motion.figure
						className={`${className} figure`}
						key={i}
						variants={imageVariants}
					>
						<Image
							src={src}
							alt={alt}
						/>
					</motion.figure>
				</>
			))}
		</motion.div>
	);
};

export default AnimatedImg;
