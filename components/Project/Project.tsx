import React from 'react';
import styles from './Project.module.scss';
import { useRouter } from 'next/router';

const Project = () => {
	const { query } = useRouter();
	return (
		<div className={styles.wrapper}>
			<video
				autoPlay
				src={`/assets/videos/projects/${query.projectId}.mp4`}
				className={styles.video}
			></video>
		</div>
	);
};

export default Project;
