import React from 'react';
import IconWithText from '../IconWithText/IconWithText';
import styles from './ContactDetails.module.scss';
import { Contact } from '../../typings/contact';
import IconLink from '../IconLink/IconLink';

interface Props {
	contact: Contact[];
}

const ContactDetails = ({ contact }: Props) => {
	return (
		<div className={styles.contact}>
			<h2>Contact</h2>
			<div className={styles.contactDetails}>
				{contact.map(({ icon, text, href }, i) => (
					<IconLink
						key={i}
						icon={icon}
						text={text}
						link={href}
					/>
				))}
			</div>
		</div>
	);
};

export default ContactDetails;
