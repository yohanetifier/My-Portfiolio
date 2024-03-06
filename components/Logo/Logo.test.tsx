import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Logo from './Logo';
import { ThemeContext } from '../Context/ThemeContext';

const customRender = ({ providerProps }, ui) => {
	return render(
		<ThemeContext.Provider value={providerProps}>{ui}</ThemeContext.Provider>,
	);
};

const props = {
	src: '/assets/images/logoooyo.svg',
	alt: 'log',
};

describe('Logo', () => {
	let providerProps;
	beforeEach(() => (providerProps = { setTitle: jest.fn() }));
	it('should have a img', () => {
		const { getByRole } = render(
			<Logo
				src='/assets/images/logoooyo.svg'
				alt='log'
			/>,
		);
		const logo = getByRole('img');
		expect(logo).toBeInTheDocument();
	});
	it('should begin the page transition after a click', () => {
		const { getByTestId } = render(<Logo {...props} />);
		const container = getByTestId('logo');
		const handleClick = jest.fn();
		fireEvent.click(container);
		expect(handleClick).toHaveBeenCalled();
	});
});
