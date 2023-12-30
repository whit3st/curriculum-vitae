import { createContext, useContext } from "react";
import { themes, type Theme, type ThemeNames } from "../data/themes";

const ThemeContext = createContext<Record<ThemeNames, Theme>>(themes);

const useTheme = () => {
    const theme = useContext(ThemeContext);
    const selectedTheme = import.meta.env.PUBLIC_SELECTED_THEME as ThemeNames;
    return { theme, selectedTheme };
};

export default useTheme;
