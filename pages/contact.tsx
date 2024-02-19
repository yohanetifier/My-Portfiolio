import React, { useContext } from 'react';
import Contact from '../components/Contact/Contact';
import { ThemeContext } from '../components/Context/ThemeContext';

interface Props {}

const contact = (props: Props) => {
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
