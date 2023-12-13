import React, { useContext } from 'react';
import styles from './SlidingWrapper.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from '../Context/ThemeContext';

interface Props {
	href: string;
	label: string;
	setShowFloatingWrapper: (arg: boolean) => void;
}

const SlidingWrapper = ({ href, label, setShowFloatingWrapper }: Props) => {
	const { setMenu } = useContext(ThemeContext);
	// const { setShowFloatingWrapper } = useContext(ThemeContext);
	return (
		<div
			className={styles.slidingWrapper}
			// onMouseLeave={() => setShowFloatingWrapper(false)}
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
