import React, {
	ReactElement,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import styles from './Menu.module.scss';
import { ThemeContext } from '../Context/ThemeContext';
import gsap from 'gsap';
import Link from 'next/link';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import SlidingWrapper from '../SlidingWrapper/SlidingWrapper';

interface Props {}
const Menu = (props: Props) => {
	const { menu, setMenu, setIsClosed, setEndLoading } =
		useContext(ThemeContext);
	const containerRef = useRef(null);
	const floatingWrapper = useRef(null);
	const [showFloatingWrapper, setShowFloatingWrapper] = useState(false);
	useEffect(() => {
		const childrenArray = Array.from(containerRef.current.children);
		menu
			? gsap.to(childrenArray, {
					x: 0,
					stagger: 0.2,
					duration: 1,
					onUpdate: () => {
						if (containerRef.current && containerRef.current.style) {
							containerRef.current.style.zIndex = 100;
						}
					},
					onComplete: () => {
						setEndLoading(true);
					},
			  })
			: gsap.to(childrenArray, {
					x: '100%',
					stagger: 0.2,
					duration: 1,
					onUpdate: () => {
						setEndLoading(false);
					},
					onComplete: () => {
						containerRef.current.style.zIndex = 0;
					},
			  });
	}, [menu, , containerRef, showFloatingWrapper]);

	const route = [
		{
			href: '/work',
			label: 'work',
			className: 'work',
		},
		{
			href: '/about',
			label: 'about',
			className: 'about',
		},
		{
			href: '/contact',
			label: 'contact',
			className: 'contact',
		},
	];

	const handleMove = e => {
		if (showFloatingWrapper) {
			floatingWrapper.current.style.opacity = 1;
		} else {
			floatingWrapper.current.style.opacity = 0;
		}
		floatingWrapper.current.style.top = e.clientY + 'px';
		floatingWrapper.current.style.left = e.clientX + 'px';
	};

	// let classTest;
	// if (showFloatingWrapper) {
	// 	classTest = styles.floatingWrapper
	// }else {
	// 	classTest = `${styles.floatingWrapper}`
	// }
	return (
		<div
			ref={containerRef}
			className={`${styles.menu}`}
			// onMouseMove={e => handleMove(e)}
		>
			{/* <div
				ref={floatingWrapper}
				className={styles.floatingWrapper}
			>
				flottant wrapper
			</div> */}
			<div className={styles.slidingWrapper}></div>
			{route.map(({ href, label, className }, i) => (
				<SlidingWrapper
					href={href}
					label={label}
					key={i}
					setShowFloatingWrapper={setShowFloatingWrapper}
					className={className}
				/>
			))}

			<div className={`${styles.slidingWrapper} ${styles.socialNetwork}`}>
				<SocialNetwork />
			</div>
		</div>
	);
};
export default Menu;
