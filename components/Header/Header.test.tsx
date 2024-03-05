import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
	it('should have a logo', () => {
		const { getByRole } = render(<Header />);
		const img = getByRole('img');
		expect(img).toBeInTheDocument();
	});
	it('should have a description', () => {
		const { getByText } = render(<Header />);
		const title = getByText('Yohan Etifier');
		const description = getByText('Creative web developer');
		expect(title).toHaveTextContent('Yohan Etifier');
		expect(description).toHaveTextContent('Creative web developer');
	});
});
