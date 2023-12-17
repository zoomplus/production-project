// libs
import { useContext } from "react";

// stores
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Themes
}
const useTheme = (): UseThemeResult  => {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Themes.NORMAL ? Themes.DARK : Themes.NORMAL;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        toggleTheme,
        theme
    };
};

export default useTheme;