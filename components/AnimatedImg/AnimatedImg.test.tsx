import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AnimatedImg from './AnimatedImg';

describe('AnimatedImg', () => {
	it('should render correctly', () => {
		const arrayOfImg = [
			{
				id: 1,
				src: '/exemple.png',
				alt: 'exemple',
				className: 'exemple',
			},
			{
				id: 2,
				src: '/test.png',
				alt: 'test',
				className: 'test',
			},
		];
		const { container } = render(
			<AnimatedImg
				arrayOfImg={arrayOfImg}
				animationComplete={false}
				setHideIntro={() => {}}
			/>,
		);
		expect(container).toMatchSnapshot();
		const figureList = screen.getAllByRole('figure');
		const imageList = screen.getAllByRole('img');
		expect(figureList).toHaveLength(2);
		expect(imageList).toHaveLength(2);
		/* Check class */
		expect(figureList[0]).toHaveClass('exemple');
		expect(figureList[1]).toHaveClass('test');
		/* Check props */
		expect(imageList[1]).toHaveProperty('src');
		expect(imageList[1]).toHaveProperty('alt');
		expect(imageList[1]).toHaveProperty('className');
	});
});
