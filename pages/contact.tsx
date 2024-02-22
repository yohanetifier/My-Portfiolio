import React from 'react';
import Contact from '../components/Contact/Contact';

const contact = () => {
	// const { setPrevPath } = useContext(ThemeContext);
	//Setup the prevPath so that the animation on the home page works fine
	// setPrevPath('contact');

	return (
		<Contact
			title='Work together?'
			subtitle='Get in touch by email'
		/>
	);
};

export default contact;
