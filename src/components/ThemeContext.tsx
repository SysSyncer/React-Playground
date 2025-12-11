import {createContext, type ReactNode, useState} from "react";

type Themes = "light" | "dark"

interface ThemeContextType {
    theme: Themes
    updateTheme: (newTheme: Themes) => void
}

const ThemeContext = createContext<ThemeContextType>({theme: "light", updateTheme: () => {}});

const ThemeProvider = ({children} : {children: ReactNode}) => {
    const [theme, setTheme] = useState<Themes>("light");

    const updateTheme = (newTheme: Themes) => {
        setTheme(newTheme);
    }

    return (
        <ThemeContext value={{theme, updateTheme}}>
            {children}
        </ThemeContext>
    )
}

export {ThemeProvider, ThemeContext};