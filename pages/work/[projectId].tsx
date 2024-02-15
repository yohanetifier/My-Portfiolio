import React, { useEffect, useRef } from 'react';
import styles from './project.module.scss';
import { useRouter } from 'next/router';
import gsap from 'gsap';

interface Props {}

const pages = (props: Props) => {
	const { query } = useRouter();
	const videoRef = useRef();
	// useEffect(() => {
	// 	gsap.set(videoRef.current, { scale: 0 });
	// 	gsap.to(videoRef.current, { scale: 1, duration: 2 });
	// }, []);
	return (
		<div className={styles.wrapper}>
			<video
				ref={videoRef}
				autoPlay
				src={`/assets/videos/${query.projectId}.mp4`}
				className={styles.video}
			></video>
		</div>
	);
};

export default pages;
