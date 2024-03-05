import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import BannerPhrase from './BannerPhrase';
import gsap from 'gsap';
import { ThemeContext } from '../Context/ThemeContext';

const bannerPhrase = ["LET'S", 'BUILD THE SITE', 'OF THE FUTURE'];
jest.mock('gsap');

afterEach(() => {
	cleanup;
});

const customRender = (ui, { providerProps }) => {
	return render(
		<ThemeContext.Provider value={providerProps}>{ui}</ThemeContext.Provider>,
	);
};

describe('BannerPhrase', () => {
	let providerProps;
	beforeEach(
		() =>
			(providerProps = {
				scrollingDown: false,
				isTouchDevice: false,
			}),
	);
	test('should render correctly', () => {
		const setIsFinished = () => {};
		customRender(
			<BannerPhrase
				bannerPhrase={bannerPhrase}
				scrollingDown={providerProps.scrollingDown}
				isTouchDevice={providerProps.isTouchDevice}
				setIsFinished={setIsFinished}
			/>,
			{ providerProps },
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
	// test('gsap animation work correctly on desktop', () => {
	// 	providerProps.scrollingDown = true;
	// 	providerProps.isTouchDevice = false;
	// 	customRender(
	// 		<BannerPhrase
	// 			bannerPhrase={bannerPhrase}
	// 			scrollingDown={providerProps.scrollingDown}
	// 			isTouchDevice={providerProps.isTouchDevice}
	// 			setIsFinished={() => {}}
	// 		/>,
	// 		{ providerProps },
	// 	);
	// 	const title = document.querySelector('.animateTitle');
	// 	expect(gsap.to).toHaveBeenCalledWith(title, {
	// 		y: 120,
	// 		stagger: 0.5,
	// 		onComplete: expect.any(Function),
	// 	});
	// });
	// test("gsap animation doesn't work on touch device", () => {
	// 	providerProps.scrollingDown = false;
	// 	providerProps.isTouchDevice = false;
	// 	customRender(
	// 		<BannerPhrase
	// 			bannerPhrase={bannerPhrase}
	// 			scrollingDown={providerProps.scrollingDown}
	// 			isTouchDevice={providerProps.isTouchDevice}
	// 			setIsFinished={() => {}}
	// 		/>,
	// 		{ providerProps },
	// 	);
	// 	expect(gsap.to).toHaveBeenCalledWith(expect.anything(), {
	// 		y: 100,
	// 		stagger: 0.5,
	// 		onComplete: expect.any(Function),
	// 	});
	// });
});
