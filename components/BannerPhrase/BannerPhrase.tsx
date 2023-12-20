import styles from './BannerPhrase.module.scss';
import gsap from 'gsap';

type Props = {
	bannerPhrase: String[];
	scrollingDown: boolean;
};

const BannerPhrase = ({ bannerPhrase, scrollingDown }: Props) => {
	const title = document.querySelectorAll('.animateTitle');
	scrollingDown
		? gsap.to(title, { y: 120, stagger: 0.5 })
		: gsap.to(title, { y: 0, stagger: 0.5 });

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
