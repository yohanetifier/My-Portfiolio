import React, { useContext, useEffect, useRef } from 'react';
import styles from './SlidingWrapper.module.scss';
import Link from 'next/link';
import { ThemeContext } from '../Context/ThemeContext';
import gsap from 'gsap';

interface Props {
	href: string;
	label: string;
	setShowFloatingWrapper: React.Dispatch<React.SetStateAction<boolean>>;
	className?: string;
}

const SlidingWrapper = ({
	href,
	label,
	setShowFloatingWrapper,
	className,
}: Props) => {
	const { setMenu, endLoading, setLoading, setTitle } =
		useContext(ThemeContext);
	const wrapperRef = useRef(null);
	useEffect(() => {
		const link = document.querySelectorAll('.animateLink');
		gsap.set(link, { opacity: 0 });
		endLoading
			? gsap.to(link, { opacity: 1, stagger: 0.3 })
			: gsap.to(link, { opacity: 0, stagger: 0.3 });
	}, [endLoading, wrapperRef]);

	const handleClick = (e, href) => {
		e.preventDefault();
		setTitle(href);
		setLoading(true);
		setTimeout(() => {
			setMenu(false);
		}, 1000);
	};
	return (
		<div
			className={styles.slidingWrapper}
			ref={wrapperRef}
		>
			<Link
				href={href}
				className={`${styles.linkWrapper} animateLink ${className}`}
				onMouseMove={() => setShowFloatingWrapper(true)}
				onClick={e => {
					handleClick(e, href);
					// setMenu(false);
				}}
			>
				{label}
			</Link>
		</div>
	);
};

export default SlidingWrapper;
