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
		const children = Array.from(wrapperRef.current.children);
		gsap.set(children, { opacity: 0 });
		endLoading
			? gsap.to(children[0] as HTMLElement, { opacity: 1 })
			: gsap.to(children, { opacity: 0, stagger: 3 });
	}, [endLoading, wrapperRef]);
	return (
		<div
			className={styles.slidingWrapper}
			// onMouseLeave={() => setShowFloatingWrapper(false)}
			ref={wrapperRef}
		>
			<Link
				href={href}
				className={styles.linkWrapper}
				onMouseMove={() => setShowFloatingWrapper(true)}
				onClick={() => {
					setTimeout(() => {
						setMenu(false);
					}, 1000);
				}}
				// onMouseLeave={() => setShowFloatingWrapper(false)}
			>
				{label}
			</Link>
		</div>
	);
};

export default SlidingWrapper;
