import { AppProps } from 'next/app';
import '../styles/index.css';
import PageTransition from '../components/PageTransition/PageTransition';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	// const ROUTER = useRouter();
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
