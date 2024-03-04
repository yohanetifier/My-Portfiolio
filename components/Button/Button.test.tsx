import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';
import { ThemeContext } from '../Context/ThemeContext';

const customRender = (ui, { providerProps, ...renderOptions }) => {
	return render(
		<ThemeContext.Provider value={providerProps}>{ui}</ThemeContext.Provider>,
		renderOptions,
	);
};

describe('Button', () => {
	let providerProps;
	beforeEach(
		() =>
			(providerProps = {
				menu: false,
				setMenu: jest.fn(function (menu) {
					providerProps.menu = !providerProps.menu;
				}),
			}),
	);

	it('should have a button', () => {
		const { getByRole } = render(<Button />);
		const button = getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('class', 'button');
	});
	it('should call setMenu when the button is clicked', () => {
		const { getByRole } = customRender(<Button />, { providerProps });
		const button = getByRole('button');
		fireEvent.click(button);
		expect(providerProps.setMenu).toHaveBeenCalled();
		expect(providerProps.menu).toBe(true);
	});
	it('should have 2 spans', () => {
		const { getByRole } = render(<Button />);
		const button = getByRole('button');
		const spans = button.querySelectorAll('span');
		expect(spans.length).toBe(2);
	});

	it('should have one class when menu  is false', () => {
		providerProps.menu = false;
		const { getByRole } = render(<Button />);
		const button = getByRole('button');
		const spans = button.querySelectorAll('span');
		expect(spans[0]).toHaveClass('firstBar');
		expect(spans[1]).toHaveClass('secondBar');
	});
	it('should have two class when the menu is true', () => {
		providerProps.menu = true;
		const { getByRole } = customRender(<Button />, { providerProps });
		const button = getByRole('button');
		const spans = button.querySelectorAll('span');
		expect(spans[0].className).toBe('firstBar rotateFirstBar');
		expect(spans[1].className).toBe('secondBar rotateSecondBar');
	});
});
