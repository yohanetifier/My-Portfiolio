import { AppProps } from 'next/app';
import '../styles/index.css';
import styles from '../styles/index.module.scss';
import { ThemeContextProvider } from '../components/Context/ThemeContext';
import PageTransition from '../components/PageTransition/PageTransition';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider>
			{/* <div className={styles.wrapper}> */}
			<PageTransition />
			<Component {...pageProps} />
			{/* </div> */}
		</ThemeContextProvider>
	);
}

export default MyApp;
