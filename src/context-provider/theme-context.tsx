import { createContext } from "react";
import { themes } from "../data/themes.ts";
import type { Theme, ThemeNames } from "../data/themes.ts";

const ThemeContext = createContext<Record<ThemeNames, Theme>>(themes);

export default ThemeContext;
