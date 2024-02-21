import Image from 'next/image';
import { RefObject, useContext, useEffect, useRef } from 'react';
import styles from './AnimatedImg.module.scss';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';

export type ArrayOfImg = {
	src: string;
	alt: string;
	className: string;
};

type Props = {
	arrayOfImg: ArrayOfImg[];
	animationComplete: boolean;
	setAnimationSecondComplete: (arg: boolean) => void;
	counter?: RefObject<number>;
	setHideIntro: (arg: boolean) => void;
};

const AnimatedImg = ({
	arrayOfImg,
	animationComplete,
	setAnimationSecondComplete,
	counter,
	setHideIntro,
}: Props) => {
	const wrapperRef = useRef(null);
	const { setLoading, setTitle } = useContext(ThemeContext);
	useEffect(() => {
		const children = Array.from(wrapperRef.current.children);
		const tl = gsap.timeline();
		animationComplete &&
			tl
				.to(children, {
					opacity: 1,
					stagger: 0.5,
					onComplete: () => {
						setAnimationSecondComplete(true);
					},
				})
				.to(children[4] as HTMLElement, {
					y: '200%',
					duration: 0.4,
					ease: 'cubic(0.17, 0.67, 0.08, 0.96)',
				})
				.to(children[3] as HTMLElement, {
					y: '200%',
					duration: 0.4,
					ease: 'cubic(0.17, 0.67, 0.08, 0.96)',
				})
				.to(children[2] as HTMLElement, {
					y: '200%',
					duration: 0.4,
					ease: 'cubic(0.17, 0.67, 0.08, 0.96)',
				})
				.to(children[1] as HTMLElement, {
					y: '200%',
					duration: 0.4,
					ease: 'cubic(0.17, 0.67, 0.08, 0.96)',
				})
				.to(children[0] as HTMLElement, {
					y: '200%',
					duration: 0.4,
					ease: 'cubic(0.17, 0.67, 0.08, 0.96)',
					onComplete: () => {
						setLoading(true);
						setTitle('/');
						setTimeout(() => {
							setHideIntro(true);
						}, 1000);
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
							width={200}
							height={200}
						/>
					</figure>
				</>
			))}
		</div>
	);
};

export default AnimatedImg;
