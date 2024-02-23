import React, { useContext } from 'react';
import styles from './Project.module.scss';
import { useRouter } from 'next/router';
import IconLink from '../IconLink/IconLink';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../Context/ThemeContext';

const Project = () => {
	// const isTouchDevice =
	// 	'ontouchstart' in window || navigator.maxTouchPoints > 0;
	const { query } = useRouter();
	const { setLoading, setTitle } = useContext(ThemeContext);
	const handleClick = e => {
		e.preventDefault();
		setLoading(true);
		setTitle('/work');
	};
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.goBack}
				onClick={e => handleClick(e)}
			>
				<IconLink
					link='/work'
					icon={faArrowLeft}
				/>
			</div>
			<video
				autoPlay
				src={`/assets/videos/projects/${query.projectId}.mp4`}
				className={styles.video}
			></video>
		</div>
	);
};

export default Project;
