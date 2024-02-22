// 'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.scss';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import ShowEmail from '../ShowEmail/ShowEmail';
import Footer from '../Footer/Footer';
import Connect from '../Connect/Connect';
import Cursor from '../Cursor/Cursor';
interface Props {
	subtitle: string;
}

const Contact = ({ subtitle }: Props) => {
	const [show, setShow] = useState<boolean>(false);
	const height = useRef(0);
	useEffect(() => {
		height.current = window.innerHeight;
	}, [height]);

	return (
		<section
			className={styles.mainWrapper}
			style={{ height: '100vh' }}
		>
			<Cursor />
			<div className={styles.leftWrapper}>
				<div className={styles.contactWrapper}>
					<Connect />
					<div className={styles.emailWrapper}>
						<p
							className={styles.subtitle}
							onMouseEnter={() => setShow(true)}
							onMouseLeave={() => setShow(false)}
						>
							{subtitle}
						</p>
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
