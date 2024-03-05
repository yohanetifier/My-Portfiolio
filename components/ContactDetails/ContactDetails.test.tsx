import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactDetails from './ContactDetails';

describe('ContactDetails', () => {
	it('should have a title', () => {
		const { getByRole } = render(<ContactDetails contact={[]} />);
		const heading = getByRole('heading');
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent('Contact');
	});
});
