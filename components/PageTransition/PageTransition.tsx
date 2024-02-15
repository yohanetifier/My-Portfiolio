import React, {
	useEffect,
	useRef,
	ReactNode,
	useContext,
	useState,
} from 'react';
import styles from './PageTransition.module.scss';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';
import { useRouter } from 'next/router';

interface Props {
	rows?: number;
	// children: React.ReactNode;
}

const PageTransition = ({ rows = 5 }: Props) => {
	const { loading, setLoading, title } = useContext(ThemeContext);
	const router = useRouter();
	const containerRef = useRef(null);
	let tl;

	const startAnimation = (x: number | string) => {
		if (containerRef.current) {
			const childrenArray = Array.from(containerRef.current.children);
			tl = gsap.to(childrenArray, {
				x,
				stagger: 0.2,
				duration: 0.4,
				onUpdate: () => {
					const progress = tl.progress();
					if (title === 'work' || title === 'about') {
						// if (progress > 0.5) {
						// router.push(`/${title}`);
						// setTimeout(() => {
						// 	startAnimation('100%');
						// }, 5000);
						// }
					}
				},
				onComplete: () => {
					router.push(`/${title}`);
					setTimeout(() => {
						startAnimation('100%');
					}, 2000);
				},
			});
		}
	};

	useEffect(() => {
		if (loading) {
			startAnimation(0);
		}
		// router.events.on('routeChangeStart', () => {
		// router.events.on('routeChangeStart', () => {
		// 	startAnimation(0);
		// });
		// 	setLoading(true);
		// 	startAnimation(0);
		// });
		// router.events.on('routeChangeComplete', () => {
		// 	setTimeout(() => {
		// 		startAnimation('-100%');
		// 	}, 2000);
		// });
		// return () => {
		// 	router.events.off('routeChangeStart', startAnimation);
		// };
	}, [loading]);

	return (
		<div
			ref={containerRef}
			className={styles.subWrapper}
		>
			{[...Array(rows)].map((_, index) => (
				<div
					key={index}
					className={styles.slidingWrapper}
					style={{ height: `calc(100% / ${rows})` }}
				></div>
			))}
		</div>
	);
};

export default PageTransition;
