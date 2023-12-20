import React, { useContext, useEffect, useRef } from 'react';
import styles from './SlidingWrapper.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from '../Context/ThemeContext';
import gsap from 'gsap';

interface Props {
	href: string;
	label: string;
	setShowFloatingWrapper: (arg: boolean) => void;
}

const SlidingWrapper = ({ href, label, setShowFloatingWrapper }: Props) => {
	const { setMenu, endLoading } = useContext(ThemeContext);
	const wrapperRef = useRef(null);
	useEffect(() => {
		const link = document.querySelectorAll('.animateLink');
		gsap.set(link, { opacity: 0 });
		endLoading
			? gsap.to(link, { opacity: 1, stagger: 0.3 })
			: gsap.to(link, { opacity: 0, stagger: 0.3 });
	}, [endLoading, wrapperRef]);
	return (
		<div
			className={styles.slidingWrapper}
			ref={wrapperRef}
		>
			<Link
				href={href}
				className={`${styles.linkWrapper} animateLink`}
				onMouseMove={() => setShowFloatingWrapper(true)}
				onClick={() => {
					setTimeout(() => {
						setMenu(false);
					}, 1000);
				}}
			>
				{label}
			</Link>
		</div>
	);
};

export default SlidingWrapper;
