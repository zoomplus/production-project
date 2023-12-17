// libs
import { useState } from "react";
// styles
import classes from './Counter.module.scss';
// components

const Counter = () => {
    const [ counter, setCounter ] = useState(0);
    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button
                onClick={handleClick}
                className={classes.button}
            >
                { counter }
            </button>
        </div>
    );
};

export default Counter;