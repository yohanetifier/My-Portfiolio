import { AppProps } from 'next/app';
import '../styles/index.css';
import PageTransition from '../components/PageTransition/PageTransition';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp ( { Component, pageProps }: AppProps ) {
	const ROUTER = useRouter();
	return <Component { ...pageProps } />

}

export default MyApp;
