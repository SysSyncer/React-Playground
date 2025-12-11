import {createContext} from "react"

type ThemeContextType = "light" | "dark";

export const Name = createContext<string>("Hari");
export const ThemeContext = createContext<ThemeContextType>("light");

