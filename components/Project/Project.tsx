import React from 'react';
import styles from './Project.module.scss';
import { useRouter } from 'next/router';

interface Props {}

const Project = (props: Props) => {
	const { query } = useRouter();
	return (
		<div className={styles.wrapper}>
			<video
				autoPlay
				src={`/assets/videos/${query.projectId}.mp4`}
				className={styles.video}
			></video>
		</div>
	);
};

export default Project;
