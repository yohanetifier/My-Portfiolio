import { ReactNode, createContext, useState } from 'react';

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext({
	title: '',
	setTitle: (arg: string) => {},
	scrollingDown: false,
	setScrollingDown: (arg: boolean) => {},
	loading: false,
	setLoading: (arg: boolean) => {},
	menu: false,
	setMenu: (arg: boolean) => {},
	isClosed: false,
	setIsClosed: (arg: boolean) => {},
	showFloatingWrapper: false,
	setShowFloatingWrapper: (arg: boolean) => {},
	transition: '',
	setTransition: (arg: string) => {},
	endLoading: false,
	setEndLoading: (arg: boolean) => {},
	prevPath: '',
	setPrevPath: (arg: string) => {},
});

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({
	children,
}) => {
	const [title, setTitle] = useState<string>('');
	const [scrollingDown, setScrollingDown] = useState(false);
	const [loading, setLoading] = useState(false);
	const [menu, setMenu] = useState(false);
	const [isClosed, setIsClosed] = useState(false);
	const [showFloatingWrapper, setShowFloatingWrapper] = useState(false);
	const [transition, setTransition] = useState('');
	const [endLoading, setEndLoading] = useState(false);
	const [prevPath, setPrevPath] = useState('');

	return (
		<ThemeContext.Provider
			value={{
				title,
				setTitle,
				scrollingDown,
				setScrollingDown,
				loading,
				setLoading,
				menu,
				setMenu,
				isClosed,
				setIsClosed,
				showFloatingWrapper,
				setShowFloatingWrapper,
				transition,
				setTransition,
				endLoading,
				setEndLoading,
				prevPath,
				setPrevPath,
			}}
		>
			{' '}
			{children}{' '}
		</ThemeContext.Provider>
	);
};
