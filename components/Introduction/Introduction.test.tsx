import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Introduction from './Introduction';

const words: string[] = ['H', 'E', 'L', 'L', 'O'];
const setHideIntro = jest.fn();
const images = [];

describe('Introduction', () => {
	it('should render correctly', () => {
		const { container } = render(
			<Introduction
				setHideIntro={setHideIntro}
				words={words}
				images={images}
			/>,
		);
		// expect(container).toMatchSnapshot();
	});
	it('should have a words', () => {
		const { getByText, getAllByText } = render(
			<Introduction
				setHideIntro={setHideIntro}
				words={words}
				images={images}
			/>,
		);
		const hLetter = getByText('H');
		const eLetter = getByText('E');
		const lLetters = getAllByText('L');
		const oLetter = getByText('O');
		expect(hLetter).toBeInTheDocument();
		expect(eLetter).toBeInTheDocument();
		expect(lLetters).toHaveLength(2);
		expect(oLetter).toBeInTheDocument();
	});
	it('should have 2 imgs', () => {
		const { getAllByRole } = render(
			<Introduction
				setHideIntro={setHideIntro}
				words={words}
				images={images}
			/>,
		);
		const imgs = getAllByRole('img');
		expect(imgs).toHaveLength(5);
	});
});
