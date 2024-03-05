import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AnimatedWords from './AnimatedWords';
import gsap from 'gsap';

const arrayOfLetter = ['T', 'E', 'S', 'T'];
jest.mock('gsap');

describe('AnimatedWords', () => {
	test('should render correctly', () => {
		render(
			<AnimatedWords
				arrayOfLetter={arrayOfLetter}
				setAnimationComplete={() => {}}
			/>,
		);
	});
	test('should have span and div', () => {
		render(
			<AnimatedWords
				arrayOfLetter={arrayOfLetter}
				setAnimationComplete={() => {}}
			/>,
		);
		const spans = screen.getAllByTestId('span');
		const div = screen.getByTestId('div');
		expect(div).toBeInTheDocument();
		expect(spans).toHaveLength(4);
		spans.forEach(span => {
			expect(span).toHaveClass('letter');
		});
	});
	test('display the good text content', () => {
		render(
			<AnimatedWords
				arrayOfLetter={arrayOfLetter}
				setAnimationComplete={() => {}}
			/>,
		);
		const spans = screen.getAllByTestId('span');
		expect(spans[0]).toHaveTextContent('T');
		expect(spans[1]).toHaveTextContent('E');
		expect(spans[2]).toHaveTextContent('S');
		expect(spans[3]).toHaveTextContent('T');
	});
	test('gsap animation work correctly', () => {
		render(
			<AnimatedWords
				arrayOfLetter={arrayOfLetter}
				setAnimationComplete={() => {}}
			/>,
		);
		expect(gsap.fromTo).toHaveBeenCalledWith(
			expect.any(Array),
			{ x: -100, opacity: 0 },
			{
				x: 0,
				stagger: 0.5,
				opacity: 1,
				onComplete: expect.any(Function),
			},
		);
	});
});
