// libs
import React, { Suspense } from 'react';
import { Routes, Route, Link  } from 'react-router-dom';
// styles
// stores
// hooks
import useTheme from "./theme/useTheme";
// components
import AboutPageAsync from "./pages/AboutPage/async";
import MainPageAsync from "./pages/MainPage/async";
// helpers
import {classNames} from "./helpers/classNames"; 

const App = () => {
    const {
        theme,
        toggleTheme
    } = useTheme();

    return (
        <div
            className = {
                classNames({
                    cls: 'app',
                    additional: [
                        theme,
                    ]
                })
            }
        >
            <button onClick={toggleTheme}>toggle theme</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'} >О нас</Link>

            <Suspense fallback={'loading'}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;