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
	children: ReactNode;
}

const PageTransition = () => {
	const { loading, setLoading } = useContext(ThemeContext);
	const [transition, setTransition] = useState('');
	const { title } = useContext(ThemeContext);
	const router = useRouter();
	const containerRef = useRef(null);
	let tl;

	const startAnimation = () => {
		if (containerRef.current) {
			const childrenArray = Array.from(containerRef.current.children);
			tl = gsap.to(childrenArray, {
				x: 0,
				stagger: 0.2,
				duration: 0.3,
				onUpdate: () => {
					if (containerRef.current) {
						containerRef.current.style!.zIndex = 20;
						console.log(title);
					}
				},
				onComplete: () => {
					// tl.reverse();
					setLoading(true);
				},
			});
		}
	};

	const reverseAnimation = () => {
		if (containerRef.current) {
			const childrenArray = Array.from(containerRef.current.children);
			tl = gsap.to(childrenArray, {
				x: '-100%',
				stagger: 0.2,
				duration: 0.5,
				// onUpdate: () => {
				// 	if (containerRef.current) {
				// 		containerRef.current.style!.zIndex = 20;
				// 		console.log(title);
				// 	}
				// },
				// onComplete: () => {
				// 	 tl.reverse();
				// 	setLoading(true);
				// },
			});
		}
	};

	useEffect(() => {
		router.events.on('routeChangeStart', startAnimation);
		router.events.on('routeChangeComplete', () => {
			setTimeout(() => {
				reverseAnimation();
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
			<div className={styles.slidingWrapper}></div>
			<div className={styles.slidingWrapper}></div>
			<div className={styles.slidingWrapper}></div>
			<div className={styles.slidingWrapper}></div>
			<div className={styles.slidingWrapper}></div>
		</div>
	);
	// (
	// 	<div>{children}</div>
	// );
};

export default PageTransition;
