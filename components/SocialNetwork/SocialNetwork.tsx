import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialNetwork.module.scss';
import IconLink from '../IconLink/IconLink';

interface Props {}

const SocialNetwork = (props: Props) => {
	return (
		<div className={styles.mainWrapper}>
			<IconLink
				link='google.fr'
				icon={faGithub}
			/>
				<IconLink
				link='google.fr'
				icon={faLinkedin}
			/>
		
		</div>
	);
};

export default SocialNetwork;
