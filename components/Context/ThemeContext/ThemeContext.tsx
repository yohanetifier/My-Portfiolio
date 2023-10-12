import { ReactNode, createContext, useState } from "react";

// interface ThemeContext {
//     isVisible: boolean;
//     setIsVisible: ( arg: boolean ) => {};
// }

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext( {
    title: 'WORK',
    setTitle: ( arg: string ) => { }
} );

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ( { children } ) => {
    const [ title, setTitle ] = useState<string>( '' );
    return (
        <ThemeContext.Provider value={ { title, setTitle } }> { children } </ThemeContext.Provider>
    );
};
