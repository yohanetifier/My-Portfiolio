import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IconLink from './IconLink';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

describe('IconLink', () => {
	it('should render a link', () => {
		const { getByRole } = render(
			<IconLink
				icon={faArrowLeft}
				link=''
				text=''
			/>,
		);
		const link = getByRole('link');
		expect(link).toBeInTheDocument();
	});
	it('should have no class when there is no text', () => {
		const { getByRole } = render(
			<IconLink
				icon={faArrowLeft}
				link=''
				text=''
			/>,
		);
		const link = getByRole('link');
		expect(link).not.toHaveClass();
	});
	it('should have a class mainWrapper when there is a text', () => {
		const { getByRole } = render(
			<IconLink
				icon={faArrowLeft}
				link=''
				text='class'
			/>,
		);
		const link = getByRole('link');
		expect(link).toHaveClass('mainWrapper');
	});
	it('should have a p when there is a text', () => {
		const { getByText } = render(
			<IconLink
				icon={faArrowLeft}
				link=''
				text='text'
			/>,
		);
		const p = getByText('text');
		expect(p).toHaveTextContent('text');
	});
	it('should have no p when there is no text', () => {
		const { container } = render(
			<IconLink
				icon={faArrowLeft}
				link=''
				text=''
			/>,
		);
		const p = document.querySelector('p');
		expect(p).not.toBeInTheDocument();
	});
});
