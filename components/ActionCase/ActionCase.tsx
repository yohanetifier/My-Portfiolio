import { useCursor } from '@react-three/drei';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { useRouter } from 'next/router';

interface Props {
	tileSize: number;
	x: number;
	y: number;
	scrollingDown: boolean;
	color: string;
}

const ActionCase = ({ tileSize, x, y, scrollingDown, color }: Props) => {
	const { setTitle, setLoading } = useContext(ThemeContext);
	const [hovered, setHovered] = useState<boolean>(false);
	const ACTION_COLOR = '#303030';
	const router = useRouter();
	useCursor(hovered);

	const setUpTitleOnHover = (x, y) => {
		const cases = {
			'5-2': 'work',
			'4-3': 'about',
			'4-5': 'contact',
		};
		const position = `${x}-${y}`;
		const title = cases[position];
		return title;
	};

	const title = setUpTitleOnHover(x, y);
	const handleClick = e => {
		e.stopPropagation();
		setTitle(title);
		setLoading(true);
	};
	return (
		<mesh
			key={`${x}-${y}`}
			position={[x * tileSize, 0, y * tileSize]}
			onClick={e => {
				handleClick(e);
			}}
			onPointerOver={() => setTitle(title)}
			onPointerOut={() => {
				setTitle('');
			}}
		>
			<boxGeometry args={[tileSize, 0.5, tileSize]} />
			<meshStandardMaterial
				transparent
				color={scrollingDown ? ACTION_COLOR : color}
			/>
		</mesh>
	);
};

export default ActionCase;
