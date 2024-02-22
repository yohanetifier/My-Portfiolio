import { useEffect, useRef, useContext } from 'react';
import styles from './PageTransition.module.scss';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';
import { useRouter } from 'next/router';

interface Props {
	rows?: number;
}

const PageTransition = ({ rows = 5 }: Props) => {
	const { loading, setLoading, title, setMenu } = useContext(ThemeContext);
	const router = useRouter();
	const containerRef = useRef(null);
	let childrenArray;

	useEffect(() => {
		if (loading) {
			if (containerRef.current) {
				childrenArray = Array.from(containerRef.current.children);
				gsap.to(childrenArray, {
					x: 0,
					stagger: 0.2,
					duration: 0.4,
					onComplete: () => {
						router.push(`/${title}`);
						setTimeout(() => {
							setMenu(false);
							setLoading(false);
						}, 2000);
					},
				});
			}
		} else {
			childrenArray = Array.from(containerRef.current.children);
			gsap.to(childrenArray, {
				x: '100%',
				stagger: 0.2,
				duration: 0.4,
				onComplete: () => {
					setLoading(false);
				},
			});
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
