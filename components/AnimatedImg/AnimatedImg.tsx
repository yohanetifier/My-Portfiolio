import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './AnimatedImg.module.scss';
import gsap from 'gsap';

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

const AnimatedImg = ({
	arrayOfImg,
	animationComplete,
	setAnimationSecondComplete,
}: Props) => {
	const wrapperRef = useRef(null);
	useEffect(() => {
		const children = Array.from(wrapperRef.current.children);
		animationComplete &&
			gsap.to(children, {
				opacity: 1,
				stagger: 0.3,
				onComplete: () => {
					setAnimationSecondComplete(true);
				},
			});
	}, [wrapperRef, animationComplete]);
	return (
		<div
			className={styles.container}
			ref={wrapperRef}
		>
			{arrayOfImg.map(({ src, alt, className }, i) => (
				<>
					<figure
						className={`${className} figure`}
						key={i}
					>
						<Image
							src={src}
							alt={alt}
						/>
					</figure>
				</>
			))}
		</div>
	);
};

export default AnimatedImg;
