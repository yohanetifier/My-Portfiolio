import React from 'react';
import Contact from '../components/Contact/Contact';
import Head from 'next/head';

const contact = () => {
	// const { setPrevPath } = useContext(ThemeContext);
	//Setup the prevPath so that the animation on the home page works fine
	// setPrevPath('contact');

	return (
		<>
			<Head>
				<title>Contact</title>
				<meta
					name='description'
					content='Contact Yohan Etifier about freelance web development'
				/>
			</Head>{' '}
			<Contact subtitle='Get in touch by email' />
		</>
	);
};

export default contact;
