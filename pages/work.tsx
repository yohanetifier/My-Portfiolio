import { Canvas } from '@react-three/fiber';
import React, { useContext, useState } from 'react';
import styles from '../components/Work/Work.module.scss';
import Work from '../components/Work/Work';
import PageTransition from '../components/PageTransition/PageTransition';
import { ThemeContext } from '../components/Context/ThemeContext';

interface Props {}

const work = (props: Props) => {
	const { setPrevPath } = useContext(ThemeContext);
	setPrevPath('work');

	const [activeTexture, setActiveTexture] = useState<number>(0);
	const [hasClickedOn, setHasClickedOn] = useState<string>('');
	const [arrayLengthOfTexture, setArrayLengthOfTexture] = useState<number>(0);
	const disabledButton = hasClickedOn === 'next' || hasClickedOn === 'prev';
	const disabledPrevButton = activeTexture === 0 || disabledButton;
	const disabledNextButton =
		activeTexture === arrayLengthOfTexture || disabledButton;

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
