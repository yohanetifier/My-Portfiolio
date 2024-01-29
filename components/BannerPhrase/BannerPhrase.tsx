import styles from './BannerPhrase.module.scss';
import gsap from 'gsap';

type Props = {
	bannerPhrase: String[];
	scrollingDown: boolean;
	setIsFinished?: (arg: boolean) => void;
};

const BannerPhrase = ({
	bannerPhrase,
	scrollingDown,
	setIsFinished,
}: Props) => {
	const title = document.querySelectorAll('.animateTitle');
	scrollingDown
		? gsap.to(title, {
				y: 120,
				stagger: 0.5,
				onComplete: () => {
					setIsFinished(true);
				},
		  })
		: gsap.to(title, {
				y: 0,
				stagger: 0.5,
				onUpdate: () => {
					setIsFinished(false);
				},
		  });

	return (
		<div className={styles.title}>
			{bannerPhrase.map((phrase, index) => (
				<div
					className={styles.overflowHidden}
					key={index}
				>
					<h2 className='animateTitle'>{phrase}</h2>
				</div>
			))}
		</div>
	);
};

export default BannerPhrase;
