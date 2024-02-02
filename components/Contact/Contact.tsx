'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Contact.module.scss';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import ShowEmail from '../ShowEmail/ShowEmail';
import Footer from '../Footer/Footer';
import Connect from '../Connect/Connect';
interface Props {
	title: string;
	subtitle: string;
}

const Contact = ({ title, subtitle }: Props) => {
	const [show, setShow] = useState<boolean>(false);
	const height = useRef(0);
	useLayoutEffect(() => {
		height.current = window.innerHeight;
	}, [height]);

	return (
		<section
			className={styles.mainWrapper}
			style={{ height: height.current }}
		>
			<div className={styles.leftWrapper}>
				<div className={styles.contactWrapper}>
					<Connect />
					<div className={styles.emailWrapper}>
						<a
							className={styles.subtitle}
							onMouseEnter={() => setShow(true)}
							onMouseLeave={() => setShow(false)}
						>
							{subtitle}
						</a>
						<ShowEmail
							show={show}
							className={styles.showEmail}
						/>
					</div>
					<SocialNetwork />
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Contact;
