import { AppProps } from 'next/app';
import '../styles/index.css';
import styles from '../styles/index.module.scss';
import { ThemeContextProvider } from '../components/Context/ThemeContext';
import PageTransition from '../components/PageTransition/PageTransition';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Cursor from '../components/Cursor/Cursor';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider>
			<PageTransition />
			<Cursor />
			<Header />
			<Menu />
			<Component {...pageProps} />
		</ThemeContextProvider>
	);
}

export default MyApp;
