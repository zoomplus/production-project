// stores
import { createContext } from "react";

export enum Themes {
    DARK = 'dark',
    NORMAL = 'normal'
}
interface ThemeContextProps {
    theme?: Themes,
    setTheme?: (theme: Themes) => void,
}
export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'LOCAL_STORAGE_THEME_KEY';
