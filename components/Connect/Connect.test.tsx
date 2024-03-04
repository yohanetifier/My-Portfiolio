import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Connect from './Connect';

describe('Connect', () => {
	it('should have a div as parentElement', () => {
		const { getByTestId } = render(<Connect />);
		const parentElement = getByTestId('parentElement');
		expect(parentElement).toBeInTheDocument();
		expect(parentElement.className).toBe('alignTitle');
	});
	it('should have a parentElement with 3 child', () => {
		const { getByTestId } = render(<Connect />);
		const parentElement = getByTestId('parentElement');
		const children = parentElement.children;
		expect(children.length).toEqual(3);
	});
	it('the first child must be a h2 with lets textcontent', () => {
		const { getByTestId } = render(<Connect />);
		const parentElement = getByTestId('parentElement');
		const children = parentElement.children;
		expect(children[0].textContent).toBe(`LET'S`);
	});
	it('the second child must be an overlap wrapper with 3 h2', () => {
		const { getByTestId } = render(<Connect />);
		const parentElement = getByTestId('parentElement');
		const overlapWrapper = parentElement.children[1];
		const overlapMessage = overlapWrapper.querySelectorAll('h2');
		expect(overlapMessage[0].textContent).toBe('WORK');
		expect(overlapMessage[1].textContent).toBe('BUILD');
		expect(overlapMessage[2].textContent).toBe('TALK');
	});
	it('the third child must be an h2 with TOGETHER as textContent', () => {
		const { getByTestId } = render(<Connect />);
		const parentElement = getByTestId('parentElement');
		const thirdChild = parentElement.children[2];
		expect(thirdChild).toBeInTheDocument();
		expect(thirdChild.textContent).toBe('TOGETHER');
	});
});
