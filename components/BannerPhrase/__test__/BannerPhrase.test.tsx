import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import BannerPhrase from '../BannerPhrase';
import gsap from 'gsap';

const bannerPhrase = ["LET'S", 'BUILD THE SITE', 'OF THE FUTURE'];
jest.mock('gsap');

afterEach(() => {
	cleanup;
});

describe('BannerPhrase', () => {
	test('should render correctly', () => {
		const scrollingDown = false;
		const isTouchDevice = false;
		const setIsFinished = () => {};
		render(
			<BannerPhrase
				bannerPhrase={bannerPhrase}
				scrollingDown={scrollingDown}
				isTouchDevice={isTouchDevice}
				setIsFinished={setIsFinished}
			/>,
		);
		const mainWrapper = screen.getByTestId('mainWrapper');
		const wrappers = screen.getAllByTestId('wrapper');
		const title = screen.getAllByRole('heading');
		expect(mainWrapper).toBeInTheDocument();
		expect(mainWrapper).toHaveClass('title');
		expect(wrappers.length).toBe(3);
		wrappers.forEach(wrapper => {
			expect(wrapper).toHaveClass('overflowHidden');
		});
		expect(title.length).toBe(3);
	});
	test('gsap animation work correctly on desktop', () => {
		render(
			<BannerPhrase
				bannerPhrase={bannerPhrase}
				scrollingDown={true}
				isTouchDevice={false}
				setIsFinished={() => {}}
			/>,
		);
		expect(gsap.to).toHaveBeenCalledWith(expect.anything(), {
			y: 120,
			stagger: 0.5,
			onComplete: expect.any(Function),
		});
	});
	test("gsap animation doesn't work on touch device", () => {
		render(
			<BannerPhrase
				bannerPhrase={bannerPhrase}
				scrollingDown={true}
				isTouchDevice={true}
				setIsFinished={() => {}}
			/>,
		);
		expect(gsap.to).toHaveBeenCalledWith(expect.anything(), {
			y: 0,
			stagger: 0.5,
			onComplete: expect.any(Function),
		});
	});
});
