import React from 'react';
import IconWithText from '../IconWithText/IconWithText';
import styles from './ContactDetails.module.scss';
import { Contact } from '../../typings/contact';

interface Props {
	contact: Contact[];
}

const ContactDetails = ({ contact }: Props) => {
	return (
		<div className={styles.contact}>
			<h2>Contact</h2>
			<div className={styles.contactDetails}>
				{contact.map(({ icon, text, href }, i) => (
					<IconWithText
						key={i}
						icon={icon}
						text={text}
						href={href}
					/>
				))}
			</div>
		</div>
	);
};

export default ContactDetails;
