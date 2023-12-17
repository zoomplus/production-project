// libs
import React, { FC, useMemo, useState } from 'react';
// stores
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.NORMAL;
const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Themes>(defaultTheme) ;
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;