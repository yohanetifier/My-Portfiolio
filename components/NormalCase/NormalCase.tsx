import React from 'react';

interface Props {
	x: number;
	y: number;
	tileSize: number;
	color: string;
}

const NormalCase = ({ x, y, tileSize, color }: Props) => {
	return (
		<mesh
			// key={`${x}-${y}`}
			position={[x * tileSize, 0, y * tileSize]}
		>
			<boxGeometry args={[tileSize, 0.5, tileSize]} />
			<meshStandardMaterial
				transparent
				color={color}
			/>
		</mesh>
	);
};

export default NormalCase;
