import s from './Main.module.css'
import React, {useState} from "react";

const Main = () => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 3);
    };

    const decrease = () => {
        if (counter - 2 < 0) {
            setCounter(0);
        } else {
            setCounter(counter - 2);
        }
    };

    const reset = () =>{
        setCounter(0)
    }

    return (
        <div className={s.Wrapper}>
            <div className={s.main}>
                <div className={s.counter}>
                    <span>{counter}</span>
                </div>
                <div className={s.button_list}>
                    <button onClick={increase}>Увеличить</button>
                    <button onClick={decrease}>Уменьшить</button>
                    <button onClick={reset}>Сбросить</button>
                </div>
            </div>
        </div>
    )
};

export default Main;

