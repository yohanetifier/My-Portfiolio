import { useRef, useState } from 'react';
import { useGLTF, useCursor } from '@react-three/drei';
import { useControls } from 'leva';
import ActionCase from '../ActionCase/ActionCase';
import NormalCase from '../NormalCase/NormalCase';

type Props = {
	scrollingDown: boolean;
};

const Checkboard = ({ scrollingDown }: Props) => {
	const { position, rotation } = useControls('chessboard', {
		position: {
			value: {
				x: 0,
				y: 3,
				z: -12,
			},
			step: 1,
		},
		rotation: {
			value: { x: 0, y: -0.63, z: 0 },
			step: 0.01,
		},
	});

	const meshRef = useRef();
	const groupArray = useRef();
	const newRef = useRef();
	const actionCase = useRef();
	const { nodes, materials } = useGLTF('./queen-and-checkboard-test4.glb');
	const boardSize = 8;
	const tileSize = 3;
	const chessboardArray = [];
	const [color, setColor] = useState<string>('white');
	const [hovered, set] = useState<boolean>(false);

	useCursor(hovered);
	for (let x = 0; x < boardSize; x++) {
		for (let y = 0; y < boardSize; y++) {
			for (let z = 0; z < boardSize; z++) {
				const isEven = (x + y) % 2 === 0;
				const color = isEven ? 'black' : 'white';
				const matchCases = [
					[5, 2],
					[4, 3],
					[4, 5],
				];

				chessboardArray.push(
					matchCases.some(([caseX, caseY]) => x === caseX && y === caseY) ? (
						<ActionCase
							x={x}
							y={y}
							scrollingDown={scrollingDown}
							tileSize={tileSize}
							color={color}
						/>
					) : (
						<NormalCase
							x={x}
							y={y}
							tileSize={tileSize}
							color={color}
						/>
					),
				);
			}
		}
	}

	return (
		<>
			{/* <OrbitControls /> */}
			<group
				position={[position.x, position.y, position.z]}
				rotation={[rotation.x, rotation.y, rotation.z]}
				ref={groupArray}
			>
				{chessboardArray}
			</group>
		</>
	);
};

export default Checkboard;
