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
	const { loading } = useContext(ThemeContext);
	const [transition, setTransition] = useState('');
	const { title } = useContext(ThemeContext);
	const router = useRouter();
	const containerRef = useRef(null);
	const startAnimation = () => {
		if (containerRef.current) {
			const childrenArray = Array.from(containerRef.current.children);
			const tl = gsap.to(childrenArray, {
				x: 0,
				stagger: 0.2,
				duration: 1,
				onUpdate: () => {
					if (containerRef.current) {
						containerRef.current.style!.zIndex = 20;
						console.log(title);
					}
				},
				onComplete: () => {
					tl.reverse();
				},
			});
		}
	};

	useEffect(() => {
		router.events.on('routeChangeStart', ({ url }) => {
			startAnimation();
			console.log(url);
			console.log(loading);
		});
	}, [transition]);

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
