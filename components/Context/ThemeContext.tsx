import { ReactNode, createContext, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext( {
    title: '',
    setTitle: ( arg: string ) => { },
    scrollingDown: false,
    setScrollingDown: ( arg: boolean ) => { },
    loading: false,
    setLoading: ( arg: boolean ) => { }
} );

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ( { children } ) => {
    const [ title, setTitle ] = useState<string>( '' );
    const [ scrollingDown, setScrollingDown ] = useState( false );
    const [ loading, setLoading ] = useState( false );

    return (
        <ThemeContext.Provider value={ { title, setTitle, scrollingDown, setScrollingDown, loading, setLoading } }> { children } </ThemeContext.Provider>
    );
};
