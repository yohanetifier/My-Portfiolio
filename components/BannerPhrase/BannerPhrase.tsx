'use client';
import React, { useEffect } from 'react';
import styles from './BannerPhrase.module.scss';
import gsap from 'gsap';

type Props = {
	bannerPhrase: String[];
	setIsFinished?: React.Dispatch<React.SetStateAction<boolean>>;
	scrollingDown: boolean;
	isTouchDevice: boolean;
};

const BannerPhrase = ({
	bannerPhrase,
	setIsFinished,
	scrollingDown,
	isTouchDevice,
}: Props) => {
	const title = document.querySelectorAll('.animateTitle');
	useEffect(() => {
		!isTouchDevice && scrollingDown
			? gsap.to(title, {
					y: 120,
					stagger: 0.5,
					onComplete: () => {
						setIsFinished(true);
					},
			  })
			: gsap.to(title, {
					y: 0,
					stagger: 0.5,
					onUpdate: () => {
						setIsFinished(false);
					},
			  });
	}, [isTouchDevice, scrollingDown]);

	return (
		<div
			data-testid='mainWrapper'
			className={styles.title}
		>
			{bannerPhrase.map((phrase, index) => (
				<div
					data-testid='wrapper'
					className={styles.overflowHidden}
					key={index}
				>
					<h2 className='animateTitle'>{phrase}</h2>
				</div>
			))}
		</div>
	);
};

export default BannerPhrase;
