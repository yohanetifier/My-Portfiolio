import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
	it('should render a section', () => {
		const { container } = render(<Contact />);
		expect(container).toMatchSnapshot();
	});
	it('should have 5 socialNetwork', () => {
		const { getAllByRole } = render(<Contact />);
		const link = getAllByRole('link');
		expect(link).toHaveLength(5);
	});
	it('have the overlap wrapper', () => {
		const { getByText } = render(<Contact />);
		const lets = getByText(`LET'S`);
		const work = getByText(`WORK`);
		const build = getByText(`BUILD`);
		const talk = getByText(`TALK`);
		const together = getByText(`TOGETHER`);
		expect(lets).toBeInTheDocument();
		expect(work).toBeInTheDocument();
		expect(build).toBeInTheDocument();
		expect(talk).toBeInTheDocument();
		expect(together).toBeInTheDocument();
	});
});
