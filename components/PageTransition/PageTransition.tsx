import { useEffect, useRef, useContext } from 'react';
import styles from './PageTransition.module.scss';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';
import { useRouter } from 'next/router';

interface Props {
	rows?: number;
}

const PageTransition = ({ rows = 5 }: Props) => {
	const { loading, setLoading, title, setTitle } = useContext(ThemeContext);
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
				onComplete: () => {
					router.push(`/${title}`);
					setTimeout(() => {
						startAnimation('100%');
						setLoading(false);
					}, 2000);
				},
			});
		}
	};

	useEffect(() => {
		if (loading) {
			startAnimation(0);
		} else {
			setTitle('');
		}
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
