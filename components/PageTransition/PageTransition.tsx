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
}

const PageTransition = ({ rows = 5 }: Props) => {
	const { loading, setLoading } = useContext(ThemeContext);
	const router = useRouter();
	const containerRef = useRef(null);
	let tl;

	const startAnimation = (x: number | string) => {
		if (containerRef.current) {
			const childrenArray = Array.from(containerRef.current.children);
			tl = gsap.to(childrenArray, {
				x,
				stagger: 0.2,
				duration: 0.3,
				// onComplete: () => {
				// 	setLoading(true);
				// },
			});
		}
	};

	useEffect(() => {
		router.events.on('routeChangeStart', () => {
			startAnimation(0);
		});
		router.events.on('routeChangeComplete', () => {
			setTimeout(() => {
				startAnimation('-100%');
			}, 2000);
		});
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
