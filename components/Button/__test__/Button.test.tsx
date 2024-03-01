import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';
import { ThemeContext, ThemeContextProvider } from '../../Context/ThemeContext';
import { useContext } from 'react';

/* Set context */

const mockedValue = {
	menu: false,
	setMenu: jest.fn(),
};

function renderContext() {
	return render(
		<ThemeContextProvider>
			<Button />
		</ThemeContextProvider>,
	);
}

describe('Button', () => {
	it('should have a button', () => {
		const { getByRole } = render(<Button />);
		const button = getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('class', 'button');
	});
	it('should call setMenu when the button is clicked', () => {
		renderContext();
		fireEvent.click(screen.getByRole('button'));
		expect(mockedValue.setMenu).toHaveBeenCalled();
	}),
		it('should have 2 spans', () => {
			const { getByRole } = render(<Button />);
			const button = getByRole('button');
			const spans = button.querySelectorAll('span');
			expect(spans.length).toBe(2);
		});

	it('should have one class when menu  is false', () => {
		const menu = false;
		const { getByRole } = render(<Button />);
		const button = getByRole('button');
		const spans = button.querySelectorAll('span');
		expect(spans[0]).toHaveClass('firstBar');
		expect(spans[1]).toHaveClass('secondBar');
	});
	// it('should have two class when menu  is true', () => {
	// 	const menu = true;
	// 	const { getByRole } = render(<Button />);
	// 	const button = getByRole('button');
	// 	const spans = button.querySelectorAll('span');
	// 	expect(spans[0]).toHaveClass('rotate');
	// 	expect(spans[1]).toHaveClass('s');
	// });
});
