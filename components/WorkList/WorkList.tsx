import { useEffect, useRef } from 'react';
import WorkCard from '../WorkCard/WorkCard';
import styles from './WorkList.module.scss';
import gsap from 'gsap';

interface Props {}

const WorkList = (props: Props) => {
	const wrapperRef = useRef(null);
	const projectList = [
		'Alliance Gaz',
		'The Buyer',
		'Tolefi',
		'App Bermudes',
		'DRALM',
		'Hinderer-Wolff',
		'Jego',
		'La causerie',
		'les halles trottemant',
		'Mcharraire',
		'Vse',
	];

	useEffect(() => {
		gsap.set(wrapperRef.current!.children, { y: '-150%' });
		gsap.to(wrapperRef.current!.children, {
			y: 0,
			duration: 2,
			stagger: 0.5,
		});
	}, []);

	return (
		<div
			ref={wrapperRef}
			className={styles.wrapper}
		>
			{projectList.map((project, index) => (
				<WorkCard
					key={index}
					href={`/work/${project.toLowerCase().split(' ').join('-')}`}
					imageSrc={`/assets/images/${project
						.toLowerCase()
						.split(' ')
						.join('-')}.png`}
					imageAlt=''
				/>
			))}
		</div>
	);
};

export default WorkList;
