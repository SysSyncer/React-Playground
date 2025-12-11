import {useContext, useState} from "react";
import {ThemeContext, ThemeProvider} from "./ThemeContext.tsx";

const ThemeContextExample = () => {
    const {theme, updateTheme} = useContext(ThemeContext);
    const [toggleTheme, setToggleTheme] = useState<boolean>(false);

    const handleClick = () => {
        updateTheme(toggleTheme ? "light" : "dark");
        setToggleTheme(!toggleTheme);
    }

    return (
        <ThemeProvider>
            <div className="flex gap-2 items-center">
                <p className="m-0 p-0l">{theme}</p>
                <input type="checkbox" onClick={handleClick} />
            </div>
        </ThemeProvider>
    )
}
export default ThemeContextExample
