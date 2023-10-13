import { Text3D, useCursor } from '@react-three/drei';
import React, { Provider, useContext, useState } from 'react';
import NormalCase from '../NormalCase/NormalCase';
import { ThemeContext, ThemeContextProvider } from '../Context/ThemeContext/ThemeContext';

interface Props {
	tileSize: number;
	x: number;
	y: number;
	scrollingDown: boolean;
	color: string;
}


const ActionCase = ( { tileSize, x, y, scrollingDown, color }: Props ) => {
	const { setTitle } = useContext( ThemeContext );
	const [ hovered, setHovered ] = useState<boolean>( false );
	const ACTION_COLOR = '#303030';
	useCursor( hovered );

	const setUpTitleOnHover = ( x, y ) => {
		const cases = {
			'5-2': 'work',
			'4-3': 'about',
			'4-5': 'contact'
		};
		const position = `${ x }-${ y }`;
		const title = cases[ position ];
		return title;
	};

	const title = setUpTitleOnHover( x, y );

	return (
		<mesh
			key={ `${ x }-${ y }` }
			position={ [ x * tileSize, 0, y * tileSize ] }
			onClick={ e => {
				e.stopPropagation();
			} }
			onPointerOver={ () => setTitle( title ) }
			onPointerOut={ () => {
				setTitle( '' );

			} }
		>
			<boxGeometry args={ [ tileSize, 0.5, tileSize ] } />
			<meshStandardMaterial
				transparent
				color={ scrollingDown ? ACTION_COLOR : color }
			/>
		</mesh>
	);
};

export default ActionCase;
