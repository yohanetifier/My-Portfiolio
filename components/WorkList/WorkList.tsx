import { useEffect, useRef } from 'react';
import WorkCard from '../WorkCard/WorkCard';
import styles from './WorkList.module.scss';
import gsap from 'gsap';

interface Props {}

const WorkList = (props: Props) => {
	const wrapperRef = useRef(null);
	const projectList = [
		'alliance-gaz',
		'the-buyer',
		'tolefi',
		'app-bermudes',
		'dralm',
		'hinderer-wolff',
		'jego',
		'la-causerie',
		'les-halles-trottemant',
		'mcharraire',
		'vse',
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
					href={`/work/${project.toLowerCase()}`}
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
