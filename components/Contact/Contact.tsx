import { useState } from 'react';
import styles from './Contact.module.scss';
import Connect from '../Connect/Connect';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Contact } from '../../typings/contact';
import ContactDetails from '../ContactDetails/ContactDetails';

export const contact: Contact[] = [
	{
		icon: faEnvelope,
		text: 'yohanetifier@gmail.com',
		href: 'mailto:yohanetifier@gmail.com',
	},

	{
		icon: faLinkedin,
		text: 'Linkedin',
		href: 'https://www.linkedin.com/in/yohan-etifier-7a486a166/',
	},
	{
		icon: faGithub,
		text: 'Github',
		href: 'https://github.com/yohanetifier',
	},
	{
		icon: faXTwitter,
		text: 'Twitter',
		href: 'https://twitter.com/yohanwebdev',
	},
	{
		icon: faInstagram,
		text: 'Instagram',
		href: 'https://www.instagram.com/yohanwebdev/',
	},
];

const Contact = () => {
	return (
		<section className={styles.mainWrapper}>
			<div className={styles.leftWrapper}>
				<div className={styles.contactWrapper}>
					<Connect />
					<ContactDetails contact={contact} />
				</div>
			</div>
		</section>
	);
};

export default Contact;
