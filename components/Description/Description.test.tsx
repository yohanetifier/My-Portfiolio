import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Description from './Description';

describe('Description', () => {
	it('should render the good name and subtitle', () => {
		const { getByText } = render(
			<Description
				name='Test'
				subtitle='Step'
			/>,
		);
		const name = getByText('Test');
		const subtitle = getByText('Step');
		expect(name).toHaveTextContent('Test');
		expect(subtitle).toHaveTextContent('Step');
	});
});
