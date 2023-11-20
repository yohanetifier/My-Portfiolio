import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import styles from '../components/Work/Work.module.scss';
import Work from '../components/Work/Work';
import { useMotionValue, MotionValue } from 'framer-motion';

interface Props {}

const work = (props: Props) => {
	const [activeTexture, setActiveTexture] = useState<number>(0);
	const [hasClickedOn, setHasClickedOn] = useState<string>('');
	const [arrayLengthOfTexture, setArrayLengthOfTexture] = useState<number>(0);
	const disabledPrevButton = activeTexture === 0;
	const disabledNextButton = activeTexture === arrayLengthOfTexture;
	const testUpdatedValue: MotionValue<number> = useMotionValue(0.0);
	const testUpdatedValueSecond: MotionValue<number> = useMotionValue(1.0);

	const handleClickNextButton = () => {
		setActiveTexture(activeTexture + 1);
		setHasClickedOn('next');
	};

	const handleClickPrevButton = () => {
		setActiveTexture(activeTexture - 1);
		setHasClickedOn('prev');
	};

	return (
		<main className={styles.wrapper}>
			<Canvas className={styles.canvas}>
				<Work
					activeTexture={activeTexture}
					hasClickedOn={hasClickedOn}
					setHasClickedOn={setHasClickedOn}
					setArrayLengthOfTexture={setArrayLengthOfTexture}
					testUpdatedValue={testUpdatedValue}
					testUpdatedValueSecond={testUpdatedValueSecond}
				/>
			</Canvas>
			<div className={styles.pagination}>
				<button
					className={styles.prev}
					onClick={handleClickPrevButton}
					disabled={disabledPrevButton}
				>
					PREV
				</button>
				<button
					className={styles.next}
					onClick={handleClickNextButton}
					disabled={disabledNextButton}
				>
					Next
				</button>
			</div>
		</main>
	);
};

export default work;
