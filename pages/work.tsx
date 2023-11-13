import { Canvas, useThree } from '@react-three/fiber';
import React, { useState } from 'react';
import styles from '../components/Work/Work.module.scss';
import Work from '../components/Work/Work';
import { useMotionValue, MotionValue } from 'framer-motion';

interface Props {}

const work = (props: Props) => {
	const [activeTexture, setActiveTexture] = useState<number>(0);
	const [clickTest, setClickTest] = useState<boolean>(false);
	const [arrayLengthOfTexture, setArrayLengthOfTexture] = useState<number>(0);
	const disabledPrevButton = activeTexture === 0;
	const disabledNextButton = activeTexture === arrayLengthOfTexture;
	const testUpdatedValue: MotionValue<number> = useMotionValue(0.0);

	const handleClickNextButton = () => {
		setActiveTexture(activeTexture + 1);
		setClickTest(true);
		console.log(activeTexture);
	};
	return (
		<main className={styles.wrapper}>
			<Canvas className={styles.canvas}>
				<Work
					activeTexture={activeTexture}
					clickTest={clickTest}
					setClickTest={setClickTest}
					setArrayLengthOfTexture={setArrayLengthOfTexture}
					testUpdatedValue={testUpdatedValue}
				/>
			</Canvas>
			<div className={styles.pagination}>
				<button
					className={styles.prev}
					onClick={() => setActiveTexture(activeTexture - 1)}
					disabled={disabledPrevButton}
				>
					Prev
				</button>
				<button
					className={styles.next}
					onClick={() => handleClickNextButton()}
					disabled={disabledNextButton}
				>
					Next
				</button>
			</div>
		</main>
	);
};

export default work;
