'use client';
import { useContext, useEffect } from 'react';
import styles from './BannerPhrase.module.scss';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';
import { useRouter } from 'next/navigation';

type Props = {
	bannerPhrase: String[];
	setIsFinished?: (arg: boolean) => void;
	scrollingDown: boolean;
	isTouchDevice: boolean;
};

const BannerPhrase = ({
	bannerPhrase,
	setIsFinished,
	scrollingDown,
	isTouchDevice,
}: Props) => {
	// const { scrollingDown, setScrollingDown } = useContext(ThemeContext);
	const title = document.querySelectorAll('.animateTitle');
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

	return (
		<div className={styles.title}>
			{bannerPhrase.map((phrase, index) => (
				<div
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
