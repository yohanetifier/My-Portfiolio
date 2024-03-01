import Image from 'next/image';
import React, { RefObject, useContext, useEffect, useRef } from 'react';
import styles from './AnimatedImg.module.scss';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';
import { ArrayOfImg } from '../../typings/ArrayofImg';

type Props = {
	arrayOfImg: ArrayOfImg[];
	animationComplete: boolean;
	counter?: RefObject<number>;
	setHideIntro: React.Dispatch<React.SetStateAction<boolean>>;
};

const AnimatedImg = ({
	arrayOfImg,
	animationComplete,
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
				})
				.to(children[4] as HTMLElement, {
					y: '100vh',
					duration: 0.4,
					ease: 'cubic(0.17, 0.67, 0.08, 0.96)',
				})
				.to(children[3] as HTMLElement, {
					y: '100vh',
					duration: 0.4,
					ease: 'cubic(0.17, 0.67, 0.08, 0.96)',
				})
				.to(children[2] as HTMLElement, {
					y: '100vh',
					duration: 0.4,
					ease: 'cubic(0.17, 0.67, 0.08, 0.96)',
				})
				.to(children[1] as HTMLElement, {
					y: '100vh',
					duration: 0.4,
					ease: 'cubic(0.17, 0.67, 0.08, 0.96)',
				})
				.to(children[0] as HTMLElement, {
					y: '100vh',
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
			{arrayOfImg.map(({ src, alt, className, id }) => (
				<figure
					className={`${className} figure`}
					key={id}
				>
					<Image
						src={src}
						alt={alt}
						width={200}
						height={200}
					/>
				</figure>
			))}
		</div>
	);
};

export default AnimatedImg;
