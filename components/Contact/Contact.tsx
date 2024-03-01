import { useState } from 'react';
import styles from './Contact.module.scss';
import Connect from '../Connect/Connect';
import IconWithText from '../IconWithText/IconWithText';
import { faEnvelope, faX } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Contact } from '../../typings/contact';
import ContactDetails from '../ContactDetails/ContactDetails';
interface Props {
	subtitle: string;
}

const Contact = ({ subtitle }: Props) => {
	const [show, setShow] = useState<boolean>(false);
	// const height = useRef(0);
	// useEffect(() => {
	// 	height.current = window.innerHeight;
	// }, [height]);

	const contact: Contact[] = [
		{
			icon: faEnvelope,
			text: 'yohanetifier@gmail.com',
			href: '',
		},

		{
			icon: faGithub,
			text: 'Github',
			href: 'https://github.com/yohanetifier',
		},
		{
			icon: faXTwitter,
			text: 'Twitter',
			href: '',
		},
		{
			icon: faLinkedin,
			text: 'Linkedin',
			href: 'https://www.linkedin.com/in/yohan-etifier-7a486a166/',
		},
		{
			icon: faInstagram,
			text: 'Instagram',
			href: '',
		},
	];
	return (
		<section
			className={styles.mainWrapper}
			// style={{ height: height.current }}
		>
			<div className={styles.leftWrapper}>
				<div className={styles.contactWrapper}>
					<Connect />
					<ContactDetails contact={contact} />
				</div>
			</div>
			{/* <Footer /> */}
		</section>
	);
};

export default Contact;
