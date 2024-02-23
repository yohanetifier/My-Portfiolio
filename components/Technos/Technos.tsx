import { Text3D } from '@react-three/drei';
import { useControls, Leva } from 'leva';
import React from 'react';

const Technos = () => {
	let desktopS;
	let tabletS;
	let mobileS;
	let mobileM;
	if (typeof window !== 'undefined') {
		desktopS = window.matchMedia('(max-width: 1024px)').matches;
		tabletS = window.matchMedia('(max-width: 912px)').matches;
		mobileM = window.matchMedia('(max-width: 450px)').matches;
		mobileS = window.matchMedia('(max-width: 280px)').matches;
	}
	const {
		react,
		mongo,
		nodeJs,
		expressJs,
		docker,
		typescript,
		nextJs,
		git,
		ciCd,
		graphQl,
		threeD,
		r3F,
	} = useControls('position', {
		react: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : 1,
				y: tabletS ? 2 : 1,
				z: tabletS ? 0 : -5,
			},
		},
		mongo: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : -5,
				y: tabletS ? 0 : 1,
				z: tabletS ? 0 : -3,
			},
		},
		nodeJs: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : -1,
				y: tabletS ? -1 : 2,
				z: tabletS ? 0 : 1,
			},
		},
		expressJs: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : desktopS ? 2 : 3,
				y: tabletS ? -2 : 1,
				z: tabletS ? 0 : 0,
			},
		},
		docker: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : -1,
				y: tabletS ? -3 : -2,
				z: tabletS ? 0 : 1,
			},
		},
		typescript: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : desktopS ? -5 : -8,
				y: tabletS ? -4 : 3,
				z: tabletS ? 0 : -1,
			},
		},
		nextJs: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : desktopS ? -3 : -5,
				y: tabletS ? 1 : -1,
				z: tabletS ? 0 : 1,
			},
		},
		git: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : desktopS ? 2 : 4,
				y: tabletS ? -6 : 2,
				z: tabletS ? 0 : 1,
			},
		},
		ciCd: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : 3,
				y: tabletS ? -7 : -1,
				z: tabletS ? 0 : -1,
			},
		},
		graphQl: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : desktopS ? 2 : 3,
				y: tabletS ? -8 : -2,
				z: tabletS ? 0 : 0.5,
			},
		},
		threeD: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : -0.5,
				y: tabletS ? -9 : -1,
				z: tabletS ? 0 : 0.5,
			},
		},
		r3F: {
			value: {
				x: mobileM ? -1 : tabletS ? -2 : desktopS ? -0.5 : -6.5,
				y: tabletS ? -5 : 0.5,
				z: tabletS ? 0 : 0.5,
			},
		},
	});
	const { expressJsR, typescriptR, r3fR, nextJsR, graphqlR, gitR } =
		useControls('rotation', {
			expressJsR: {
				value: {
					x: 0,
					y: tabletS ? 0 : -0.5,
					z: 0,
				},
			},
			typescriptR: {
				value: {
					x: 0,
					y: tabletS ? 0 : 0.5,
					z: 0,
				},
			},
			r3fR: {
				value: {
					x: 0,
					y: tabletS ? 0 : 0.5,
					z: 0,
				},
			},
			nextJsR: {
				value: {
					x: 0,
					y: tabletS ? 0 : 0.5,
					z: 0,
				},
			},
			graphqlR: {
				value: {
					x: 0,
					y: tabletS ? 0 : -0.5,
					z: 0,
				},
			},
			gitR: {
				value: {
					x: 0,
					y: tabletS ? 0 : -0.5,
					z: 0,
				},
			},
		});

	const props = {
		font: '/fonts/helvetiker_regular.typeface.json',
		size: mobileS ? 0.3 : mobileM ? 0.4 : 0.4,
	};
	return (
		<>
			<Leva hidden />
			<Text3D
				position={[react.x, react.y, react.z]}
				{...props}
			>
				React
			</Text3D>
			<Text3D
				position={[mongo.x, mongo.y, mongo.z]}
				{...props}
			>
				Mongo
			</Text3D>
			<Text3D
				position={[nodeJs.x, nodeJs.y, nodeJs.z]}
				{...props}
			>
				NodeJs
			</Text3D>
			<Text3D
				// ref={textRef}
				position={[expressJs.x, expressJs.y, expressJs.z]}
				rotation={[expressJsR.x, expressJsR.y, expressJsR.z]}
				{...props}
			>
				ExpressJS
			</Text3D>
			<Text3D
				position={[docker.x, docker.y, docker.z]}
				{...props}
			>
				Docker
			</Text3D>
			<Text3D
				position={[typescript.x, typescript.y, typescript.z]}
				rotation={[typescriptR.x, typescriptR.y, typescriptR.z]}
				{...props}
			>
				Typescript
			</Text3D>
			<Text3D
				position={[nextJs.x, nextJs.y, nextJs.z]}
				rotation={[nextJsR.x, nextJsR.y, nextJsR.z]}
				{...props}
			>
				NextJs
			</Text3D>
			<Text3D
				position={[git.x, git.y, git.z]}
				rotation={[gitR.x, gitR.y, gitR.z]}
				{...props}
			>
				Git
			</Text3D>
			<Text3D
				position={[ciCd.x, ciCd.y, ciCd.z]}
				{...props}
			>
				CI/CD
			</Text3D>
			<Text3D
				position={[graphQl.x, graphQl.y, graphQl.z]}
				rotation={[graphqlR.x, graphqlR.y, graphqlR.z]}
				{...props}
			>
				GraphQL
			</Text3D>
			<Text3D
				position={[threeD.x, threeD.y, threeD.z]}
				{...props}
			>
				3D
			</Text3D>
			<Text3D
				position={[r3F.x, r3F.y, r3F.z]}
				rotation={[r3fR.x, r3fR.y, r3fR.z]}
				{...props}
			>
				R3F
			</Text3D>
		</>
	);
};

export default Technos;
