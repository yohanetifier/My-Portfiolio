import React, { useState } from 'react';
import styles from './Contact.module.scss';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import ShowEmail from '../ShowEmail/ShowEmail';

interface Props {
	title: string;
	subtitle: string;
}

const Contact = ({ title, subtitle }: Props) => {
	const [show, setShow] = useState<boolean>(false);

	return (
		<section className={styles.mainWrapper}>
			<div className={styles.leftWrapper}>
				<div className={styles.contactWrapper}>
					<h2 className={styles.title}>{title}</h2>
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
			<div></div>
		</section>
	);
};

export default Contact;
