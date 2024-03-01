import React, { RefObject, useState } from 'react';
import styles from './Introduction.module.scss';
import AnimatedWords from '../AnimatedWords/AnimatedWords';
import AnimatedImg from '../AnimatedImg/AnimatedImg';
import { ArrayOfImg } from '../../typings/ArrayofImg';

type SourceImage = Pick<ArrayOfImg, 'src' | 'alt'>;

type Props = {
	words: string[];
	images: SourceImage[];
	counter?: RefObject<number>;
	setHideIntro: React.Dispatch<React.SetStateAction<boolean>>;
};

const Introduction = ({ words, counter, setHideIntro }: Props) => {
	const [animationComplete, setAnimationComplete] = useState<boolean>(false);
	const imagesArray = [
		{
			id: 1,
			src: '/assets/images/poker.jpeg',
			alt: 'poker',
			className: styles.imgWrapper,
		},
		{
			id: 2,
			src: '/assets/images/plane.jpeg',
			alt: 'plane',
			className: styles.imgWrapper1,
		},
		{
			id: 3,
			src: '/assets/images/echecs.jpeg',
			alt: 'echecs',
			className: styles.imgWrapper2,
		},
		{
			id: 4,
			src: '/assets/images/fitness.jpeg',
			alt: '',
			className: styles.imgWrapper3,
		},
		{
			id: 5,
			src: '/assets/images/foot.jpeg',
			alt: '',
			className: styles.imgWrapper4,
		},
	];

	return (
		<div className={`${styles.wrapper} entranceWrapper`}>
			<AnimatedWords
				arrayOfLetter={words}
				setAnimationComplete={setAnimationComplete}
			/>
			<AnimatedImg
				arrayOfImg={imagesArray}
				animationComplete={animationComplete}
				counter={counter}
				setHideIntro={setHideIntro}
			/>
		</div>
	);
};

export default Introduction;
