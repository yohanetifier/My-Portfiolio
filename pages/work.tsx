import Head from 'next/head';
import WorkList from '../components/WorkList/WorkList';

const work = () => {
	return (
		<main>
			<Head>
				<title>Work - Yohan Etifier</title>
				<meta
					name='description'
					content='Look at my latest projects'
				/>
			</Head>
			<WorkList />
		</main>
	);
};

export default work;
