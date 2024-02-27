import { useEffect, useRef } from 'react';
import WorkCard from '../WorkCard/WorkCard';
import styles from './WorkList.module.scss';
import gsap from 'gsap';

const WorkList = () => {
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
		wrapperRef.current.addEventListener('wheel', e => {
			e.preventDefault();
			wrapperRef.current.scrollLeft += e.deltaY;
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
